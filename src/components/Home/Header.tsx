"use client";

import Image from "next/image";
import Link from "next/link";
import SmallHighlightCounter from "@/components/ui/small-highlight-counter";
import AssetPicture from "@assets/images/amukerja.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// TODO: move somewhere else
const highlightData = [
  {
    number: "329",
    description: "Peraturan perundang-undangan kesehatan tenaga kerja",
  },
  {
    number: "82",
    description: "Putusan pengadilan ketenagakerjaan",
  },
  {
    number: "1242",
    description: "Analisis ahli tentang hak atas kesehatan tenaga kerja",
  },
  {
    number: "200",
    description: "Layanan kesehatan tenaga kerja",
  },
];

export default function HeaderComponent() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="relative w-full mx-auto  overflow-hidden pt-4 px-2"
      ref={ref}
    >
      {/* Image Section */}
      <div className="relative w-full h-128 rounded-2xl overflow-hidden">
        <Image
          src={AssetPicture}
          alt="Informasi Hak Kesehatan Buruh"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Overlay Text */}
      <motion.div
        className="absolute top-0 w-full h-full flex items-start justify-between p-2"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          href="/"
          className="text-main font-title px-4 py-5 text-3xl font-bold hover:bg-blue-700"
        >
          amokerja
        </Link>
        <div className="flex items-center justify-center px-4 py-5">
          {/* TODO: instead of apply this one by one, use map */}
          <Link
            href="/help-center"
            className="text-main px-2 py-2 font-title text-sm font-normal hover:font-bold hover:underline"
          >
            Pusat Bantuan
          </Link>
          <Link
            href="/informations"
            className="text-main px-2 py-2  font-title text-sm font-normal hover:font-bold hover:underline"
          >
            Informasi
          </Link>
          <Link
            href="/about-us"
            className="text-main font-title px-2 py-2 text-sm font-normal hover:font-bold hover:underline"
          >
            Tentang Kami
          </Link>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="relative -mt-24 z-10 flex justify-center gap-x-36 px-20"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {highlightData.map((data, index) => (
          <SmallHighlightCounter
            key={index}
            number={data.number}
            description={data.description}
          />
        ))}
      </motion.div>
    </div>
  );
}
