// export const addBusiness = {
export default {
  form: {
    name: 'Add a Business',
    fieldgroups: ['Business Info'],
    fields: [
      {
        name: 'name',
        label: 'Business Name',
        group: 'Business Info',
      },
      {
        name: 'description',
        label: 'Description',
        group: 'Business Info',
      },
      {
        name: 'status',
        label: 'Status',
        type: 'select',
        options: [
          {
            label: 'Active',
            value: 'active',
          },
          {
            label: 'Takeout',
            value: 'takeout',
          },
          {
            label: 'Closed',
            value: 'closed',
          },
        ],
        group: 'Business Info',
      },
    ],
  },
};

// export default { addBusiness };
