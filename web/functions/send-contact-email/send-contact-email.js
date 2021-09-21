require('dotenv').config()

const { MAILGUN_API_KEY, MAILGUN_DOMAIN, MAILGUN_URL, FROM_EMAIL_ADDRESS, CONTACT_TO_EMAIL_ADDRESS } = process.env
const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } }
  }

  const {message, contactName, contactEmail } = JSON.parse(event.body)
  if (!message || !contactName || !contactEmail) {
    return { statusCode: 422, body: 'Name, email, and message are required.' }
  }

  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    'h:Reply-To': contactEmail,
    subject: `New contact from ${contactName}`,
    text: `Name: ${contactName}\nEmail: ${contactEmail}\nMessage: ${message}`
  }

  try {
    console.log(mailgunData);
  console.log(mailgun.messages());
    await mailgun.messages().send(mailgunData)

    return {
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch."
    }
  } catch (error) {
      return {
        statusCode: 422,
        body: `Error: ${error}`
      }
  }
}