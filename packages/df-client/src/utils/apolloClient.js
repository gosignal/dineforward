import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';

export default function createApolloClient(initialState, ctx) {
  const linkOpts = {
    uri: process.env.API_URL, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    fetch,
  };

  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  // The Keystone session ID cookie will be present here if this is SSR and
  // the user has a session.
  const sid = ctx && ctx['keystone.sid'];
  if (sid) linkOpts.headers = { 'keystone.sid': ctx['keystone.sid'] };

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink(linkOpts),
    cache: new InMemoryCache().restore(initialState),
  });
}
