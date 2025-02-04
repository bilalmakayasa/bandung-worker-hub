import Link from "next/link";

export default function NavigationComponent() {
  return (
    <div className="class">
      <div className="w-full h-full flex items-start justify-between p-2 bg-main">
        <Link
          href="/"
          className="text-white font-title px-4 py-5 text-3xl font-bold hover:underline"
        >
          amokerja
        </Link>
        <div className="flex items-center justify-center px-4 py-5">
          <Link
            href="/help-center"
            className="text-white px-2 py-2 font-title text-sm font-normal hover:font-bold hover:underline"
          >
            Pusat Bantuan
          </Link>
          <Link
            href="/contact"
            className="text-white px-2 py-2  font-title text-sm font-normal hover:font-bold hover:underline"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white font-title px-2 py-2 text-sm font-normal hover:font-bold hover:underline"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
    </div>
  );
}
