require('../initEnv');

const uuid = require('uuid/v4');
const { sendEmail } = require('../emails');

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
const { Content } = require('@keystonejs/field-content');
const { Markdown } = require('@keystonejs/fields-markdown');

const cloudinaryAdapter = new CloudinaryAdapter({
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_KEY,
  apiSecret: process.env.CLOUDINARY_SECRET,
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
    update: access.userIsCurrentAuth,
    delete: access.userIsAdmin,
  },
  fields: {
    name: { type: Text },

    // auth related
    email: { type: Text, isUnique: true, access: { read: access.userIsCurrentAuth } },
    password: { type: Password },
    isAdmin: { type: Checkbox, access: { update: access.userIsAdmin } },
    isBusiness: { type: Checkbox, access: { update: access.userIsAdmin } },

    // Fun info
    favoriteFood: { type: Text },
    twitterHandle: { type: Text },
    yelpUrl: { type: Text },

    username: { type: Text, isUnique: true },
    googleId: { type: Text },
    facebookId: { type: Text },

    userSlug: {
      type: Slug,
      from: 'username',
    },
    image: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    lastLogin: {
      type: DateTimeUtc,
    },
    managingBusinesses: {
      type: Relationship,
      ref: 'Business',
      many: true,
      access: { update: access.userIsBusinessOrOwner },
    },
    backing: {
      type: Relationship,
      ref: 'Business',
      many: true,
      access: { update: access.userOwnsItem },
    },
  },
  labelResolver: item => `${item.name} <${item.email}>`,
  hooks: {
    afterChange: async ({ updatedItem, existingItem }) => {
      if (existingItem && updatedItem.password !== existingItem.password) {
        const url = process.env.EXTERNAL_URL;

        const props = {
          recipientEmail: updatedItem.email,
          signinUrl: `${url}/signin`,
        };

        const options = {
          subject: 'Your password has been updated',
          to: updatedItem,
          from: process.env.MAILGUN_FROM,
          domain: process.env.MAILGUN_DOMAIN,
          apiKey: process.env.MAILGUN_API_KEY,
        };

        await sendEmail('password-updated.jsx', props, options);
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
  access: DEFAULT_LIST_ACCESS,
  fields: {
    name: { type: Text },
    description: { type: Wysiwyg },
    owner: { type: Relationship, ref: 'User' },
    staffMembers: { type: Relationship, ref: 'StaffName', many: true },
    profileImage: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    heroImage: { type: CloudinaryImage, adapter: cloudinaryAdapter },
    themeColor: { type: Text },
    location: {
      type: Location,
      googleMapsKey: process.env.GOOGLE_MAPS_KEY,
    },
    businessSlug: {
      type: Slug,
      from: 'name',
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
      const url = process.env.EXTERNAL_URL;

      const props = {
        forgotPasswordUrl: `${url}/change-password?key=${forgotPasswordKey}`,
        recipientEmail: User.email,
      };

      const options = {
        subject: 'Request for password reset',
        to: User.email,
        from: process.env.MAILGUN_FROM,
        domain: process.env.MAILGUN_DOMAIN,
        apiKey: process.env.MAILGUN_API_KEY,
      };

      await sendEmail('forgot-password.jsx', props, options);
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
