import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGalleryItem.module.css';
//* добавь дефолтного кота

const imageGalleryItem = ({ images, openModal }) => {
  return (
    <>
      {images.map(image => {
        return (
          <li className={style.imageGalleryItem} key={image.id}>
            <img
              src={image.webformatURL}
              alt={image.tags}
              className={style.imageGalleryItemImage}
              onClick={() => openModal(image.largeImageURL)}
            />
          </li>
        );
      })}
    </>
  );
};

imageGalleryItem.propTypes = {
  image: PropTypes.array.isRequired,
};

// ImageGalleryItem.defaultProps = {
//   prevURL: defaultImg,
// }

export default imageGalleryItem;
