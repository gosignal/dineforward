/**
 * Access control functions
 *
 */

/*
 * Single operation tests
 */

const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userIsBusiness = ({ authentication: { item: user } }) => Boolean(user && user.isBusiness);

/**
 * For use ONLY for access functions within the `User` list. Do NOT use on other
 * lists.
 */
const userIsCurrentAuth = ({ authentication: { item: user } }) => {
  if (!user || !user.id) return false;
  // Return value structure is "where" parameter
  return {
    id: user.id,
  };
};

/**
 * For use on lists that have an `owner` field that is a `User`
 */
const userIsItemOwner = ({ authentication: { item: user } }) => {
  if (!user || !user.id) return false;
  // Return value structure is "where" parameter
  return {
    owner: { id: user.id },
  };
};

const userIsLoggedIn = ({ authentication: { item: user } }) => Boolean(user);

/*
 * Compound operation tests
 * Convention for combination functions: Order test names alphabetically
 */

const userIsAdminOrBusiness = auth => userIsAdmin(auth) || userIsBusiness(auth);

/**
 * For use ONLY for access functions within the `User` list. Do NOT use on other
 * lists.
 */
const userisAdminOrCurrentAuth = auth => userIsAdmin(auth) || userIsCurrentAuth(auth);

/**
 * For use on lists that have an `owner` field that is a `User`
 */
const userIsAdminOrItemOwner = auth => userIsAdmin(auth) || userIsItemOwner(auth);

/**
 * For use on lists that have an `owner` field that is a `User`
 */
const userIsBusinessOrItemOwner = auth => userIsBusiness(auth) || userIsItemOwner(auth);

const access = {
  userIsAdmin,
  userIsAdminOrBusiness,
  userisAdminOrCurrentAuth,
  userIsAdminOrItemOwner,
  userIsBusiness,
  userIsBusinessOrItemOwner,
  userIsCurrentAuth,
  userIsItemOwner,
  userIsLoggedIn,
};

module.exports = { access };