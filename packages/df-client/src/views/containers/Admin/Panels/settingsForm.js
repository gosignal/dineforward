// export const addBusiness = {
export default {
  form: {
    name: 'Manage your settings',
    fieldgroups: ['Business Info', 'Payment'],
    fields: [
      {
        name: 'name',
        label: 'Name',
        group: 'Basic Info',
      },
      {
        name: 'email',
        label: 'Email',
        group: 'Basic Info',
      },
      {
        name: 'bankname',
        label: 'Bank Name',
        group: 'Payment',
      },
      {
        name: 'routing',
        label: 'Routing Number',
        group: 'Payment',
      },
      {
        name: 'account',
        label: 'Account Number',
        group: 'Payment',
      },
      {
        name: 'ein',
        label: 'IRS Tax ID',
        group: 'Payment',
      },
    ],
  },
};

// export default { addBusiness };
