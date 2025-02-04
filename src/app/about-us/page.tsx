import NavigationComponent from "@/components/ui/navigation";
import FooterComponent from "@/components/Home/footer";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-main">
      {/* Navigation */}
      <NavigationComponent />

      {/* Main Content */}
      <div className="flex-grow px-5 my-10 flex flex-col">
        <p className="text-white font-title text-3xl text-center">
          Tentang Kami
        </p>
        <p className="text-white font-helvetica px-64 text-center mt-5 leading-7">
          situs web ini dapat membantu anda untuk menemukan, mengidentifikasi,
          dan merebut kembali hak-hak perburuhan anda.
        </p>
        <p className="text-white font-title text-3xl mt-10 ml-10">
          Apa itu amokerja?
        </p>
        <p className="text-white font-helvetica pl-10 pr-72 mt-5 leading-7">
          Amok, menurut Van Wulfften, adalah gangguan mental yang sangat terkait
          dengan Kebudayaan Jawa. Pada masa itu, orang Jawa dianggap kurang
          mampu mengekspresikan emosi, yang dapat menyebabkan akumulasi
          ketegangan mental. Ketegangan ini dapat meledak kapan saja saat
          menghadapi konflik.
        </p>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}
