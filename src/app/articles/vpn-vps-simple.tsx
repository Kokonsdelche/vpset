export default function VpnVpsSimple() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <article className="max-w-4xl mx-auto">
                                        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                                vpn , vps به زبان ساده
                                        </h1>

                                        <div className="prose prose-invert max-w-none">
                                                <div className="mb-8">
                                                        <img
                                                                src="/images/vpn-vps-explained.jpg"
                                                                alt="توضیح ساده VPN و VPS"
                                                                className="w-full h-64 object-cover rounded-lg mb-4"
                                                        />
                                                        <p className="text-sm text-gray-400 text-center">
                                                                توضیح تصویری از نحوه کار VPN و VPS
                                                        </p>
                                                </div>

                                                <h2 className="text-2xl font-bold mb-4">VPN چیست؟</h2>
                                                <p className="mb-4">
                                                        VPN یا شبکه خصوصی مجازی، یک تونل امن بین دستگاه شما و اینترنت ایجاد می‌کند.
                                                        این تونل تمام اطلاعات شما را رمزنگاری می‌کند و از آنها محافظت می‌کند.
                                                </p>

                                                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                                                        <h3 className="text-xl font-bold mb-4">🔍 VPN چگونه کار می‌کند؟</h3>
                                                        <div className="space-y-4">
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">1️⃣</span>
                                                                        <p>دستگاه شما به سرور VPN متصل می‌شود</p>
                                                                </div>
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">2️⃣</span>
                                                                        <p>اطلاعات شما رمزنگاری می‌شود</p>
                                                                </div>
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">3️⃣</span>
                                                                        <p>اطلاعات رمزنگاری شده از طریق تونل امن ارسال می‌شود</p>
                                                                </div>
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">4️⃣</span>
                                                                        <p>سرور VPN اطلاعات را رمزگشایی کرده و به مقصد می‌فرستد</p>
                                                                </div>
                                                        </div>
                                                </div>

                                                <h2 className="text-2xl font-bold mb-4">VPS چیست؟</h2>
                                                <p className="mb-4">
                                                        VPS یا سرور خصوصی مجازی، یک کامپیوتر مجازی است که در یک سرور فیزیکی قرار دارد.
                                                        شما می‌توانید روی این کامپیوتر مجازی، برنامه‌های مختلف نصب کنید و از آن استفاده کنید.
                                                </p>

                                                <div className="bg-gray-800 p-6 rounded-lg mb-8">
                                                        <h3 className="text-xl font-bold mb-4">🖥️ VPS چگونه کار می‌کند؟</h3>
                                                        <div className="space-y-4">
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">1️⃣</span>
                                                                        <p>یک سرور فیزیکی به چندین VPS تقسیم می‌شود</p>
                                                                </div>
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">2️⃣</span>
                                                                        <p>هر VPS سیستم عامل مستقل خود را دارد</p>
                                                                </div>
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">3️⃣</span>
                                                                        <p>شما کنترل کامل روی VPS خود دارید</p>
                                                                </div>
                                                                <div className="flex items-start">
                                                                        <span className="text-2xl mr-2">4️⃣</span>
                                                                        <p>می‌توانید هر نرم‌افزاری را نصب کنید</p>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                                        <div className="bg-blue-900/30 p-6 rounded-lg">
                                                                <h3 className="text-xl font-bold mb-4">📱 VPN برای چه کسانی مناسب است؟</h3>
                                                                <ul className="list-disc pl-6">
                                                                        <li>کاربران عادی اینترنت</li>
                                                                        <li>کسانی که می‌خواهند امنیت بیشتری داشته باشند</li>
                                                                        <li>افرادی که می‌خواهند به سایت‌های محدود شده دسترسی داشته باشند</li>
                                                                        <li>کسانی که می‌خواهند IP خود را مخفی کنند</li>
                                                                </ul>
                                                        </div>

                                                        <div className="bg-purple-900/30 p-6 rounded-lg">
                                                                <h3 className="text-xl font-bold mb-4">💻 VPS برای چه کسانی مناسب است؟</h3>
                                                                <ul className="list-disc pl-6">
                                                                        <li>تریدرهای حرفه‌ای</li>
                                                                        <li>توسعه‌دهندگان وب</li>
                                                                        <li>مدیران وب‌سایت</li>
                                                                        <li>کسانی که نیاز به سرور اختصاصی دارند</li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                <div className="mt-8 p-6 bg-green-900/30 rounded-lg">
                                                        <h3 className="text-xl font-bold mb-4">💡 نکات مهم</h3>
                                                        <ul className="list-disc pl-6 space-y-2">
                                                                <li>VPN برای امنیت عمومی و دسترسی به سایت‌های محدود شده مناسب است</li>
                                                                <li>VPS برای کارهای حرفه‌ای و نیازهای خاص مناسب است</li>
                                                                <li>می‌توانید VPN خود را روی VPS نصب کنید</li>
                                                                <li>برای ترید، VPS امنیت و پایداری بیشتری دارد</li>
                                                        </ul>
                                                </div>
                                        </div>
                                </article>
                        </div>
                </div>
        );
} 