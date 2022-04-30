const axios = require('axios');
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/popular?api_key=114c22764714091fcd3a585347932a48&language=en-US&page=1',
  Headers: {
    'content-type': 'application/json',
  }
};


async function get_data() {
  const data = await axios(options);
  
  console.log(JSON.stringify(data.data.results));
}

get_data();