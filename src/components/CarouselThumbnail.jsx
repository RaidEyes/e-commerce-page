import React from "react";

function CarouselThumbnail(props) {
  const { thumbnail, id, alt } = props;
  console.log(props);
  return (
    <>
      <img src={thumbnail} alt={alt} key={id} />
    </>
  );
}

export default CarouselThumbnail;
