import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Text from '~theme/sp-theme/elements/Text';
import Heading from '~theme/sp-theme/elements/Heading';
import Image from '~theme/sp-theme/elements/Image';
import Tab, { Panel } from '~theme/sp-theme/components/Tabs';
import SectionWrapper, { ContentWrapper } from './branchSection.style';

import { branchData } from '~config/stubData';

const BranchSection = () => {
  const title = text => {
    return { __html: text };
  };

  return (
    <SectionWrapper id="branch">
      <Tab active={2}>
        {branchData.map(item => (
          <Panel title={item.menuItem} key={`tab_key${item.id}`}>
            <ContentWrapper>
              <Fade>
                <div className="content">
                  <Heading as="h4" content={item.slogan} />
                  <h2 dangerouslySetInnerHTML={title(item.title)} />
                  <Text content={item.description} />
                  <Link href={item.linkUrl}>
                    <a className="learn__more-btn">
                      <span className="hyphen" />
                      <span className="btn_text">{item.linkText}</span>
                    </a>
                  </Link>
                </div>
              </Fade>
            </ContentWrapper>
          </Panel>
        ))}
      </Tab>
    </SectionWrapper>
  );
};

export default BranchSection;
