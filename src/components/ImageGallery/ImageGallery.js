import React from 'react';
import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className={style.ImageList}>
    {images.map(image => (
      <ImageGalleryItem />
    ))}
  </ul>
);

export default ImageGallery;
