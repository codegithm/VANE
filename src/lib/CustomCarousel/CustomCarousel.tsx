"use client";
import React, { useRef, useEffect, useState } from "react";
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel";
import styles from "./CustomCarousel.module.css";
import Card from "../Card/Card";

const CustomCarousel: React.FC = () => {
  const emblaRef = useRef<HTMLDivElement>(null);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [isSingleSlide, setIsSingleSlide] = useState(false);

  const handleResize = () => {
    setIsSingleSlide(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, {
        loop: true,
        slidesToScroll: isSingleSlide ? 1 : 2,
      } as EmblaOptionsType);
      setEmbla(emblaInstance);
      return () => emblaInstance.destroy();
    }
  }, [isSingleSlide]);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {[...Array(8)].map((_, index) => (
            <div className={styles.emblaSlide} key={index}>
              <Card
                imageSrc={`/assets/testimony/testimoni${
                  index % 2 === 0 ? "1" : "2"
                }.png`}
                name={`Person ${index + 1}`}
                profession={`Profession ${index + 1}`}
                testimony="Vane exceeded our expectations in every way. Their team was highly responsive, delivered ahead of schedule, and maintained exceptional quality throughout."
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonPrev}`}
        onClick={() => embla?.scrollPrev()}
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.54 2.47l1.42 1.42-9.08 9.09 9.08 9.09-1.42 1.42-10.5-10.5 10.5-10.5z" />
        </svg>
      </button>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
        onClick={() => embla?.scrollNext()}
      >
        <svg
          width="24"
          height="24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M8.46 2.47l-1.42 1.42 9.08 9.09-9.08 9.09 1.42 1.42 10.5-10.5-10.5-10.5z" />
        </svg>
      </button>
    </div>
  );
};

export default CustomCarousel;
