/* eslint-disable no-console */

module.exports = async keystone => {
  // Count existing users
  const {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeQuery(
    `query {
      _allUsersMeta {
        count
      }
    }`,
  );

  if (count === 0) {
    const password = 'password123';
    const email = 'team@dineforward.org';

    await keystone.executeQuery(
      `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      {
        variables: {
          password,
          email,
        },
      },
    );

    console.log(`

    User created:
      email: ${email}
      password: ${password}
      
      Please change these details after initial login.
`);
  }
};
