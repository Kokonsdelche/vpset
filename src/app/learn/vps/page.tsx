export default function VPSTutorial() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                        آموزش نصب و راه اندازی VPS
                                </h1>

                                <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8">
                                        <h2 className="text-2xl font-bold mb-6">مراحل نصب و راه‌اندازی VPS</h2>

                                        <div className="space-y-8">
                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">1. نصب و راه‌اندازی اولیه</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                مراحل اولیه نصب و راه‌اندازی VPS:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                                <li>انتخاب سیستم عامل مناسب</li>
                                                                <li>نصب سیستم عامل</li>
                                                                <li>تنظیمات شبکه</li>
                                                                <li>به‌روزرسانی سیستم</li>
                                                        </ul>
                                                </section>

                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">2. تنظیمات VPS</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                تنظیمات ضروری VPS:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                                <li>تنظیم فایروال</li>
                                                                <li>نصب نرم‌افزارهای مورد نیاز</li>
                                                                <li>تنظیم امنیت سیستم</li>
                                                                <li>پیکربندی شبکه</li>
                                                        </ul>
                                                </section>

                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">3. اتصال به صرافی Derive</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                مراحل اتصال به صرافی:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                                <li>تنظیم DNS مناسب</li>
                                                                <li>بررسی دسترسی به صرافی</li>
                                                                <li>تست اتصال و سرعت</li>
                                                                <li>تنظیمات امنیتی اضافی</li>
                                                        </ul>
                                                </section>

                                                <section>
                                                        <h3 className="text-xl font-bold mb-4">4. عیب‌یابی و رفع مشکلات</h3>
                                                        <p className="text-gray-300 mb-4">
                                                                راه‌حل‌های رایج برای مشکلات:
                                                        </p>
                                                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                                                                <li>بررسی لاگ‌های سیستم</li>
                                                                <li>تست اتصال شبکه</li>
                                                                <li>بررسی تنظیمات فایروال</li>
                                                                <li>بازنشانی تنظیمات شبکه</li>
                                                        </ul>
                                                </section>
                                        </div>
                                </div>
                        </div>
                </div>
        );
} 