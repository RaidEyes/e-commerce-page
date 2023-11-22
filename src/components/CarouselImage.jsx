import React from "react";

function CarouselImage(props) {
  const { img, id, alt } = props;
  return (
    <>
      <img src={img} alt={alt} key={id} />
    </>
  );
}

export default CarouselImage;
