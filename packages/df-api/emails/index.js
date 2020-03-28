const { emailWebsiteLink, SENDGRID_API_KEY } = require('@dineforward/config');
const { emailSender } = require('@keystonejs/email');
const sgMail = require('@sendgrid/mail');

const defaultFrom = 'support@dineforward.org';

if (SENDGRID_API_KEY) sgMail.setApiKey(SENDGRID_API_KEY);

const emails = {
  passwordUpdated: {
    jsxFile: './password-updated.jsx',
    from: defaultFrom,
    subject: 'Your DineForward password has been updated',
  }
}

async function passwordUpdated({ email, displayName }) {
  const { jsxFile, ...sendOpts } = emails.passwordUpdated;

  try {
    const { html, text } = await sendEmail(jsxFile, {
      recipientName: displayName,
      signinUrl: `${emailWebsiteLink}/login`,
    });
    await sgMail.send({
      ...sendOpts,
      to: email,
      html,
      text,
    });
  } catch (err) {
    console.error(`Error sending password update email to ${email}`, err);
  }
}

const jsxEmailSender = emailSender.jsx({
  root: __dirname,
});

const sendEmail = async (templatePath, rendererProps = {}) => {
  if (!templatePath) {
    console.error(new Error('sendEmail: No template path provided'));
    return;
  }
  return jsxEmailSender(templatePath).render(rendererProps);
};

module.exports = {
  sendEmail,
  passwordUpdated,
};
