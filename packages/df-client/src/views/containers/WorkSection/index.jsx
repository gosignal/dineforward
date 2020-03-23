import React from 'react';
import Text from '~theme/sp-theme/elements/Text';
import Link from 'next/link';
import Heading from '~theme/sp-theme/elements/Heading';
import BlogPost from '~theme/sp-theme/components/BlogPost';
import BlockItem from '~components/BlockItem';
import Container from '~theme/sp-theme/components/UI/Container';
import SectionWrapper, { SectionHeader, FeatureWrapper, DonateButton } from './workSection.style';
import Icon from '@material-ui/core/Icon';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { workData, additionHelpData } from '~config/stubData';
import Typography from '@material-ui/core/Typography';
// const IconHeader = icon => {
//   return <Icon color="primary">{RestaurantIcon}</Icon>;
// };
const PostSection = ({ data }) => {
  const { title, slogan, features } = data;
  return (
    <SectionWrapper id="howitworks">
      <Container width="1260px">
        <SectionHeader>
          <Typography variant="h2">{title}</Typography>
        </SectionHeader>
        <FeatureWrapper>
          {features.map(item => (
            <BlockItem
              key={`feature_key${item.id}`}
              icon={<RestaurantIcon />}
              title={item.title}
              excerpt={item.description}
              btnUrl={item.url}
              btnText={item.buttonText || 'Find your fav now!'}
              anchorLink
            />
          ))}

          <DonateButton>
            <Link href="/restaurants">
              <a>Are you a restaurant?</a>
            </Link>
          </DonateButton>
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export const WorkSection = props => {
  return <PostSection data={workData} {...props} />;
};

export const AdditionalHelpSection = props => {
  return <PostSection data={additionHelpData} {...props} />;
};

export default { WorkSection, AdditionalHelpSection };
