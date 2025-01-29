import RoundedImageSlider from "@/components/ui/rounded-image-slider";
import articles from "@/data/articles";

export default function ArticlesComponent() {
  return (
    <div className="font-white px-5 mt-10 flex flex-col">
      <div className="pl-48">
        <p className="text-3xl text-white font-title font-bold text-main">
          Kesehatan Buruh dalam Berita
        </p>
        <p className="text-md font-helvetica mt-5 leading-7">
          Melihat kondisi kesehatan buruh dalam pemberitaan nasional dan
          internasional.
        </p>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center">
        <RoundedImageSlider data={articles} />
      </div>
    </div>
  );
}
