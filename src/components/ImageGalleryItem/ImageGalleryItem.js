import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';
//* добавь дефолтного кота

const ImageGalleryItem = ({ images, onImgClick }) => {
  return (
    <>
      {images.map(image => {
        return (
          <li className={style.ImageGalleryItem} key={image.id}>
            <img
              src={image.webformatURL}
              alt={image.tags}
              className={style.ImageGalleryItemImage}
              onClick={() => onImgClick(image.largeImageURL)}
            />
          </li>
        );
      })}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.array.isRequired,
};

// ImageGalleryItem.defaultProps = {
//   prevURL: defaultImg,
// }

export default ImageGalleryItem;
