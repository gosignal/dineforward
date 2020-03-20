import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Text from '~theme/sp-theme/elements/Text';
import Heading from '~theme/sp-theme/elements/Heading';
import Image from '~theme/sp-theme/elements/Image';
import Tab, { Panel } from '~theme/sp-theme/components/Tabs';
import SectionWrapper, { ContentWrapper } from './quoteSection.style';

import { quoteData } from '~config/stubData';

const QuoteSection = () => {
  const title = text => {
    return { __html: text };
  };

  return (
    <SectionWrapper>
      <ContentWrapper>
        <Fade>
          <div
            className="content"
            style={{
              color: '#fff',
              backgroundColor: 'rgba(0,0,0,0.9)',
            }}
          >
            <Heading dangerouslySetInnerHTML={title(quoteData.title)} />
            <Text content={quoteData.description} />
          </div>
        </Fade>
      </ContentWrapper>
    </SectionWrapper>
  );
};
{
  /* <Link href={branchData[0].linkUrl}>
  <a className="learn__more-btn">
    <span className="hyphen" />
    <span className="btn_text">{branchData[0].linkText}</span>
  </a>
</Link>; */
}

export default QuoteSection;
