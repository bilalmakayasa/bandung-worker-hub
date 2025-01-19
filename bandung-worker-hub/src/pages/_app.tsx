
import "../app/globals.css"; // Import Tailwind and global styles
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </div>
  );
}