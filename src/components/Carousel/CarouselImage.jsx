import React from "react";

function CarouselImage(props) {
  const { img, id, alt, slide, deviceWidth, slideWidth } = props;

  if (deviceWidth <= 975)
    return (
      <>
        <img
          style={{ transform: `translate(-${slide * deviceWidth}px,0)` }}
          src={img}
          alt={alt}
          key={id}
        />
      </>
    );

  if (deviceWidth > 975)
    return (
      <>
        <img
          style={{ transform: `translate(-${slide * slideWidth}px,0)` }}
          src={img}
          alt={alt}
          key={id}
        />
      </>
    );
}

export default CarouselImage;
