export default function VPNTutorial() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                        آموزش نصب و راه اندازی VPN
                                </h1>

                                <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8">
                                        <h2 className="text-2xl font-bold mb-6">مراحل نصب و راه‌اندازی VPN</h2>

                                        <div className="space-y-8">
                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">1. دانلود و نصب فایل</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                ابتدا فایل VPN را از لینک زیر دانلود کنید و مراحل نصب را دنبال کنید.
                                                        </p>
                                                        <div className="bg-gray-800 p-4 rounded-lg">
                                                                <code className="text-gray-300">لینک دانلود: [لینک دانلود VPN]</code>
                                                        </div>
                                                </section>

                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">2. تنظیمات اولیه</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                پس از نصب، مراحل زیر را برای تنظیم VPN انجام دهید:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                                <li>وارد کردن اطلاعات کاربری</li>
                                                                <li>انتخاب سرور مناسب</li>
                                                                <li>تنظیم پروتکل اتصال</li>
                                                        </ul>
                                                </section>

                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">3. نحوه استفاده</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                برای استفاده از VPN:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                                <li>اتصال به سرور انتخاب شده</li>
                                                                <li>بررسی وضعیت اتصال</li>
                                                                <li>تست سرعت و پایداری</li>
                                                        </ul>
                                                </section>

                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">4. عیب‌یابی و رفع مشکلات</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                در صورت بروز مشکل:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                                <li>بررسی تنظیمات فایروال</li>
                                                                <li>تغییر پروتکل اتصال</li>
                                                                <li>تغییر سرور</li>
                                                                <li>بررسی وضعیت اینترنت</li>
                                                        </ul>
                                                </section>
                                        </div>
                                </div>
                        </div>
                </div>
        );
} 