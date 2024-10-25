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
      } as EmblaOptionsType);
      setEmbla(emblaInstance);

      return () => emblaInstance.destroy();
    }
  }, []);
  console.log(isSingleSlide);
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          <div className={styles.emblaSlide}>
            <Skills
              header="Quality Design"
              subHeader="Digital  |  UX/UI  |  Advertising  |  Marketing  |  Strategy"
              paragraph="Quality design balances function, aesthetics, and user experience to create effective, intuitive, and visually appealing solutions that solve problems and enhance value."
              imageUrl="/assets/skills/Rectangle 6215.png"
            />
          </div>
          <div className={styles.emblaSlide}>
            <Skills
              header="Innovative Strategies"
              subHeader="Creative Solutions  |  Revolutionising Design  |  Bold Ideas"
              paragraph="Innovative design strategies are crucial for staying competitive, as they drive creativity and anticipate future challenges. By pushing boundaries and creating unique solutions, these strategies help businesses stand out and shape change, ensuring long-term success."
              imageUrl="/assets/skills/Rectangle 6353.png"
            />
          </div>
          <div className={styles.emblaSlide}>
            <Skills
              header="Problem-Solving optimisation"
              subHeader="Simplifying the Complex  |  Effortless Experiences  |  Experience is Great Design"
              paragraph="Design's hidden power lies in solving problems by optimizing user experience. It simplifies complex systems, making interactions effortless and intuitive. When design works well, users don’t notice it—they just enjoy seamless, frustration-free experiences that improve lives."
              imageUrl="/assets/skills/Rectangle 6356.png"
            />
          </div>
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
