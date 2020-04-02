const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  emailWebsiteLink,
  GOOGLE_MAPS_KEY,
} = require('@dineforward/config');

const uuid = require('uuid/v4');
const { sendEmail } = require('../utils/email');

const {
  File,
  CloudinaryImage,
  Checkbox,
  DateTime,
  Integer,
  Password,
  Decimal,
  Relationship,
  Select,
  Text,
  Url,
  Location,
  OEmbed,
  Unsplash,
  Virtual,
  Slug,
} = require('@keystonejs/fields');

const { CloudinaryAdapter } = require('@keystonejs/file-adapters');
const { DateTimeUtc } = require('@keystonejs/fields-datetime-utc');
const { Wysiwyg } = require('@keystonejs/fields-wysiwyg-tinymce');
const { atTracking, byTracking } = require('@keystonejs/list-plugins');
const { AuthedRelationship } = require('@keystonejs/fields-authed-relationship');

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: CLOUDINARY_CLOUD_NAME,
  apiKey: CLOUDINARY_KEY,
  apiSecret: CLOUDINARY_SECRET,
});

const { access } = require('../utils/accessControl');

// Read: public / Write: admin
const DEFAULT_LIST_ACCESS = {
  create: access.userIsAdmin,
  read: true,
  update: access.userIsAdmin,
  delete: access.userIsAdmin,
};

const User = {
  access: {
    create: true,
    read: access.userisAdminOrCurrentAuth,
    update: access.userisAdminOrCurrentAuth,
    delete: access.userIsAdmin,
    auth: true,
  },
  fields: {
    name: { type: Text, isRequired: true },

    // auth related
    email: {
      type: Text,
      isUnique: true,
      access: {
        read: access.userisAdminOrCurrentAuth,
        // We don't currently have the UI/flow for users to update their email,
        // which probably requires some additional validation.
        // Remove update restriction when that's implemented.
        update: access.userIsAdmin,
      },
    },
    password: { type: Password },
    isAdmin: { type: Checkbox, access: { update: access.userIsAdmin } },
    isBusiness: { type: Checkbox, access: { update: access.userIsAdmin } },

    // Fun info
    favoriteFood: { type: Text },
    twitterHandle: { type: Text },
    yelpUrl: { type: Text },

    username: { type: Text, isUnique: true },
    googleId: { type: Text, access: access.userIsAdmin },
    facebookId: { type: Text, access: access.userIsAdmin },

    userSlug: {
      type: Slug,
      from: 'username',
      // There might be some restrictons we want to enforce here. Disallow
      // for now.
      access: { update: access.userIsAdmin },
    },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    lastLogin: {
      type: DateTimeUtc,
    },
    managingBusinesses: {
      type: Relationship,
      ref: 'Business',
      many: true,
      access: { update: access.userIsAdminOrBusiness },
    },
    backing: {
      type: Relationship,
      ref: 'Business',
      many: true,
      access: { update: access.userIsAdminOrBusiness },
    },
  },
  labelResolver: item => `${item.name} <${item.email}>`,
  hooks: {
    afterChange: async ({ updatedItem, existingItem }) => {
      if (!existingItem) {
        await sendEmail('welcome', updatedItem.email, {
          displayName: updatedItem.name,
        });
      }

      if (existingItem && updatedItem.password !== existingItem.password) {
        await sendEmail('passwordUpdated', updatedItem.email, {
          displayName: updatedItem.name,
        });
      }
    },
  },
  plugins: [atTracking({}), byTracking({})],
};

/**
 * Delivery Partner
 * Menu
 *
 */
const Business = {
  access: {
    create: access.userIsAdminOrBusiness,
    read: true,
    update: access.userIsAdminOrItemOwner,
    delete: access.userIsAdminOrItemOwner,
  },
  fields: {
    name: { type: Text, isRequired: true },
    description: { type: Wysiwyg },
    owner: {
      type: AuthedRelationship,
      ref: 'User',
      access: {
        update: access.userIsAdmin,
      }
    },
    staffMembers: { type: Relationship, ref: 'StaffName', many: true },
    profileImage: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    heroImage: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    themeColor: { type: Text },

    location: {
      type: Location,
      googleMapsKey: GOOGLE_MAPS_KEY,
    },
    address1: { type: Text },
    address2: { type: Text },
    city: { type: Text },
    state: { type: Text },
    zip: { type: Text },
    mainEmail: { type: Text },
    mainPhone: { type: Text },

    businessSlug: {
      type: Slug,
      from: 'name',
      // There might be some restrictons we want to enforce here. Disallow
      // for now.
      access: { update: access.userIsAdmin },
    },
    backers: {
      type: Relationship,
      ref: 'User',
      many: true,
    },
    status: {
      type: Select,
      options: [
        {
          value: 'active',
          label: 'Active',
        },
        {
          value: 'closed',
          label: 'Closed',
        },
        {
          value: 'limited',
          label: 'Limited',
        },
        {
          value: 'takeout',
          label: 'Takeout only',
        },
      ],
    },
  },
  plugins: [atTracking({}), byTracking({})],
};

// TODO: We can't access the existing item at the list update level yet,
// read access needs to check if event is "active" or if the user is admin
// read: ({ existingItem, authentication }) => access.userIsAdmin({ authentication }) || !!(existingItem && existingItem.status === 'active'),

/**
 * Set a max of 8 (open ended, and donation)?
 * optional tip (extra)
 *
 */

const Offering = {
  access: DEFAULT_LIST_ACCESS,
  fields: {
    name: { type: Text },
    details: { type: Text },
    status: { type: Select, options: 'draft, active', defaultValue: 'draft' },
    business: { type: Relationship, ref: 'Business' },
    price: { type: Decimal, symbol: '$' },
    currency: { type: Text },
    description: { type: Wysiwyg },
    maxSlots: { type: Integer, defaultValue: 120 },
    iAvailable: { type: Checkbox, defaultValue: true },
  },
  plugins: [atTracking({}), byTracking({})],
};

const Purchase = {
  access: {
    create: true,
    read: true,
    update: ({ authentication: { item } }) => {
      if (!item) {
        return false;
      }
      return { user: { id: item.id } };
    },
    delete: access.userIsAdmin,
  },
  fields: {
    item: { type: Relationship, ref: 'Offering' },
    business: { type: Relationship, ref: 'Business' },
    user: { type: Relationship, ref: 'User' },
  },
  hooks: {
    validateInput: async ({ resolvedData, existingItem, actions }) => {
      // const { item } = existingItem ? existingItem : resolvedData;
      const { item, business, user } = resolvedData;

      // keeping for reference -- how to directly query keystone
      //
      // const { data } = await actions.query(`query {
      //   event: Event(where: { id: "${eventId}" }) {
      //     id
      //     startTime
      //     maxRsvps
      //     isRsvpAvailable
      //   }
      //   allRsvps(where: { event: { id: "${eventId}" }}) {
      //     id
      //   }
      // }`);

      // const { event, allRsvps } = data;

      // Todo
      // Decrement the inventory

      // if (
      //   !event ||
      //   !event.isRsvpAvailable ||
      //   !event.startTime ||
      //   new Date() > new Date(event.startTime) ||
      //   allRsvps.length >= event.maxRsvps
      // ) {
      //   throw 'Error rsvping to event';
      // }
    },
  },
};

const StaffName = {
  access: DEFAULT_LIST_ACCESS,
  fields: {
    name: { type: Text },
    position: { type: Text },
    useraccount: {
      type: Relationship,
      ref: 'User',
    },
    photo: { type: CloudinaryImage, adapter: cloudinaryAdapter },
  },
  plugins: [atTracking({}), byTracking({})],
};

const ForgottenPasswordToken = {
  access: {
    create: true,
    read: true,
    update: access.userIsAdmin,
    delete: access.userIsAdmin,
  },
  fields: {
    user: {
      type: Relationship,
      ref: 'User',
      access: {
        read: access.userIsAdmin,
      },
    },
    token: {
      type: Text,
      isRequired: true,
      isUnique: true,
      access: {
        read: access.userIsAdmin,
      },
    },
    requestedAt: { type: DateTime, isRequired: true },
    accessedAt: { type: DateTime },
    expiresAt: { type: DateTime, isRequired: true },
  },
  plugins: [atTracking({}), byTracking({})],
  hooks: {
    afterChange: async ({ updatedItem, existingItem, actions: { query } }) => {
      if (existingItem) return null;

      const now = new Date().toISOString();

      const { errors, data } = await query(
        `
        query GetUserAndToken($user: ID!, $now: DateTime!) {
          User( where: { id: $user }) {
            id
            email
          }
          allForgottenPasswordTokens( where: { user: { id: $user }, expiresAt_gte: $now }) {
            token
            expiresAt
          }
        }
      `,
        { skipAccessControl: true, variables: { user: updatedItem.user.toString(), now } },
      );

      if (errors) {
        console.error(errors, `Unable to construct password updated email.`);
        return;
      }

      const { allForgottenPasswordTokens, User } = data;
      const forgotPasswordKey = allForgottenPasswordTokens[0].token;

      await sendEmail('lostPassword', User.email, {
        lostPasswordLink: `${emailWebsiteLink}/change-password?key=${forgotPasswordKey}`,
        displayName: User.name,
      });
    },
  },
  mutations: [
    {
      schema: 'startPasswordRecovery(email: String!): ForgottenPasswordToken',
      resolver: async (obj, { email }, context, info, { query }) => {
        const token = uuid();

        const tokenExpiration =
          parseInt(process.env.RESET_PASSWORD_TOKEN_EXPIRY) || 1000 * 60 * 60 * 24;

        const now = Date.now();
        const requestedAt = new Date(now).toISOString();
        const expiresAt = new Date(now + tokenExpiration).toISOString();

        const { errors: userErrors, data: userData } = await query(
          `
            query findUserByEmail($email: String!) {
              allUsers(where: { email: $email }) {
                id
                email
              }
            }
          `,
          { variables: { email }, skipAccessControl: true },
        );

        if (userErrors) {
          console.error(
            userErrors,
            `Unable to find user when trying to create forgotten password token.`,
          );
          return;
        }

        const userId = userData.allUsers[0].id;

        const result = {
          userId,
          token,
          requestedAt,
          expiresAt,
        };

        const { errors } = await query(
          `
            mutation createForgottenPasswordToken(
              $userId: ID!,
              $token: String,
              $requestedAt: DateTime,
              $expiresAt: DateTime,
            ) {
              createForgottenPasswordToken(data: {
                user: { connect: { id: $userId }},
                token: $token,
                requestedAt: $requestedAt,
                expiresAt: $expiresAt,
              }) {
                id
                token
                user {
                  id
                }
                requestedAt
                expiresAt
              }
            }
          `,
          { variables: result, skipAccessControl: true },
        );

        if (errors) {
          console.error(errors, `Unable to create forgotten password token.`);
          return;
        }

        return true;
      },
    },
    {
      schema: 'changePasswordWithToken(token: String!, password: String!): User',
      resolver: async (obj, { token, password }, context, info, { query }) => {
        const now = Date.now();

        const { errors, data } = await query(
          `
            query findUserFromToken($token: String!, $now: DateTime!) {
              passwordTokens: allForgottenPasswordTokens(where: { token: $token, expiresAt_gte: $now }) {
                id
                token
                user {
                  id
                }
              }
            }
          `,
          { variables: { token, now }, skipAccessControl: true },
        );

        if (errors || !data.passwordTokens || !data.passwordTokens.length) {
          console.error(errors, `Unable to find token`);
          throw errors.message;
        }

        const user = data.passwordTokens[0].user.id;
        const tokenId = data.passwordTokens[0].id;

        const { errors: passwordError } = await query(
          `mutation UpdateUserPassword($user: ID!, $password: String!) {
            updateUser(id: $user, data: { password: $password }) {
              id
            }
          }
        `,
          { variables: { user, password }, skipAccessControl: true },
        );

        if (passwordError) {
          console.error(passwordError, `Unable to change password`);
          throw passwordError.message;
        }

        await query(
          `mutation DeletePasswordToken($tokenId: ID!) {
            deleteForgottenPasswordToken(id: $tokenId) {
              id
            }
          }
        `,
          { variables: { tokenId }, skipAccessControl: true },
        );

        return true;
      },
    },
  ],
};

// content management schemdas

const ContentPage = {
  access: DEFAULT_LIST_ACCESS,
  fields: {
    name: { type: Text },
    slug: { type: Text },
    status: {
      type: Select,
      defaultValue: 'draft',
      options: [{ label: 'Draft', value: 'draft' }, { label: 'Published', value: 'published' }],
    },
    blocks: {
      type: Relationship,
      ref: 'BlockContent',
      many: true,
    },
  },
  plugins: [atTracking({}), byTracking({})],
};

const BlockContent = {
  access: DEFAULT_LIST_ACCESS,

  fields: {
    name: { type: Text },
    title: { type: Text },
    subtitle: { type: Text },
    hero: { type: File, adapter: cloudinaryAdapter },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter, many: true },
    textContent: { type: Text, many: true },
    richContent: { type: Wysiwyg },
  },
  adminConfig: {
    defaultPageSize: 20,
    defaultColumns: 'name, status',
    defaultSort: 'name',
  },
  plugins: [atTracking({}), byTracking({})],
};

const Inquiry = {
  fields: {
    name: { type: Text },
    email: { type: Text, isRequired: true },
    phone: { type: Text },
    message: { type: Text, isRequired: true, isMultiline: true },
  },
  plugins: [atTracking({}), byTracking({})],
};

module.exports = {
  User,
  Business,
  Offering,
  Purchase,
  StaffName,
  ForgottenPasswordToken,
  BlockContent,
  ContentPage,
};
