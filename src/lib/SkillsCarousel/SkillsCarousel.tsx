"use client";
import React, { useRef, useEffect, useState } from "react";
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel";
import styles from "./SkillsCarousel.module.css";
import Skills from "../Skills/Skills";

const SkillsCarousel: React.FC = () => {
  const emblaRef = useRef<HTMLDivElement>(null);
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, {
        loop: false,
        slidesToScroll: 1,
      } as EmblaOptionsType);
      setEmbla(emblaInstance);
      return () => emblaInstance.destroy();
    }
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          <Skills
            header="Quality Design"
            subHeader="Digital | UX/UI | Advertising | Marketing | Strategy"
            paragraph="Quality design balances function, aesthetics, and user experience to create effective, intuitive, and visually appealing solutions that solve problems and enhance value."
            imageUrl="/assets/skills/Rectangle 6215.png"
          />
          <Skills
            header="Quality Design"
            subHeader="Digital | UX/UI | Advertising | Marketing | Strategy"
            paragraph="Quality design balances function, aesthetics, and user experience to create effective, intuitive, and visually appealing solutions that solve problems and enhance value."
            imageUrl="/assets/skills/Rectangle 6215.png"
          />
          <Skills
            header="Quality Design"
            subHeader="Digital | UX/UI | Advertising | Marketing | Strategy"
            paragraph="Quality design balances function, aesthetics, and user experience to create effective, intuitive, and visually appealing solutions that solve problems and enhance value."
            imageUrl="/assets/skills/Rectangle 6215.png"
          />
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

export default SkillsCarousel;
