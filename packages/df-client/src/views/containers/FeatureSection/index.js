import React from 'react';

import { makeStyles } from '@material-ui/core';
import Text from '~theme/sp-theme/elements/Text';
import Heading from '~theme/sp-theme/elements/Heading';
import BlogPost from '~theme/sp-theme/components/BlogPost';
import Container from '~theme/sp-theme/components/UI/Container';
import SectionWrapper, { SectionHeader, FeatureWrapper } from './featureSection.style';
import Card from '~theme/prebuilt/components/Card/Card';
import CardHeader from '~theme/prebuilt/components/Card/CardHeader';
import CardBody from '~theme/prebuilt/components/Card/CardBody';
import Button from '~theme/prebuilt/components/CustomButtons/Button';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Icon from '@material-ui/core/Icon';
import Delete from '@material-ui/icons/Delete';
import Subject from '@material-ui/icons/Subject';

import { featureData } from '~config/stubData';

import styles from '~theme/prebuilt/jss/material-kit-pro-react/views/componentsSections/sectionCards.js';

const cardBlog5 = 'https://via.placeholder.com/250';

const useStyles = makeStyles(styles);

const FeatureSection = () => {
  const { title, slogan, features } = featureData;

  // <BlogPost
  //               key={`option_key${item.id}`}
  //               thumbUrl={item.icon}
  //               title={item.title}
  //               excerpt={item.description}
  //             />
  // // {features.map((item, index) => (
  const classes = useStyles();

  return (
    <SectionWrapper id="feature">
      <Container width="1260px">
        <SectionHeader>
          <Heading content={title} />
          <Text content={slogan} />
        </SectionHeader>
        <FeatureWrapper>
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <div className={classes.rotatingCardContainer}>
                <Card background className={classes.cardRotate}>
                  <div
                    className={`${classes.front} ${classes.wrapperBackground}`}
                    style={{
                      backgroundImage: `url(${cardBlog5})`,
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h6 className={classes.cardCategoryWhite}>Full Background Card</h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <h3 className={classes.cardTitleWhite}>
                          This Background Card Will Rotate on Hover
                        </h3>
                      </a>
                      <p className={classes.cardDescriptionWhite}>
                        Don't be scared of the truth because we need to restart the human foundation
                        in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design
                        but the back is...
                      </p>
                    </CardBody>
                  </div>
                  <div
                    className={`${classes.back} ${classes.wrapperBackground}`}
                    style={{
                      backgroundImage: `url(${cardBlog5})`,
                    }}
                  >
                    <CardBody background className={classes.cardBodyRotate}>
                      <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                      <p className={classes.cardDescriptionWhite}>
                        As an Admin, you have shortcuts to edit, view or delete the posts.
                      </p>
                      <div className={classes.textCenter}>
                        <Button round justIcon color="info">
                          <Subject />
                        </Button>
                        <Button round justIcon color="success">
                          <Icon>mode_edit</Icon>
                        </Button>
                        <Button round justIcon color="danger">
                          <Delete />
                        </Button>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
          </GridContainer>
        </FeatureWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default FeatureSection;
