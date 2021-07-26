import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, openModal }) => (
  <ul className={style.ImageGallery} onClick={openModal}>
    {images.map((image, index) => (
      <ImageGalleryItem
        largeURL={image.largeURL}
        tags={image.tags}
        key={index}
        prevURL={image.prevURL}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
