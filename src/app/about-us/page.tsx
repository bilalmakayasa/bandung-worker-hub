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
          Amokerja merupakan inisiatif kolektif anak muda di Bandung untuk membantu penyadaran hak-hak perburuhan untuk menunjang kesehatan mental pekerja muda. Amokerja berusaha menyediakan informasi tentang hak-hak buruh dan layanan pengaduan pelanggaran atas hak-hak perburuhan anda. Amokerja dikelola secara kolektif oleh Aliansi Jurnalis Independen Bandung, Yayasan Widya Palasara, Konfederasi Serikat Nasional Jawa Barat dan Lembaga Bantuan Hukum Bandung yang tergabung dalam konsorsium bernama Posko Curhat Buruh.
        </p>
      </div>

      {/* Footer */}
      <FooterComponent />
    </div>
  );
}
