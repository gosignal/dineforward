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

  // <Link href="/about">
  //   <a>
  //     <HighlightedText className="highlighted_text">
  //       <strong>Urgent</strong>
  //       <Icon icon={chevronRight} />
  //     </HighlightedText>
  //   </a>
  // </Link>;

  // const withScroll = (Component) => (

  // )
  // const ScrollToElement = ({ id }) => {
  //   const height =
  //   return (
  //     <React.Fragment>
  //       <a
  //         onClick={e => {
  //           e.stopPropagation();
  //           return scroll({ y: height, smooth: true });
  //         }}
  //         className="learn__more-btn"
  //       >
  //         <span className="hyphen" />
  //         <span className="btn_text">Get Started Now</span>
  //       </a>
  //     </React.Fragment>
  //   );
  // };
  const [scrollEl, setScrollEL] = React.useState(0);
  React.useEffect(() => {
    if (document) {
      const height = document.getElementById('howitworks').offsetTop;
      setScrollEL(height);
    }
  }, []);
  return (
    <BannerWrapper>
      <LeftBar text="" offset={81} sectionId="#feature" />
      <ContentWrapper>
        <TextArea>
          <Heading as="h2" content="They've served you, now support them." />
          <Heading
            as="h1"
            content="Help your favorite local spots survive COVID-19 closures by dining forward"
          />
          <ScrollTo>
            {({ scroll }) => (
              <a
                onClick={e => {
                  e.stopPropagation();
                  return scroll({ y: scrollEl, smooth: true });
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
