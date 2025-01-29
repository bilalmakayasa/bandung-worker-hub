"use client";

import Image from "next/image";
import AssetPicture from "@assets/images/indonesia-map.png";
import { formatNumber } from "@/utils";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IndonesianLabourInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      className="px-5 mt-10 flex flex-col items-center justify-center"
      ref={ref}
    >
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1}}
      >
        <p className="text-3xl font-title text-white font-bold">
          Tenaga Kerja Indonesia
        </p>
        <p className="text-md font-helvetica mt-5 leading-7 px-48">
          Kesehatan mental pekerja di Indonesia menjadi perhatian penting
          mengingat dampaknya terhadap produktivitas dan kesejahteraan individu.
        </p>
      </motion.div>

      {/* show first */}
      <motion.div
        className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image src={AssetPicture} alt="Informasi Hak Kesehatan Buruh" />
      </motion.div>

      {/* show third */}
      <motion.div
        className="flex flex-col items-center justify-center font-chauPhilemone"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="text-9xl">{formatNumber(1836712)}</p>
        <p className="text-3xl">Jumlah Tenaga Kerja</p>
      </motion.div>
    </div>
  );
}
