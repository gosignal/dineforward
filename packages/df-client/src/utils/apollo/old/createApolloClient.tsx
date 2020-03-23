import { IncomingMessage } from 'http';
import { NextPageContext } from 'next';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';
import cookie from 'cookie';

/**
 * Get the user token from cookie
 */
const getToken = (req?: IncomingMessage) => {
  const cookies = cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
  );

  return cookies.token;
};

const createApolloClient = (initialState = {}, ctx: NextPageContext) => {
  const fetchOptions = {
    agent: null,
  };

  // If you are using a https_proxy, add fetchOptions with 'https-proxy-agent' agent instance
  // 'https-proxy-agent' is required here because it's a sever-side only module
  if (typeof window === 'undefined') {
    if (process.env.https_proxy) {
      fetchOptions.agent = new (require('https-proxy-agent'))(
        process.env.https_proxy,
      );
    }
  }

  const httpLink = new HttpLink({
    uri: process.env.GRAPHQL_URL, // Server URL (must be absolute)
    credentials: 'same-origin',
    fetch,
    fetchOptions,
  });

  const authLink = setContext((_request, { headers }) => {
    const token = getToken(ctx?.req);

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    connectToDevTools: Boolean(ctx),
    ssrMode: Boolean(ctx),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState),
  });
};

export default createApolloClient;

/*
NOTE: mark - This code uses the keystone session id

export default function createApolloClient(initialState, ctx) {
  console.log("initclient", process.env.API_URL)
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
*/