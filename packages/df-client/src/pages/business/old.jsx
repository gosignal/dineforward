/*eslint-disable*/
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Camera from '@material-ui/icons/Camera';
import Palette from '@material-ui/icons/Palette';
import People from '@material-ui/icons/People';
import Add from '@material-ui/icons/Add';
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from '~theme/prebuilt/components/Header/Header.js';
import Footer from '~theme/prebuilt/components/Footer/Footer.js';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import HeaderLinks from '~theme/prebuilt/components/Header/HeaderLinks.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import CardHeader from '~theme/prebuilt/components/Card/CardHeader.js';
import Badge from '~theme/prebuilt/components/Badge/Badge.js';
import Muted from '~theme/prebuilt/components/Typography/Muted.js';
import Parallax from '~theme/prebuilt/components/Parallax/Parallax.js';
import Clearfix from '~theme/prebuilt/components/Clearfix/Clearfix.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import NavPills from '~theme/prebuilt/components/NavPills/NavPills.js';

import CommonFooter from '~components/Layout/LayoutFooter';
import SupportLevels from '~components/SupportLevels';
import ProfileStaff from '~components/ProfileStaff';
import Backes from '~components/Backers';

const oluEletu = '/images/examples/olu-eletu.jpg';
const clemOnojeghuo = '/images/examples/clem-onojeghuo.jpg';
const cynthiaDelRio = '/images/examples/cynthia-del-rio.jpg';
const mariyaGeorgieva = '/images/examples/mariya-georgieva.jpg';
const clemOnojegaw = '/images/examples/clem-onojegaw.jpg';
const darrenColeshill = '/images/examples/darren-coleshill.jpg';

const christian = '/images/faces/christian.jpg';
const avatar = '/images/faces/avatar.jpg';
const marc = '/images/faces/marc.jpg';
const kendall = '/images/faces/kendall.jpg';
const cardProfile2Square = '/images/faces/card-profile2-square.jpg';
import { withApollo } from '~utils/apollo';

import profilePageStyle from '../../views/theme/prebuilt/jss/material-kit-pro-react/views/profilePageStyle.js';
import Backers from '~components/Backers';

const useStyles = makeStyles(profilePageStyle);

const BizPage = ({ ...rest }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = React.useState();
  const img =
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Parallax image={img} filter="primary" className={classes.parallax} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={img} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Amy&apos;s Vietnamese</h3>
                  <h6>Oakland, CA</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.profileTabs}>
            <GridContainer>
              <NavPills
                alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: 'Support Levels',
                    tabIcon: Palette,
                    tabContent: <SupportLevels />,
                  },
                  {
                    tabButton: 'Staff',
                    tabIcon: People,
                    tabContent: <ProfileStaff />,
                  },
                  {
                    tabButton: 'Media',
                    tabIcon: Camera,
                    tabContent: (
                      <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={12}>
                          <Backers />
                        </GridItem>
                      </GridContainer>
                    ),
                  },
                ]}
              />
            </GridContainer>
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
};

BizPage.getInitialProps = async props => {
  return {};
};
export default BizPage;
// export default withApollo({ ssr: true })(BizPage);
