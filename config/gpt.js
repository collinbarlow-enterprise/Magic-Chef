const { Configuration, OpenAI } = require("openai");
require("dotenv").config()

// Set up the OpenAI API credentials
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY
// });
// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

module.exports = openai;