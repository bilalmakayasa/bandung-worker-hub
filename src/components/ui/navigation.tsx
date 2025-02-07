import Link from "next/link";

export default function NavigationComponent() {
  return (
    <div className="px-5 py-5">
      <div className="w-full h-full flex items-start justify-between bg-main border-solid border-1 rounded-3xl border-white bg-orange-300">
        <Link
          href="/"
          className="text-main font-title px-4 py-5 text-3xl font-bold hover:underline"
        >
          amokerja
        </Link>
        <div className="flex items-center justify-center px-4 py-5">
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
      </div>
    </div>
  );
}
