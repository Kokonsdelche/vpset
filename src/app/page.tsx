import Image from "next/image";
import BannerSlider from "../components/BannerSlider";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <BannerSlider />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">VPN VPS SETDERIVE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          </p>
          <a
            href="https://www.derive.xyz/invite/NX4NF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-lg transition-colors"
          >
            همین حالا معامله را شروع کنید
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">چرا Derive را انتخاب کنیم؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">معاملات غیرمتمرکز</h3>
              <p className="text-gray-400">مستقیماً روی بلاکچین معامله کنید، بدون واسطه</p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">اختیارات معامله پیشرفته</h3>
              <p className="text-gray-400">دسترسی به ابزارها و استراتژی‌های معاملاتی پیچیده</p>
            </div>
            <div className="p-6 border border-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">امن و شفاف</h3>
              <p className="text-gray-400">ساخته شده روی اتریوم با شفافیت و امنیت کامل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">آماده شروع معاملات هستید؟</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          </p>
          <a
            href="https://www.derive.xyz/invite/NX4NF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-lg transition-colors"
          >
            با Derive شروع کنید
          </a>
        </div>
      </section>
    </div>
  );
}
