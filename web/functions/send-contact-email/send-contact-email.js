require("dotenv").config();

const {
  MAILGUN_API_KEY,
  MAILGUN_DOMAIN,
  FROM_EMAIL_ADDRESS,
  CONTACT_TO_EMAIL_ADDRESS
} = process.env;
const mailgun = require("mailgun-js")({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN });

exports.handler = async event => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed", headers: { Allow: "POST" } };
  }

  const { message, contactName, contactEmail } = JSON.parse(event.body);
  if (!message || !contactName || !contactEmail) {
    return { statusCode: 422, body: "Name, email, and message are required." };
  }

  const mailgunData = {
    from: FROM_EMAIL_ADDRESS,
    to: CONTACT_TO_EMAIL_ADDRESS,
    "h:Reply-To": contactEmail,
    subject: `New contact from ${contactName}`,
    text: `Name: ${contactName}\nEmail: ${contactEmail}\nMessage: ${message}`
  };

  try {
    await mailgun.messages().send(mailgunData);

    return {
      statusCode: 200,
      body: JSON.stringify({ data: "Thanks for reaching out! I'll be in touch soon." })
    };
  } catch (error) {
    console.log("Mailgun Error: ", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Error: ${error}` })
    };
  }
};
