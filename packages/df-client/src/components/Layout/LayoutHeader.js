import React from 'react';
import Head from 'next/head';

const LayoutHeader = () => (
  <Head>
    <link rel="stylesheet" href="styles/app.css" />
    <link rel="stylesheet" href="styles/old.css" />

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>DineForward - Support your favorite Restaurants</title>
  </Head>
);

export default LayoutHeader;
