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
          <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" className="inline-block">
            <path d="M16 3C9.373 3 4 8.373 4 15c0 2.637.86 5.08 2.36 7.09L4 29l7.18-2.31A12.93 12.93 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.98 0-3.89-.52-5.54-1.5l-.39-.23-4.6 1.48 1.5-4.47-.25-.4A10.97 10.97 0 0 1 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.28.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
          </svg>
          <span className="font-bold">24/7</span>
        </a>
      </body>
    </html>
  );
}
