const React = require('react');

module.exports = class extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <p>Hi {this.props.recipientName}!</p>
            <div>
              <p>Your password has been updated.</p>
              <p>You can log in{' '}
                <a href={this.props.signinUrl} target="_blank">
                  here
                </a>
              </p>
            </div>
          </div>
        </body>
      </html>
    );
  }
};
