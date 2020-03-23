import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { withStyles, Theme, Snackbar, Button, Slide } from '@material-ui/core';

import { withCookies } from 'react-cookie';

const styles = (theme: Theme) => ({
  dismissButton: {
    backgroundColor: theme.palette.secondary.dark,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  '@media print': {
    cookieBar: {
      display: 'none',
    },
  },
});

function SlideDownTransition(props: any) {
  return <Slide {...props} direction="down" />;
}

export class CookieBanner extends React.Component<any, { dismissed: boolean }> {
  private readonly expirationDays = 365;

  private readonly popup = document.createElement('div');

  constructor(props: any) {
    super(props);
    const { cookies } = props;
    this.state = {
      dismissed: true,
    };
    setImmediate(() => {
      const dismissed = cookies.get('dismiss-cookie-banner') || '0';
      this.setState({
        dismissed: dismissed === '1' ? true : false,
      });
    });
  }

  componentDidMount() {
    document.body.appendChild(this.popup);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popup);
  }

  handleDismissActionClick = () => {
    const { cookies } = this.props;
    const expires = new Date();
    expires.setTime(expires.getTime() + this.expirationDays * 24 * 60 * 60 * 1000);
    cookies.set('dismiss-cookie-banner', '1', {
      path: '/',
      expires,
    });
    this.setState({
      dismissed: true,
    });
  };

  render() {
    const { popup, handleDismissActionClick } = this;
    const { dismissButton, cookieBar } = this.props.classes;
    const { dismissed } = this.state;
    const dismissAction = (
      <Button
        className={dismissButton}
        color="secondary"
        variant="raised"
        onClick={handleDismissActionClick}
      >
        Dismiss
      </Button>
    );
    return ReactDOM.createPortal(
      <Snackbar
        className={cookieBar}
        message={this.props.children}
        open={!dismissed}
        action={dismissAction}
        TransitionComponent={SlideDownTransition}
      />,
      popup,
    );
  }
}

export default withStyles(styles, { withTheme: true })(withCookies(CookieBanner));
