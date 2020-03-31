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

const christian = '/images/faces/christian.jpg';
const avatar = '/images/faces/avatar.jpg';
const marc = '/images/faces/marc.jpg';
const kendall = '/images/faces/kendall.jpg';
const cardProfile2Square = '/images/faces/card-profile2-square.jpg';

const useStyles = makeStyles(theme => {
  root: {
  }
});

const BizPage = ({ ...rest }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = React.useState();
  const img =
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
  // return (
  //     <Container maxWidth="md" fixed>
  //       <Typography variant="h1" align="center" gutterBottom></Typography>
  //     </Container>
  // );

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return <h1>User Profile</h1>;

  /*return (
    <div>
      <Parallax image={'/images/examples/city.jpg'} filter="dark" className={classes.parallax} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={christian} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Christian Louboutin</h3>
                  <h6>DESIGNER</h6>
                  <Button justIcon simple color="dribbble" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-dribbble'} />
                  </Button>
                  <Button justIcon simple color="twitter" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-twitter'} />
                  </Button>
                  <Button justIcon simple color="pinterest" className={classes.margin5}>
                    <i className={classes.socials + ' fab fa-pinterest'} />
                  </Button>
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Follow this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button justIcon round color="primary" className={classes.followButton}>
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by Melbourne-raised,
              Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving
              it a warm, intimate feel with a solid groove structure.{' '}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                <Card profile plain className={classes.card}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={avatar} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: 'url(' + avatar + ')',
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                      <CardBody plain>
                        <h4 className={classes.cardTitle}>Gigi Hadid</h4>
                        <Muted>
                          <h6>MODEL</h6>
                        </Muted>
                        <p className={classes.description}>
                          Don{"'"}t be scared of the truth because we need to restart the human
                          foundation in truth...
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                <Card profile plain className={classes.card}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={marc} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: 'url(' + marc + ')',
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                      <CardBody plain>
                        <h4 className={classes.cardTitle}>Marc Jacobs</h4>
                        <Muted>
                          <h6>DESIGNER</h6>
                        </Muted>
                        <p className={classes.description}>
                          Don{"'"}t be scared of the truth because we need to restart the human
                          foundation in truth...
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                <Card profile plain className={classes.card}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={kendall} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: 'url(' + kendall + ')',
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                      <CardBody plain>
                        <h4 className={classes.cardTitle}>Kendall Jenner</h4>
                        <Muted>
                          <h6>MODEL</h6>
                        </Muted>
                        <p className={classes.description}>
                          I love you like Kanye loves Kanye. Don
                          {"'"}t be scared of the truth.
                        </p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={5} className={classes.gridItem}>
                <Card profile plain className={classes.card}>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CardHeader image plain>
                        <a href="#pablo">
                          <img src={cardProfile2Square} alt="..." />
                        </a>
                        <div
                          className={classes.coloredShadow}
                          style={{
                            backgroundImage: 'url(' + cardProfile2Square + ')',
                            opacity: '1',
                          }}
                        />
                      </CardHeader>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                      <CardBody plain>
                        <h4 className={classes.cardTitle}>George West</h4>
                        <Muted>
                          <h6>MODEL/DJ</h6>
                        </Muted>
                        <p className={classes.description}>I love you like Kanye loves Kanye.</p>
                      </CardBody>
                    </GridItem>
                  </GridContainer>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );*/
};

// export const getStaticProps = async () => {
//   // const page = await getPageByName('Home');
//   return {
//     props: {},
//   };
// };

export default BizPage;
