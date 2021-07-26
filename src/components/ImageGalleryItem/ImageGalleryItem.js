import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';
//* добавь дефолтного кота

const imageGalleryItem = ({ largeURL, tags, prevURL }) => {
  <li className={style.imageGalleryItem}>
    <img
      alt={tags}
      data={largeURL}
      className={style.ImageGalleryItemImage}
      src={prevURL}
    ></img>
  </li>;
};

imageGalleryItem.propTypes = {
  image: PropTypes.array,
};

// ImageGalleryItem.defaultProps = {
//   prevURL: defaultImg,
// }

export default imageGalleryItem;
