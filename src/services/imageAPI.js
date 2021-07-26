import axios from 'axios';

const API_KEY = '21962068-642cbe2e0c24045a0d25727d8';

const fetchImages = ({ searchQuery, page, perPage = 12 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&per_page=${perPage}&key=${API_KEY}&page=${page}`,
    )
    .then(res => console.log(res.data.hits));
};

export default fetchImages;
