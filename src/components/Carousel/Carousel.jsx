import React, { useEffect, useState } from "react";
import CarouselImage from "./CarouselImage";
import CarouselThumbnail from "./CarouselThumbnail";

const Images = [
  {
    img: "/images/image-product-1.jpg",
    id: 1,
    alt: "image-1",
    thumbnail: "/images/image-product-1-thumbnail.jpg",
  },
  {
    img: "/images/image-product-2.jpg",
    id: 2,
    alt: "image-2",
    thumbnail: "/images/image-product-2-thumbnail.jpg",
  },
  {
    img: "/images/image-product-3.jpg",
    id: 3,
    alt: "image-3",
    thumbnail: "/images/image-product-3-thumbnail.jpg",
  },
  {
    img: "/images/image-product-4.jpg",
    id: 4,
    alt: "image-4",
    thumbnail: "/images/image-product-4-thumbnail.jpg",
  },
];

function Carousel(props) {
  const deviceWidth = document.body.clientWidth;
  const [carousel, setCarousel] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [thumbnailSlider, setThumbnailSlider] = useState(0);

  const prevClickHandler = () => {
    if (carousel === 0) return;
    let prev = carousel;
    setCarousel(prev - 1);
  };

  const nextClickHandler = () => {
    if (carousel === 3) return;
    let prev = carousel;
    setCarousel(prev + 1);
  };

  const thumbnailClick = (e) => {
    const img = Images.findIndex((item) => item.alt === e.target.alt);
    const parentWidth = e.target.parentNode.offsetWidth;
    const thumbnailSliderVal = (parentWidth - 80 * 4) / 3 + 80;
    setThumbnailSlider(thumbnailSliderVal * img);
    setCarousel(img);
    setSlideWidth(parentWidth);
  };
  return (
    <div className="carousel">
      <div className="carousel-img">
        <button onClick={prevClickHandler} className="icon previous-icon">
          <svg width="40%" height="50%" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button onClick={nextClickHandler} className="icon next-icon">
          <svg width="40%" height="50%" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        {Images.map((image) => {
          const { img, alt, id } = image;
          return (
            <CarouselImage
              slideWidth={slideWidth}
              slide={carousel}
              deviceWidth={deviceWidth}
              img={img}
              id={id}
              key={id}
              alt={alt}
            />
          );
        })}
      </div>

      <div className="carousel-thumbnail">
        <div
          style={{ transform: `translate(${thumbnailSlider}px,0)` }}
          className="thumbnail-outline"
        ></div>
        {Images.map((img) => {
          const { thumbnail, alt, id } = img;
          return (
            <CarouselThumbnail
              func={thumbnailClick}
              thumbnail={thumbnail}
              key={id}
              alt={alt}
              value={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
