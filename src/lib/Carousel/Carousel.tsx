/* eslint-disable */

import React from "react";
import Carousel from "react-multi-carousel";
import Card from "@/lib/Card/Card";
import styles from "./Carousel.module.css";
import "react-multi-carousel/lib/styles.css";

const CustomCarousel: React.FC = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      customLeftArrow={<div className={styles.arrow}>&#9664;</div>}
      customRightArrow={<div className={styles.arrow}>&#9654;</div>}
    >
      <Card
        imageSrc="/assets/testimony/testimoni2.png"
        name="Jane Doe"
        profession="Designer"
        testimony="This is a great service!"
      />
      <Card
        imageSrc="/assets/testimony/testimoni.png"
        name="John Smith"
        profession="Developer"
        testimony="I highly recommend it!"
      />
      {/* Add more cards as needed */}
    </Carousel>
  );
};

export default CustomCarousel;
