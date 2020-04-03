import React from 'react';

const MetaData = props => {
  const { gtag } = props;

  return (
    <>
      <meta name="viewport" content="minimum-scale=1, width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta charSet="utf-8" />
      <meta property="og:url" content="https://dineforward.org" />
      <meta property="og:title" content="Dine Forward" />
      <meta property="og:image" content="https://dineforward.com/avo-unsplash.jpg" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@dineforward" />
      <meta name="twitter:title" content="Dine Forward - back your favorite restaurants " />
      <meta
        name="twitter:description"
        content="Buy a beer, a dinner, tip the staff, or donate to your favorite restaurants."
      />
      <meta name="twitter:image" content="https://dineforward.com/avo-unsplash.jpg" />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${gtag}', { 'anonymize_ip': true });
                    `,
        }}
      />
    </>
  );
};
export default MetaData;
