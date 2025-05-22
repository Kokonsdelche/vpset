import { WarningIcon, CheckIcon, InfoIcon } from '@/components/icons'

export default function WhyUseVpnVps() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <article className="max-w-4xl mx-auto">
                                        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                                چرا از vpn ویا vps استفاده میکنیم؟
                                        </h1>

                                        <div className="prose prose-invert max-w-none">
                                                <div className="mb-8">
                                                        <img
                                                                src="/images/vpn-security1.jpg"
                                                                alt="امنیت VPN"
                                                                className="w-full h-64 object-cover rounded-lg mb-4"
                                                        />
                                                        <p className="text-sm text-gray-400 text-center">
                                                                برای مقابله با هکرها داشتن vpn ,vps الزاامی است
                                                        </p>
                                                </div>

                                                <h2 className="text-2xl font-bold mb-4">هشدارهای مهم برای تریدرها</h2>
                                                <p className="mb-4">
                                                        استفاده از VPN رایگان برای تریدرها می‌تواند خطرات جدی به همراه داشته باشد. این خطرات شامل:
                                                </p>
                                                <ul className="list-disc pl-6 mb-6">
                                                        <li>نشت اطلاعات حساس معاملاتی</li>
                                                        <li>دسترسی غیرمجاز به حساب‌های کاربری</li>
                                                        <li>تأخیر در اجرای معاملات</li>
                                                        <li>قطع شدن ناگهانی اتصال</li>
                                                </ul>

                                                <div className="bg-red-900/30 p-6 rounded-lg mb-8">
                                                        <div className="flex items-center gap-2 mb-4">
                                                                <WarningIcon />
                                                                <h3 className="text-xl font-bold text-red-400">هشدار امنیتی</h3>
                                                        </div>
                                                        <p>
                                                                استفاده از VPN رایگان برای معاملات مالی مانند رانندگی با ماشین بدون ترمز است.
                                                                ممکن است در کوتاه مدت مشکلی پیش نیاید، اما ریسک بزرگی است که ارزش گرفتن ندارد.
                                                        </p>
                                                </div>

                                                <h2 className="text-2xl font-bold mb-4">مزایای استفاده از VPN و VPS حرفه‌ای</h2>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                                        <div className="bg-gray-800 p-6 rounded-lg">
                                                                <div className="flex items-center gap-2 mb-4">
                                                                        <CheckIcon />
                                                                        <h3 className="text-xl font-bold text-green-400">مزایای امنیتی</h3>
                                                                </div>
                                                                <ul className="list-disc pl-6">
                                                                        <li>رمزنگاری پیشرفته</li>
                                                                        <li>محافظت از داده‌ها</li>
                                                                        <li>عدم ذخیره لاگ‌ها</li>
                                                                        <li>پروتکل‌های امنیتی</li>
                                                                </ul>
                                                        </div>
                                                        <div className="bg-gray-800 p-6 rounded-lg">
                                                                <div className="flex items-center gap-2 mb-4">
                                                                        <CheckIcon />
                                                                        <h3 className="text-xl font-bold text-blue-400">مزایای عملکردی</h3>
                                                                </div>
                                                                <ul className="list-disc pl-6">
                                                                        <li>سرعت بالا</li>
                                                                        <li>پایداری اتصال</li>
                                                                        <li>پشتیبانی 24/7</li>
                                                                        <li>تضمین کیفیت</li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                <div className="bg-gray-800 p-6 rounded-lg mt-8">
                                                        <div className="flex items-center gap-2 mb-4">
                                                                <InfoIcon />
                                                                <h3 className="text-xl font-bold">نکته مهم</h3>
                                                        </div>
                                                        <p>
                                                                برای معاملات حرفه‌ای، استفاده از VPN یا VPS با کیفیت و پشتیبانی مناسب ضروری است.
                                                                این سرمایه‌گذاری در امنیت و کارایی معاملات شماست.
                                                        </p>
                                                </div>

                                                <div className="mt-8 p-6 bg-blue-900/30 rounded-lg">
                                                        <div className="flex items-center gap-2 mb-4">
                                                                <InfoIcon />
                                                                <h3 className="text-xl font-bold">راهنمای انتخاب</h3>
                                                        </div>
                                                        <ol className="list-decimal pl-6 space-y-2">
                                                                <li>به دنبال سرویس‌های معتبر و شناخته شده باشید</li>
                                                                <li>از پشتیبانی 24/7 اطمینان حاصل کنید</li>
                                                                <li>سرعت و پایداری اتصال را بررسی کنید</li>
                                                                <li>سیاست‌های امنیتی را مطالعه کنید</li>
                                                                <li>نظرات کاربران را بررسی کنید</li>
                                                        </ol>
                                                </div>
                                        </div>
                                </article>
                        </div>
                </div>
        );
} 