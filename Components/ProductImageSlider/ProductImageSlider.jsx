import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './ProductImageSlider.scss'

const ProductImageSlider = ({ product }) => {
  const { moreImg } = product; // Extract images from the product object
  const [thumbsSwiper, setThumbsSwiper] = useState(null); // Swiper instance for thumbnails

  return (
    <div className="product-images-slider">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        
        className="main-slider"
      >
        <button className="swiper-button image-swiper-button-prev"><img src="../../Img/arrow-right.svg" alt="arrow-left"/></button>
        <button className="swiper-button image-swiper-button-next"><img src="../../Img/arrow-right.svg" alt="arrow-left"/></button>
        {moreImg.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Product Image ${index + 1}`}
              className="main-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper} // Link the thumbnails swiper to the main slider
        spaceBetween={10}
        slidesPerView={product.moreImg.length}
        watchSlidesProgress
        className="thumbnail-slider"
      >
        {moreImg.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSlider;
