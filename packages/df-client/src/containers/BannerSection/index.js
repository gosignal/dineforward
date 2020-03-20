import React, { Fragment } from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { ScrollTo } from 'react-scroll-to';
import { chevronRight } from 'react-icons-kit/feather/chevronRight';
import Text from '~theme/sp-theme/elements/Text';
import Heading from '~theme/sp-theme/elements/Heading';
import Image from '~theme/sp-theme/elements/Image';
import GlideCarousel from '~theme/sp-theme/components/GlideCarousel';
import GlideSlide from '~theme/sp-theme/components/GlideCarousel/glideSlide';
import LeftBar from './leftBar';
import BannerWrapper, {
  ContentWrapper,
  TextArea,
  ImageArea,
  HighlightedText,
} from './bannerSection.style';

import { bannerSlides } from '~config/stubData';

const BannerSection = () => {
  const glideOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
  };

  return (
    <BannerWrapper>
      <LeftBar text="" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <Link href="/blog">
            <a>
              <HighlightedText className="highlighted_text">
                <strong>NEWS</strong> Something very important alert
                <Icon icon={chevronRight} />
              </HighlightedText>
            </a>
          </Link>
          <Heading as="h2" content="They've served you, now support them." />
          <Heading
            as="h1"
            content="Help your fave local spot survive COVID-19 closures by dining forward"
          />
          <ScrollTo>
            {({ scroll }) => (
              <a
                onClick={e => {
                  e.stopPropagation();
                  return scroll({ y: 1200, smooth: true });
                }}
                className="learn__more-btn"
              >
                <span className="hyphen" />
                <span className="btn_text">Get Started Now</span>
              </a>
            )}
          </ScrollTo>
        </TextArea>
        <ImageArea>
          <div id="homeBanner">
            <Image src={bannerSlides[0].thumb_url} alt="Home" />
          </div>
        </ImageArea>
      </ContentWrapper>
    </BannerWrapper>
  );
};

export default BannerSection;
