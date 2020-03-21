import React, { useContext } from 'react'
import redirect from './redirect'

const IdentityContext = React.createContext(null);

const loginPage = '/login'

export const redirectToLogin = (ctx) => {
  if (
    (ctx && ctx.pathname === loginPage) ||
    (typeof window !== 'undefined' && window.location.pathname === loginPage)
  ) {
    return
  }

  redirect(ctx, loginPage)
}

const makeWithIdentity = userRequired => PageComponent => {
  return class IdentityProvider extends React.Component {
    static displayName = `IdentityProvider(Page)`;
    static async getInitialProps(ctx) {
      // Get inner page's props
      const pageProps = PageComponent.getInitialProps ?
        await PageComponent.getInitialProps(ctx) : {};

      const user = ctx?.req?.user;

      // If user info is required, redirect if we don't have it.
      if (userRequired && !user) redirectToLogin(ctx);

      return {
        ...pageProps,
        session: user,
      }
    }

    render() {
      const { session, ...pageProps } = this.props

      return (
        <IdentityContext.Provider value={session}>
          <PageComponent {...pageProps} />
        </IdentityContext.Provider>
      )
    }
  }
}

// Provides identity info if user is logged in
export const withIdentity = makeWithIdentity(false);

// Requires that user must be logged in
export const withIdentityRequired = makeWithIdentity(true);

export const useIdentity = () => useContext(IdentityContext)
