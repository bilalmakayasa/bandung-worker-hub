import FooterComponent from "@/components/Home/footer";
import NavigationComponent from "@/components/ui/navigation";
import RoundedImageCard from "@/components/ui/rounded-image";

export default function Informations() {
  return (
    <div className="flex flex-col min-h-screen bg-main">
      <NavigationComponent />

      <div className="px-5 my-10 flex flex-col items-center">
        <p className="text-white font-title text-4xl">INFORMASI</p>

        <div className="flex flex-row gap-x-24 py-10">
          <RoundedImageCard
            title="Peraturan Perburuhan"
            slug="/informations/policy"
            imageUrl="images/law.jpg"
          />

          <RoundedImageCard
            title="Artikel Perburuhan"
            slug="/informations/articles"
            imageUrl="images/articles.png"
          />
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}
