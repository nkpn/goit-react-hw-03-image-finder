import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '21962068-642cbe2e0c24045a0d25727d8';

export const fetchImages = async ({ searchQuery, page = 1, perPage = 12 }) => {
  return await axios.get(
    `${URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${perPage}&key=${API_KEY}&page=${page}`,
  );
  // .then(res => console.log(res.data.hits));
};
