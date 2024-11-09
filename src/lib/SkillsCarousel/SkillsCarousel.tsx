"use client";
import React, { useRef, useEffect, useState } from "react";
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel";
import styles from "./SkillsCarousel.module.css";
import Skills from "../Skills/Skills";

interface SkillsCarouselProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const SkillsCarousel: React.FC<SkillsCarouselProps> = ({ setIsModalOpen }) => {
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
              setIsModalOpen={setIsModalOpen}
            />
          </div>
          <div className={styles.emblaSlide}>
            <Skills
              header="Innovative Strategies"
              subHeader="Creative Solutions  |  Revolutionising Design  |  Bold Ideas"
              paragraph="Innovative design strategies are crucial for staying competitive, as they drive creativity and anticipate future challenges. By pushing boundaries and creating unique solutions, these strategies help businesses stand out and shape change, ensuring long-term success."
              imageUrl="/assets/skills/Rectangle 6353.png"
              setIsModalOpen={setIsModalOpen}
            />
          </div>
          <div className={styles.emblaSlide}>
            <Skills
              header="Problem-Solving optimisation"
              subHeader="Simplifying the Complex  |  Effortless Experiences  |  Experience is Great Design"
              paragraph="Design's hidden power lies in solving problems by optimizing user experience. It simplifies complex systems, making interactions effortless and intuitive. When design works well, users don’t notice it—they just enjoy seamless, frustration-free experiences that improve lives."
              imageUrl="/assets/skills/Rectangle 6356.png"
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonPrev}`}
        onClick={() => embla?.scrollPrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="var(--arrow)"
          height="var(--arrow)"
          viewBox="0 0 61 38"
          fill="none"
        >
          <path
            d="M58 21.5C59.3807 21.5 60.5 20.3807 60.5 19C60.5 17.6193 59.3807 16.5 58 16.5L58 21.5ZM1.23223 17.2322C0.255924 18.2085 0.255924 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.346016 18.1184 0.346016 17.1421 1.32233L1.23223 17.2322ZM58 16.5L3 16.5L3 21.5L58 21.5L58 16.5Z"
            fill="white"
          />
        </svg>
      </button>
      <button
        className={`${styles.emblaButton} ${styles.emblaButtonNext}`}
        onClick={() => embla?.scrollNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="var(--arrow)"
          height="var(--arrow)"
          viewBox="0 0 61 38"
          fill="none"
        >
          <path
            d="M3 16.5C1.61929 16.5 0.5 17.6193 0.5 19C0.5 20.3807 1.61929 21.5 3 21.5V16.5ZM59.7678 20.7678C60.7441 19.7915 60.7441 18.2085 59.7678 17.2322L43.8579 1.32233C42.8816 0.34602 41.2986 0.34602 40.3223 1.32233C39.346 2.29864 39.346 3.88155 40.3223 4.85786L54.4645 19L40.3223 33.1421C39.346 34.1184 39.346 35.7014 40.3223 36.6777C41.2986 37.654 42.8816 37.654 43.8579 36.6777L59.7678 20.7678ZM3 21.5H58V16.5H3V21.5Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SkillsCarousel;
