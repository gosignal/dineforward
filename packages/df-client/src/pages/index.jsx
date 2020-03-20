import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ScrollTo } from 'react-scroll-to';
import { ThemeProvider } from 'styled-components';
import { charityTheme } from '~theme/sp-theme/theme/charity';
import { ResetCSS } from '~theme/sp-theme/assets/css/style';
import { DrawerProvider } from '~ctx/DrawerContext';
import Navbar from '~containers/Navbar';
import DrawerSection from '~containers/DrawerSection';
import BannerSection from '~containers/BannerSection';
import FeatureSection from '~containers/FeatureSection';
import BranchSection from '~containers/BranchSection';
import { WorkSection, AdditionalHelpSection } from '~containers/WorkSection';
import MilestoneBlock from '~containers/MilestoneBlock';
import HumanityBlock from '~containers/HumanityBlock';
import PromotionBlock from '~containers/PromotionBlock';
import DonateSection from '~containers/DonateSection';
import MapSection from '~containers/MapSection';
import FundraiserSection from '~containers/FundraiserSection';
import BlogSection from '~containers/BlogSection';
import ClientBlock from '~containers/ClientBlock';
import QuoteSection from '~containers/QuoteSection';

import Footer from '~containers/Footer';
import { GlobalStyle, CharityWrapper, ContentWrapper } from '~containers/dineforward.style';

export default () => {
  return (
    <ThemeProvider theme={charityTheme}>
      <Fragment>
        {/* Start charity head section */}
        <Head>
          <title>Charity | A react next landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#FCF22B" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Load google fonts */}
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of charity head section */}
        {/* Start charity wrapper section */}
        <CharityWrapper>
          <Sticky enabled={true} top={0} innerZ={9999} activeClass="sticky-nav-active">
            <Navbar />
          </Sticky>
          <DrawerProvider>
            <DrawerSection />
          </DrawerProvider>
          <ContentWrapper>
            <BannerSection />
            <WorkSection />
            <QuoteSection />
            <AdditionalHelpSection />
          </ContentWrapper>
          <Footer />
        </CharityWrapper>
        {/* End of charity wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
