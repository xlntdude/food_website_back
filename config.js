require("dotenv").config();

const URL = process.env.URL;
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

module.exports = { URL, PORT, CLIENT_URL };
