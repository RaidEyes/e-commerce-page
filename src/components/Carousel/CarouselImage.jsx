import React from "react";

function CarouselImage(props) {
  const { img, id, alt, slide } = props;
  return (
    <>
      <img
        style={{ transform: `translate(-${slide}px,0)` }}
        src={img}
        alt={alt}
        key={id}
      />
    </>
  );
}

export default CarouselImage;
