import Image from "next/image";
import Link from "next/link";

import AssetPicture from "./amukerja.png";

export default function InfoBanner() {
  return (
    <div className="relative w-full mx-auto rounded-2xl overflow-hidden shadow-lg">
      {/* Image Section */}
      <div className="w-full relative h-128">
        <Image
          src={AssetPicture} 
          alt="Informasi Hak Kesehatan Buruh"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute top-0 w-full h-full flex items-start justify-between p-2">
        <Link
          href="/"
          className="text-main font-title px-4 py-2 text-3xl font-bold hover:bg-blue-700"
        >
          Amokerja
        </Link>
        <div className="flex items-center justify-center">
            {/* TODO: instead of apply this one by one, use map */}
          <Link
            href="/contact"
            className="text-main font-title px-2 py-2 text-sm font-normal hover:font-bold hover:underline"
          >
            Pusat Bantuan
          </Link>
          <Link
            href="/contact"
            className="text-main font-title px-2 py-2 text-sm font-normal hover:font-bold hover:underline"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-main font-title px-2 py-2 text-sm font-normal hover:font-bold hover:underline"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
