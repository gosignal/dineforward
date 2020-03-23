import React from 'react';
import Text from '~theme/sp-theme/elements/Text';
import Link from 'next/link';
import Heading from '~theme/sp-theme/elements/Heading';
import BlogPost from '~theme/sp-theme/components/BlogPost';
import BlockItem from '~components/BlockItem';
import Container from '~theme/sp-theme/components/UI/Container';
import PageWrapper, { SectionHeader, PageContent } from './contentPage.style';
import Icon from '@material-ui/core/Icon';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { workData, additionHelpData } from '~config/stubData';

// const IconHeader = icon => {
//   return <Icon color="primary">{RestaurantIcon}</Icon>;
// };
const ContentPage = props => {
  const { title, subtitle, children } = props;
  return (
    <PageWrapper id="howitworks">
      <Container width="1260px">
        <PageContent>
          <SectionHeader>
            <Heading content={title} />
            <Text content={subtitle} />
          </SectionHeader>
          {children}
        </PageContent>
      </Container>
    </PageWrapper>
  );
};

export default ContentPage;
