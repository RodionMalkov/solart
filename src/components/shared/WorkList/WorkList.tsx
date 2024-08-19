"use client";

import React, { useEffect, useRef } from "react";
import "./styles.scss";
import Masonry from "react-masonry-css";
import worksData from "@/api/Works.json";
import { WorkCard } from "../WorkCard/WorkCard";

interface Props {
  className?: string;
}

const breakpointColumnsObj = {
  default: 3,
  868: 2,
  675: 1,
};

export const WorkList: React.FC<Props> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const direction =
              entry.boundingClientRect.top < entry.rootBounds!.top
                ? "animate__fadeInDown"
                : "animate__fadeInUp";

            entry.target.classList.add("animate__animated", direction);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01 }
    );

    const elements = containerRef.current?.querySelectorAll(".work-card");
    if (elements) {
      elements.forEach((element) => observer.observe(element));
    }

    return () => {
      if (elements) {
        elements.forEach((element) => observer.unobserve(element));
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`work-list ${className ? className : ""}`}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="work-list__wrapper"
        columnClassName="work-list__column"
      >
        {worksData.map((work) => (
          <WorkCard key={work.id} work={work} className="work-card" />
        ))}
      </Masonry>
    </div>
  );
};
