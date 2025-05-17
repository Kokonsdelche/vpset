export default function Articles() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                        مقالات و تحلیل‌ها
                                </h1>

                                {/* مقالات اخیر */}
                                <section className="mb-20">
                                        <h2 className="text-3xl font-bold mb-8">آخرین مقالات</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {/* مقاله 1 */}
                                                <article className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                                                        <div className="p-6">
                                                                <h3 className="text-xl font-bold mb-4">راهنمای جامع معاملات آپشن در Derive</h3>
                                                                <p className="text-gray-400 mb-4">
                                                                        یک راهنمای کامل برای شروع معاملات آپشن در پلتفرم Derive
                                                                </p>
                                                                <div className="flex justify-between items-center">
                                                                        <span className="text-sm text-gray-500">15 اردیبهشت 1403</span>
                                                                        <a
                                                                                href="https://www.derive.xyz/invite/NX4NF"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-blue-400 hover:text-blue-300"
                                                                        >
                                                                                ادامه مطلب
                                                                        </a>
                                                                </div>
                                                        </div>
                                                </article>

                                                {/* مقاله 2 */}
                                                <article className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                                                        <div className="p-6">
                                                                <h3 className="text-xl font-bold mb-4">استراتژی‌های معاملاتی پیشرفته</h3>
                                                                <p className="text-gray-400 mb-4">
                                                                        بررسی استراتژی‌های پیشرفته معاملاتی در بازارهای آپشن
                                                                </p>
                                                                <div className="flex justify-between items-center">
                                                                        <span className="text-sm text-gray-500">12 اردیبهشت 1403</span>
                                                                        <a
                                                                                href="https://www.derive.xyz/invite/NX4NF"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-blue-400 hover:text-blue-300"
                                                                        >
                                                                                ادامه مطلب
                                                                        </a>
                                                                </div>
                                                        </div>
                                                </article>

                                                {/* مقاله 3 */}
                                                <article className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                                                        <div className="p-6">
                                                                <h3 className="text-xl font-bold mb-4">مدیریت ریسک در معاملات آپشن</h3>
                                                                <p className="text-gray-400 mb-4">
                                                                        نکات کلیدی برای مدیریت ریسک در معاملات آپشن
                                                                </p>
                                                                <div className="flex justify-between items-center">
                                                                        <span className="text-sm text-gray-500">10 اردیبهشت 1403</span>
                                                                        <a
                                                                                href="https://www.derive.xyz/invite/NX4NF"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="text-blue-400 hover:text-blue-300"
                                                                        >
                                                                                ادامه مطلب
                                                                        </a>
                                                                </div>
                                                        </div>
                                                </article>
                                        </div>
                                </section>

                                {/* CTA Section */}
                                <section className="text-center">
                                        <h2 className="text-3xl font-bold mb-6">آماده شروع معاملات هستید؟</h2>
                                        بعد از تهیه vps یا vpn خود و اتصال حتما برای بار اول از  دکمه شروع معاملات استفاده کنید تا وارد پروتکل امن شوید فقط برای بار اول الزامی است
                                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                        </p>
                                        <a
                                                href="https://www.derive.xyz/invite/NX4NF"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl px-8 py-4 rounded-lg transition-colors"
                                        >
                                                شروع معاملات در Derive
                                        </a>
                                </section>
                        </div>
                </div>
        );
} 