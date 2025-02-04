import NavigationComponent from "@/components/ui/navigation";
import FooterComponent from "@/components/Home/footer";

export default function HelpCenter() {
  return (
    <div className="bg-main">
      <NavigationComponent />

      <div className="px-5 my-10 flex flex-col items-center">
        <p className="text-white font-title text-3xl">PUSAT BANTUAN</p>
        <p className="text-white font-helvetica px-64 text-center mt-5 leading-7">
          Cari lokasi pusat bantuan bila kamu mengalami kesulitan dalam
          memperjuangkan hak-hak kamu. Kami menyediakan informasi kontak Layanan
          Kesehatan, Serikat Buruh, Jurnalis, Bantuan Hukum, Organisasi
          Perburuhan.
        </p>
      <div className="mt-10 w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7740494729783!2d107.62891157511275!3d-6.917594793082005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7f220c2dcd7%3A0x463f7ea646c472a1!2sKedai%20Jante!5e0!3m2!1sen!2sid!4v1738668175380!5m2!1sen!2sid"
          style={{
            border: 0,
            width: "100%", // ✅ Full width
            height: "500px", // ✅ Adjust height if needed
          }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      </div>
      <FooterComponent />
    </div>
  );
}
