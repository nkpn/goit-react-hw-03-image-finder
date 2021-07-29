import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onImgClick }) => {
  return (
    <ul className={style.ImageGallery}>
      <ImageGalleryItem images={images} onImgClick={onImgClick} />
    </ul>
  );
};

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
