import React from 'react';
import Text from '~theme/sp-theme/elements/Text';
import Heading from '~theme/sp-theme/elements/Heading';
import BlogPost from '~theme/sp-theme/components/BlogPost';
import Container from '~theme/sp-theme/components/UI/Container';
import SectionWrapper, { SectionHeader, FeatureWrapper } from './workSection.style';
import Icon from '@material-ui/core/Icon';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { workData, additionHelpData } from '~config/stubData';

// const IconHeader = icon => {
//   return <Icon color="primary">{RestaurantIcon}</Icon>;
// };
const PostSection = ({ data }) => {
  const { title, slogan, features } = data;
  return (
    <SectionWrapper id="howitworks">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          {features.map(item => (
            <BlogPost
              key={`feature_key${item.id}`}
              icon={<RestaurantIcon />}
              title={item.title}
              excerpt={item.description}
            />
          ))}
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
