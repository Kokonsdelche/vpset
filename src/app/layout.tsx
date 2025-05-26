import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Ticker from "../components/Ticker";
import Footer from "../components/Footer";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "راهنمای معاملات در Derive",
  description: "یاد بگیرید چگونه در Derive - قدرتمندترین پروتکل معاملاتی DeFi معامله کنید",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} bg-black text-white`}>
        <div className="fixed top-0 left-0 w-full bg-blue-600 text-white text-center py-2 px-4 z-[100] alert-bar">
          بعد از تهیه vps یا vpn خود و اتصال حتما برای بار اول از دکمه شروع معاملات استفاده کنید تا وارد پروتکل امن شوید فقط برای بار اول الزامی است
        </div>
        <Navbar />
        <div className="mt-[170px] md:mt-[150px] mb-0">
          <Ticker />
        </div>
        <main className="pt-0">
          {children}
        </main>
        <Footer />
        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/5511939441883"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed z-50 flex items-center gap-2 bottom-6 left-6 md:left-10 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-colors text-lg md:text-xl"
          style={{ direction: 'ltr' }}
        >
          <span className="font-bold">واتساپ</span>
          <span className="font-bold">24/7</span>
        </a>
      </body>
    </html>
  );
}
