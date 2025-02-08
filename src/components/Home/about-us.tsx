"use client";

import { useRef, useEffect } from "react";

export default function AboutUsComponent() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play(); // Play the video when the component is in view
        } else {
          video.pause(); // Pause the video when the component is out of view
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, []);
  return (
    <div className="font-white px-48 mt-10 flex flex-row items-center justify-center gap-x-12 text-center">
      <div>
        <p className="text-3xl text-white font-title font-bold text-main">
          Apa itu amokerja.id
        </p>
        <p className="text-md font-helvetica mt-5 leading-7">
          Deskrimpiskan soal amuk yang ini hanya contoh: Menurut Van Wulfften,
          Amok merupakan gangguan mental yang erat hubungannya dengan khususnya
          Kebudayaan Jawa, karena orang Jawa pada saat itu dianggap kurang dapat
          mengekspresikan emosi yang kemudian menyebabkan kekhawatiran
          ketegangan mental dan dapat meledak kapan saja ketika terpantik suatu
          konflik.
        </p>
      </div>
    </div>
  );
}
