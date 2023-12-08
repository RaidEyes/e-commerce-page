import React, { useContext } from "react";
import { dialogContext } from "../Main";

function CarouselImage(props) {
  const dialogState = useContext(dialogContext).toggleDialog;
  const { img, id, alt, slide, deviceWidth, slideWidth } = props;
  if (deviceWidth <= 975)
    return (
      <>
        <img
          style={{ transform: `translate(-${slide * deviceWidth}px,0)` }}
          src={img}
          alt={alt}
          key={id}
          onClick={dialogState}
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
          onClick={dialogState}
        />
      </>
    );
}

export default CarouselImage;
