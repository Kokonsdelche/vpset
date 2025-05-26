export default function About() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                        درباره ما
                                </h1>

                                {/* معرفی */}
                                <section className="mb-20">
                                        <div className="max-w-3xl mx-auto text-center">
                                                <h2 className="text-3xl font-bold mb-6">ما از مشکلات شما در ایران باخبر هستیم </h2>
                                                <p className="text-xl text-gray-300 mb-8">
                                                        ما یک تیم متخصص نرم افزاری در زمینه معاملات آپشن و DeFi هستیم که با هدف کمک به معامله‌گران ایرانی تصمیم گرفتیم ،
                        پلتفرم را به این جهت   راه‌اندازی کرده‌ایم تا شما بتوانید با داشتن یک vpn یا vps خوب و سریع با اطمینان خاطر مشغول به معملات خود باشید تمام سرورهای ما با تکنیک خاص و انحصاری و تنظیم شده و خارج از کشور ایران خریداری  واز شرکتهای معتبر کشورهای فرانسه ,هلند ,انگلیس ,برزیل,امارات متحده عربی , هندوستان  برای خدمات دهی به شما استفاده میکنم .
                                                </p>
                                                <p className="text-xl text-gray-300">
                                                        هدف ما این است که با ارائه سرویسهایی پیشرفته vpn , vps با تکنیکهای منحصر به فرد توسط تیم متخصص  SETDERIVE  به شما کمک کنیم تا بتوانید
                                                        به راحتی در پلتفرم Derive معامله کنید و از مزایای آن بهره‌مند شوید.
                                                        ما خودمان از این پلتفرم قدرتمند برای معملاتمان استفاده میکنیم متوجه شدیم شما برای فعالیت با این پلتفرم مشکلات زیادی دارید چون دوستان زیادی از تریدرهای در ایران دوستان ما هستند واز مشکلات خود با ما صحبت میکنند به همین علت ما برای کمک شما نوع خاصی از vpn , vps را طراحی تنظیم و فراهم کردیم تا تمام مشکلات قبلی شما از بین برود ولی برای مشکل قطع برق و سرعت اینتر نت بومی داخل ایران کاری نمیتوانیم انجام دهیم .ُ
                                                </p>
                                        </div>
                                </section>

                                {/* مزایا */}
                                <section className="mb-20">
                                        <h2 className="text-3xl font-bold text-center mb-12">چرا ما را انتخاب کنید؟</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                                                        <h3 className="text-xl font-bold mb-4">ما خودمان تریدر هستیم</h3>
                                                        <p className="text-gray-400">
                                                                ما خودمان تریدر هستیم و اهمیت  امنیت ارتباط بین یک معامله گر  و پلتفرم معاملاتی را میدانیم
                                                        </p>
                                                </div>
                                                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                                                        <h3 className="text-xl font-bold mb-4">پشتیبانی  واقعی</h3>
                                                        <p className="text-gray-400">
                                                                پشتیبانی دائمی و موثر برای ارایه یک سرویس خوب و موفق به صورت 24 ساعت و تمام 7 روز هفته
                                                        </p>
                                                </div>
                                                <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                                                        <h3 className="text-xl font-bold mb-4">مزایای ویژه</h3>
                                                        <p className="text-gray-400">
                                                                یک اتصال  امن از طریق vpnیا vps ما قطعا از سرمایه شما در مقابل هر گونه هک و سواستفادهای اینترنتی  بیمه میکند
                                                        </p>
                                                </div>
                                        </div>
                                </section>

                                {/* CTA Section */}
                                <section className="text-center">
                                        <h2 className="text-3xl font-bold mb-6">آماده شروع معاملات هستید؟</h2>
                                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                                بعد از تهیه vps یا vpn خود و اتصال حتما برای بار اول از  دکمه شروع معاملات استفاده کنید تا وارد پروتکل امن شوید فقط برای بار اول الزامی است .
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