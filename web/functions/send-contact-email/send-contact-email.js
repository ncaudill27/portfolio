const mailgun = require("mailgun-js");
require('dotenv').config()

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN, url: MAILGUN_URL })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const {message, contactName, contactEmail } = JSON.parse(event.body)
  if (message || contactName || contactEmail) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': contactEmail,
    subject: `New contact from ${contactName}`,
    text: `Name: ${contactName}\nEmail: ${contactEmail}\nMessage: ${contactEmail}`
  }

  return mailgun.messages().send(mailgunData).then(() => ({
    statusCode: 200,
    body: "Your message was sent successfully! We'll be in touch."
  })).catch(error => ({
    statusCode: 422,
    body: `Error: $
  ))
}

const mailgun = require("mailgun-js");
const DOMAIN = 'YOUR_DOMAIN_NAME';
const mg = mailgun({apiKey: api_key, domain: DOMAIN});
const  = {
	from: 'Excited User <me@samples.mailgun.org>',
	to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
	subject: 'Hello',
	text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(, function (error, body) {
	console.log(body);
});