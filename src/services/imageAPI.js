const API_KEY = '21962068-642cbe2e0c24045a0d25727d8';
const BASE_URL = 'https://pixabay.com/api/';
const axios = require('axios').default;

const fetchImages = async () => {
  try {
    const data = await axios.get(
      `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`,
    );
    console.log(data, 'data');
  } catch (error) {
    console.log('error', error.response);
  }
};

export default fetchImages;
