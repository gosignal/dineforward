/** **
 * KEYSTONE LISTS - AKA Data Schema
 * Lists are a keystone specific entity. They are like models, but more...
 * Since keystone is a CMS as well, they also allow you to control what
 * form elements/validations are used to edit them from the admin view.
 * more info: https://www.keystonejs.com/api/create-list
 * - wk - 3/9/2020
 *
 * Side note - Not sure I like their ORM, db adapter needs work, currently
 * it creates mongo tables like a relational database. Gross...
 *
 */
const schemas = require('./schema');

const registerAppLists = ks => schemas.map(schema => ks.createList(schema.model, schema.schema));

module.exports = { registerAppLists };
