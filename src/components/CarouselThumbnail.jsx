import React from "react";

function CarouselThumbnail(props) {
  const { thumbnail, id, alt } = props;

  return (
    <>
      <img src={thumbnail} alt={alt} key={id} />
    </>
  );
}

export default CarouselThumbnail;
