import React from "react";

function CarouselThumbnail(props) {
  const { thumbnail, value, alt, func } = props;
  return (
    <>
      <img onClick={func} src={thumbnail} alt={alt} />
    </>
  );
}

export default CarouselThumbnail;
