const pages = [
  'home',
  'login',
  'search',
  'business',
  'checkout',
  'profile',
  'restaurant',
  'bizpro',
];

const metadata = {
  navigation: {
    home: {
      login: {},
      signup: {},
      search: {},
      business: {
        contnet: {
          signupForm: {},
          exampleProfile: {},
          Faqs: {},
        },
        forms: ['register'],
        register: {},
        profile: {},
      },
      admin: {
        business: {},
        user: {},
      },
      faq: {},
      checkout: {
        functionality: ['share', 'emailReceipt', 'inviteGroup'],
        cart: {},
      },
      otherWaysToSupport: {
        nonprofilts: {},
        petitions: {},
        supportDineForward: {},
      },
    },
  },
};

const forms = [];

const types = {
  contentpage: {
    about: {},
    faq: {},
  },
};
