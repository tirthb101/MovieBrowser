const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://travelbriefing.org/Hungary?format=json',
  Headers: {
    'content-type': 'application-json',
  }
};


async function get_data() {
    const data = await axios(options);
    console.log(data.data.currency.compare);
}

get_data();