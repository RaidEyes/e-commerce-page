import React from "react";
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
  return (
    <div className="carousel">
      <div className="carousel-img">
        <button className="icon previous-icon">
          <svg width="40%" height="50%" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button className="icon next-icon">
          <svg width="40%" height="50%" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        {Images.map((image) => {
          const { img, alt, id } = image;
          return <CarouselImage img={img} key={id} alt={alt} />;
        })}
      </div>
      <div className="carousel-thumbnail">
        {Images.map((image) => {
          const { thumbnail, alt, id } = image;
          return <CarouselThumbnail thumbnail={thumbnail} key={id} alt={alt} />;
        })}
      </div>
    </div>
  );
}

export default Carousel;
