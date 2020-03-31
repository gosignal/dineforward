const {
  emailBusinessSignupLink,
  emailContactLink,
  emailLoginLink,
  emailWebsiteLink,
  SENDGRID_API_KEY,
} = require('@dineforward/config');
const sgMail = require('@sendgrid/mail');

if (SENDGRID_API_KEY) sgMail.setApiKey(SENDGRID_API_KEY);

const sendDefaults = {
  from: {
    name: 'DineForward',
    email: 'hello@dineforward.org',
  },
};

const alwaysRequired = [];

const defaultTemplateData = {
  businessSignupLink: emailBusinessSignupLink,
  contactLink: emailContactLink,
  loginLink: emailLoginLink,
  websiteLink: emailWebsiteLink,
};

const emails = {
  lostPassword: {
    templateId: 'd-01254711974c48be9b042a183bd96496',
    requiredKeys: [ 'lostPasswordLink', 'displayName' ],
  },
  welcome: {
    templateId: 'd-6df7493b86904565a1e6a1d9f1198c3a',
    requiredKeys: [ 'displayName' ],
  },
  passwordUpdated: {
    templateId: 'd-77955f79dc52418ca97667a9d6446fa3',
    requiredKeys: [ 'displayName' ],
  },
};

function checkKeys(source, reqKeys) {
  const missing = reqKeys.filter(k => !source[k]);
  if (missing.length) {
    throw new Error(`Error in sendEmail caller: Required options are missing: ` +
      missing.join(', '));
  }
}

/**
 * @param {string} emailName - The named email template to use.
 * @param {string} emailTo - Email address of recipient.
 * @param {object} [templateData] - Data for substitutions in the template
 */
async function sendEmail(emailName, emailTo, templateData = {}) {
  const emailOpts = emails[emailName];
  if (!emailOpts) {
    throw new Error(`Error in sendEmail caller: '${emailName}' is not a known email.`);
  }
  if (!emailTo) {
    throw new Error(`Error in sendEmail caller: recipient email not provided`);
  }
  if (!emailOpts.templateId) {
    throw new Error(`Error in sendEmail 'templateId' not provided for email '${emailName}'`);
  }

  try {
    checkKeys(templateData, [ ...alwaysRequired, ...(emailOpts.requiredKeys || [])]);

    await sgMail.send({
      ...sendDefaults,
      to: emailTo,
      templateId: emailOpts.templateId,
      dynamicTemplateData: {
        ...defaultTemplateData,
        email: emailTo,
        ...templateData,
      },
    });
    console.log(`Email '${emailName}' sent to ${emailTo}`);
  } catch (err) {
    console.error(`Error sending ${emailName} email to ${emailTo}: ${err.message}`);
  }
}

module.exports = {
  sendEmail,
};
