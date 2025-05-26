export default function Learn() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                        آموزش نصب و راه اندازی VPN , VPSونحوه اتصال به صرافی  Derive
                                </h1>

                                {/* دوره‌های آموزشی */}
                                <section className="mb-20">
                                        <h2 className="text-3xl font-bold mb-8">دوره‌های آموزشی</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                                {/* دوره 1 */}
                                                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                                                        <div className="p-6">
                                                                <h3 className="text-xl font-bold mb-4">آموزش نصب و راه اندازی VPN </h3>
                                                                <p className="text-gray-400 mb-4">
                                                                        نصب فایل ....
                                                                </p>
                                                                <ul className="text-gray-400 mb-6 space-y-2">
                                                                        <li>• طریغه ست کردن ...</li>
                                                                        <li>• طریقه استفاده از vpn</li>
                                                                        <li>• عیب یابی و رفع عیب </li>
                                                                </ul>
                                                                <a
                                                                        href="/learn/vpn"
                                                                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                                                                >
                                                                        شروع دوره
                                                                </a>
                                                        </div>
                                                </div>

                                                {/* دوره 2 */}
                                                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                                                        <div className="p-6">
                                                                <h3 className="text-xl font-bold mb-4">آموزش نصب و راه اندازی vps</h3>
                                                                <p className="text-gray-400 mb-4">
                                                                        آموزش جامع نصب و راه اندازی vps و نحوه اتصال به صرافی  Derive
                                                                </p>
                                                                <ul className="text-gray-400 mb-6 space-y-2">
                                                                        <li>1 نصب و راه اندازی</li>
                                                                        <li>2 ست کردن vps</li>
                                                                        <li>3 نحوه اتصال به صرافی derive</li>
                                                                        <li>4 عیب یابی و رفع عیب</li>
                                                                </ul>
                                                                <a
                                                                        href="/learn/vps"
                                                                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                                                                >
                                                                        شروع دوره
                                                                </a>
                                                        </div>
                                                </div>

                                                {/* دوره 3 */}
                                                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                                                        <div className="p-6">
                                                                <h3 className="text-xl font-bold mb-4">آموزش نحوه استفاده از صرافی Derive.xyz</h3>
                                                                <p className="text-gray-400 mb-4">
                                                                        نحوه ساخت ولت  در یک صرافی غیر متمرکز
                                                                </p>
                                                                <ul className="text-gray-400 mb-6 space-y-2">
                                                                        <li>• نحوه نصب اکسنشن در بروزرها</li>
                                                                        <li>• نحوه اتصال کیف پول به صرافی Derive.xyz</li>
                                                                        <li>• چگونه در صرافی ِderive.xyz معاملات آپشن خود را آعاز کنیم </li>
                                                                </ul>
                                                                <a
                                                                        href="/learn/derive"
                                                                        className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                                                                >
                                                                        شروع دوره
                                                                </a>
                                                        </div>
                                                </div>
                                        </div>
                                </section>

                                {/* CTA Section */}
                                <section className="text-center">
                                        <h2 className="text-3xl font-bold mb-6">آماده شروع معاملات هستید؟</h2>
                                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                                بعد از تهیه vps یا vpn خود و اتصال حتما برای بار اول از  دکمه شروع معاملات استفاده کنید تا وارد پروتکل امن شوید فقط برای بار اول الزامی است
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