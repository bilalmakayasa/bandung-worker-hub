import Image from "next/image";

type RoundedImageCardProps = {
    title: string;
    description: string;
    imageUrl: string;
}

export default function RoundedImageCard({title, description, imageUrl}: RoundedImageCardProps) {
  return (
    <div className="relative w-48 h-80 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-start overflow-hidden">
      <div className="relative w-full h-5/6 rounded-2xl overflow-hidden">
        <Image
          src={imageUrl}
          alt="Landscape"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="w-full h-1/2 flex flex-col items-left justify-center px-4 py-3">
        <p className="font-title text-left text-xl font-bold text-main line-clamp-2">
          {title}
        </p>
        <p className="text-sm font-helvetica mt-2 tracking-tight leading-none text-title text-main text-left line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
