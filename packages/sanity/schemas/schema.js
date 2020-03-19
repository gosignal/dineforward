/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// localization
// import { localeString, localeBlockContent, localeText } from './locale';

// import our schemas
import post from './post';
import blockContent from './blockContent';
import sponsor from './sponsor';
import page from './page';
import category from './category';
import author from './author';
import blockText from './blockText';
import person from './person';
import projectMember from './projectMember';
import siteSettings from './siteSettings';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // localeString,
    // localeBlockContent,
    // localeText,
    post,
    blockContent,
    projectMember,
    blockText,
    sponsor,
    page,
    person,
    category,
    author,
    siteSettings,
  ]),
});
