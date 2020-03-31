import React from 'react';
import Heading from '~theme/sp-theme/elements/Heading';
import Text from '~theme/sp-theme/elements/Text';
import Image from '~theme/sp-theme/elements/Image';
import Container from '~theme/sp-theme/components/UI/Container';
import SectionWrapper, { SectionHeader, ImageWrapper } from './mapSection.style';

const mapImage = '/images/map.png';

const MapSection = () => {
  return (
    <SectionWrapper>
      <Container width="1200px">
        <SectionHeader>
          <Heading content="How Generous Is Your State" />
          <Text content="Data from January 1 through November 30, 2018" />
        </SectionHeader>
        <ImageWrapper>
          <Image src={mapImage} alt="Charity Landing" />
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default MapSection;
