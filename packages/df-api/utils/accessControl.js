const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);

const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};

const userIsBusiness = ({ authentication: { item: user } }) => Boolean(user && user.isBusiness);

const userIsAdminOrOwner = auth => {
  const isAdmin = userIsAdmin(auth);
  const isOwner = userOwnsItem(auth);
  return isAdmin || isOwner;
};

const userIsBusinessOrOwner = auth => {
  const isBusiness = userIsBusiness(auth);
  const isOwner = userOwnsItem(auth);
  return isBusiness || isOwner;
};

const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner, userIsBusinessOrOwner };

const useAuthStrategy = ks =>
  ks.createAuthStrategy({
    type: PasswordAuthStrategy,
    list: 'User',
  });

module.exports = { access, useAuthStrategy };
