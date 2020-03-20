import Dashboard from './pages/dashboard';

export default {
  pages: () => [
    {
      label: 'Admin Home',
      path: '',
      component: Dashboard,
    },
    {
      label: 'Businesses',
      children: [
        { listKey: 'Business', label: 'Businesses' },
        { listKey: 'Offering', label: 'Business Offerings' },
        { listKey: 'StaffName', label: 'Staff' },
        { listKey: 'Purchase', label: 'Purchases' },
      ],
    },
    {
      label: 'Users',
      children: ['User'],
    },
    {
      label: 'Website Content',
      children: ['ContentPage', 'BlockContent'],
    },
  ],
};

// {
//       label: 'Blog',
//       children: [
//         { listKey: 'Post' },
//         { label: 'Categories', listKey: 'PostCategory' },
//         { listKey: 'Comment' },
//       ],
//     },
// pages: [
//         {
//           label: 'Businesses',
//           children: ['Business', 'Offering', 'StaffName', 'Purchase'],
//         },
//         {
//           label: 'User',
//           children: ['User', 'ForgottenPasswordToken'],
//         },
//       ],
