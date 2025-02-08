"use client";

import Image from "next/image";
import Link from "next/link";

export type RoundedImageCardProps = {
  title: string;
  excerpt?: string; // Corrected typo
  imageUrl: string;
  slug: string; // Used for navigation
};

export default function RoundedImageCard({
  title,
  excerpt,
  imageUrl,
  slug,
}: RoundedImageCardProps) {
  return (
    <Link href={slug} passHref>
      <div className="relative w-60 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-start overflow-hidden cursor-pointer">
        <div className="relative w-full h-5/6 rounded-2xl overflow-hidden">
          <Image
            src={`/${imageUrl}`} // Prepend a slash to the relative path
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        <div className="w-full h-1/2 flex flex-col items-left justify-center px-4 py-3">
          <p className="font-title text-center text-xl font-bold text-main line-clamp-2">
            {title}
          </p>
          {
            excerpt && (
              <p className="text-sm font-helvetica mt-2 tracking-tight leading-none text-title text-main text-left line-clamp-3">
                {excerpt}
              </p>
            )
          }
        </div>
      </div>
    </Link>
  );
}
