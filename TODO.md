# DineForward

> A monorepo containing an api and client to handle the DineForward app.

## Dev notes

- Typically for quickstart apps like this I use [Keystone.JS](https://www.keystonejs.com) though recently I maybe have fallen out of favor with it becuase I don'like the db schema it generates (it's better for relational db's not read-centric db's like mongo.). But for this quick-start I think its fine.
- Added some very strict eslints from another project, originally based on material-ui's eslint. I like strict usually, but some of these can get a bit overbearing, if it's blocking you for now -- change it.

## Todo

### Core Functionality

- Keystone Schema (lists)
- Passport Auth (email, fb, google (any others?))
- Email integration (mailchimp?)
- Deployment (AdaptJS)
- Admin UI
- Admin API's (keystone/graphql)
- Stripe Itegration
- Google Places API Integration
- (considering) algolia integration or mongo fulltext
- GetStream.io integration for social feed.
- Sanity.io integration for Content Management.
- PhotoUploading -> (cloudinary?) or just direct to Fastly
- Marketing site
  - About
  - Blog
  - TOS / Privacy
  - Homepage

### Nice to have

- Commenting
- Allow Restaurants to invite staff to create profiles tied to the restaurant

## Ideas

- I think we should deploy to Google Cloud, I think they would give us some hosting credits.
- Ask Andrew if we can get some Mongo credits?
