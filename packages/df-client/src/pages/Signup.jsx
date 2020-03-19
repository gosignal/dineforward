/*eslint-disable*/
import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';

// @material-ui/icons
import LockIcon from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';
import Face from '@material-ui/icons/Face';
import Timeline from '@material-ui/icons/Timeline';
import Code from '@material-ui/icons/Code';
import Group from '@material-ui/icons/Group';
import Check from '@material-ui/icons/Check';
// core components
// import Header from '~theme/prebuilt/components/Header/Header.js';
import GridContainer from '~theme/prebuilt/components/Grid/GridContainer.js';
import GridItem from '~theme/prebuilt/components/Grid/GridItem.js';
import Button from '~theme/prebuilt/components/CustomButtons/Button.js';
import Card from '~theme/prebuilt/components/Card/Card.js';
import CardBody from '~theme/prebuilt/components/Card/CardBody.js';
import InfoArea from '~theme/prebuilt/components/InfoArea/InfoArea.js';
import CustomInput from '~theme/prebuilt/components/CustomInput/CustomInput.js';

import signupPageStyle from '../theme/prebuilt/jss/material-kit-pro-react/views/signupPageStyle.js';

const useStyles = makeStyles(signupPageStyle);

const SignupPage = () => {
  const [checked, setChecked] = React.useState([1]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.pageHeader}
        style={
          {
            // backgroundImage: 'url(' + image + ')',
            // backgroundSize: 'cover',
            // backgroundPosition: 'top center',
          }
        }
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={10} md={10}>
              <Card className={classes.cardSignup}>
                <h2 className={classes.cardTitle}>Register</h2>
                <CardBody>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={5} md={5}>
                      <InfoArea
                        className={classes.infoArea}
                        title="Info Here"
                        description="More info here!"
                        icon={Timeline}
                        iconColor="rose"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="WOOooOOOooO"
                        description="Lets give them another reason to signup?"
                        icon={Code}
                        iconColor="primary"
                      />
                      <InfoArea
                        className={classes.infoArea}
                        title="Connect"
                        description="asdasdasd"
                        icon={Group}
                        iconColor="info"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={5} md={5}>
                      <div className={classes.textCenter}>
                        <Button color="google">
                          <i className="fab fa-google-plus-square" /> Sign in with Google
                        </Button>
                        {` `}
                        <Button color="facebook">
                          <i className="fab fa-facebook-square" /> Login with Facebook
                        </Button>
                        {` `}
                        <h4 className={classes.socialTitle}>or with email</h4>
                      </div>
                      <form className={classes.form}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start" className={classes.inputAdornment}>
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'First Name...',
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start" className={classes.inputAdornment}>
                                <Email className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Email...',
                          }}
                        />
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlClasses,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start" className={classes.inputAdornment}>
                                <LockIcon className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Password...',
                          }}
                        />
                        <div
                          className={`${classes.checkboxAndRadio} ${
                            classes.checkboxAndRadioHorizontal
                          }`}
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                value="a"
                                name="business"
                                aria-label="A"
                                icon={<FiberManualRecord className={classes.radioUnchecked} />}
                                checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                                classes={{
                                  checked: classes.radio,
                                  root: classes.radioRoot,
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot,
                            }}
                            label="Business"
                          />
                        </div>
                        <div
                          className={`${classes.checkboxAndRadio} ${
                            classes.checkboxAndRadioHorizontal
                          }`}
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                value="b"
                                name="Individual"
                                aria-label="B"
                                icon={<FiberManualRecord className={classes.radioUnchecked} />}
                                checkedIcon={<FiberManualRecord className={classes.radioChecked} />}
                                classes={{
                                  checked: classes.radio,
                                  root: classes.radioRoot,
                                }}
                              />
                            }
                            classes={{
                              label: classes.label,
                              root: classes.labelRoot,
                            }}
                            label="Individual"
                          />
                        </div>
                        <FormControlLabel
                          classes={{
                            label: classes.label,
                          }}
                          control={
                            <Checkbox
                              tabIndex={-1}
                              onClick={() => handleToggle(1)}
                              checkedIcon={<Check className={classes.checkedIcon} />}
                              icon={<Check className={classes.uncheckedIcon} />}
                              classes={{
                                checked: classes.checked,
                                root: classes.checkRoot,
                              }}
                              checked={checked.indexOf(1) !== -1 ? true : false}
                            />
                          }
                          label={
                            <span>
                              I agree to the <a href="#">terms and conditions</a>.
                            </span>
                          }
                        />

                        <div className={classes.textCenter}>
                          <Button round color="primary">
                            Get started
                          </Button>
                        </div>
                      </form>
                    </GridItem>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
