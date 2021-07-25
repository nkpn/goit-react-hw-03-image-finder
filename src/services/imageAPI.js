const API_KEY = '21962068-642cbe2e0c24045a0d25727d8';
const BASE_URL = 'https://pixabay.com/api/';
const axios = require('axios').default;

const fetchImages = async (search, page) => {
  try {
    const data = await axios.get(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=${API_KEY}`,
    );
    console.log(data, 'data');
  } catch (error) {
    console.log('error', error.response);
  }
};

// const fetchImages = async (search, page) => {
//   const response = await fetch(
//     `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=${API_KEY}`,
//   );
//   const responseParse = await response.json();

//   return responseParse;
// };

export default fetchImages;
