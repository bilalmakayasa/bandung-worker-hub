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
        Amokerja merupakan inisiatif kolektif anak muda di Bandung untuk membantu penyadaran hak-hak perburuhan untuk menunjang kesehatan mental pekerja muda. Amokerja berusaha menyediakan informasi tentang hak-hak buruh dan layanan pengaduan pelanggaran atas hak-hak perburuhan anda. Amokerja dikelola secara kolektif oleh Aliansi Jurnalis Independen Bandung, Yayasan Widya Palasara, Konfederasi Serikat Nasional Jawa Barat dan Lembaga Bantuan Hukum Bandung yang tergabung dalam konsorsium bernama Posko Curhat Buruh.
        </p>
      </div>
    </div>
  );
}
