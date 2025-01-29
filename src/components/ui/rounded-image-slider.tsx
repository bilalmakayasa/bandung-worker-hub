"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import RoundedImageCard from "./rounded-image";
import { RoundedImageCardProps } from "@/types/articles";

export default function RoundedImageSlider({
  data,
}: {
  data: RoundedImageCardProps[];
}) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 4, spacing: 20 },
  });

  const handlePrev = () => {
    instanceRef.current?.prev();
  };

  const handleNext = () => {
    instanceRef.current?.next();
  };

  return (
    <div className="mt-10 keen-slider pl-10" ref={sliderRef}>
      {data.map((item, index) => (
        <div key={index} className="keen-slider__slide">
          <RoundedImageCard
            imageUrl={item.imageUrl}
            title={item.title}
            excerpt={item.exceprt}
            slug={item.slug}
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-main px-4 py-2 rounded-lg shadow-md"
      >
        {"\u003C"}
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-main px-4 py-2 rounded-lg shadow-md"
      >
        Next
      </button>
    </div>
  );
}
