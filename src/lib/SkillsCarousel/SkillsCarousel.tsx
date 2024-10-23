"use client";
import React, { useEffect, useRef } from "react";
import EmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel";
import styles from "./SkillsCarousel.module.css";
import Skills from "../Skills/Skills";

const SkillsCarousel: React.FC = () => {
  const emblaRef = useRef<HTMLDivElement>(null);
  const [embla, setEmbla] = React.useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (emblaRef.current) {
      const emblaInstance = EmblaCarousel(emblaRef.current, { loop: false });
      setEmbla(emblaInstance);

      return () => emblaInstance.destroy();
    }
  }, []);

  const scrollPrev = () => {
    if (embla) embla.scrollPrev();
  };

  const scrollNext = () => {
    if (embla) embla.scrollNext();
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prevButton} onClick={scrollPrev}>
        &lt;
      </button>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          <div className={styles.emblaSlide}>
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
          {/* Add more <div className={styles.emblaSlide}> with different content if needed */}
        </div>
      </div>
      <button className={styles.nextButton} onClick={scrollNext}>
        &gt;
      </button>
    </div>
  );
};

export default SkillsCarousel;
