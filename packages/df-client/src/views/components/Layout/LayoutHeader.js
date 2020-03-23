import React from 'react';
import Head from 'next/head';

const LayoutHeader = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    <link rel="stylesheet" href="https://use.typekit.net/kqg1boj.css" />
    <script
      type="text/javascript"
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBDF10tb80Z9hBkyKc6gtmWtuWH1NRMA64&libraries=places"
      async
      defer
    />
    <title>DineForward - Support your favorite Restaurants</title>
  </Head>
);

export default LayoutHeader;
