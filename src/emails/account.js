const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "s1894401@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "s1894401@gmail.com",
    subject: "Account deleted successfully",
    html:
      "<p>We are sorry to see you go, " +
      name +
      ". </p><p>Is there anything we could have done better? We would love to get your feedback.</p><p>Yours,</p><p>Task App.</p>",
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
