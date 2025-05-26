export default function Footer() {
        return (
                <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800 py-12">
                        <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {/* About Section */}
                                        <div className="space-y-4">
                                                <h3 className="text-lg font-semibold">درباره ما</h3>
                                                <p className="text-gray-400">
                                                        SETDERIVE ارائه دهنده خدمات VPN و VPS با کیفیت و امنیت بالا برای کاربران ایرانی
                                                </p>
                                        </div>

                                        {/* Quick Links */}
                                        <div className="space-y-4">
                                                <h3 className="text-lg font-semibold">دسترسی سریع</h3>
                                                <div className="flex flex-col space-y-2">
                                                        <a href="/" className="hover:text-blue-400">خانه</a>
                                                        <a href="/learn" className="hover:text-blue-400">آموزش</a>
                                                        <a href="/articles" className="hover:text-blue-400">مقالات</a>
                                                        <a href="/about" className="hover:text-blue-400">درباره ما</a>
                                                        <a href="/contact" className="hover:text-blue-400">ارتباط با ما</a>
                                                        <a href="/buy" className="hover:text-blue-400">نحوه خرید vpn,vps</a>
                                                </div>
                                        </div>

                                        {/* Contact Us */}
                                        <div className="space-y-4">
                                                <h3 className="text-lg font-semibold">ارتباط با ما</h3>
                                                <div className="flex flex-col space-y-2">
                                                        <a href="mailto:info@setderive.com" className="hover:text-blue-400">info@setderive.com</a>
                                                        <a href="tel:+989123456789" className="hover:text-blue-400">+98 912 345 6789</a>
                                                        <div className="flex gap-4 mt-2">
                                                                <a
                                                                        href="https://t.me/korosh_onsori"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        aria-label="Telegram"
                                                                        className="hover:text-blue-400"
                                                                >
                                                                        <svg width="24" height="24" fill="currentColor" className="text-blue-400 hover:text-blue-500"><path d="M21.05 3.05a2.5 2.5 0 0 0-2.6-.2L3.6 9.2c-1.1.5-1.1 1.9 0 2.4l3.6 1.5 1.5 3.6c.5 1.1 1.9 1.1 2.4 0l6.35-14.85c.2-.5.8-.7 1.2-.5.5.2.7.8.5 1.2L8.7 20.4c-.2.5-.8.7-1.2.5-.5-.2-.7-.8-.5-1.2l6.35-14.85c.2-.5.8-.7 1.2-.5.5.2.7.8.5 1.2z" /></svg>
                                                                </a>
                                                                <a
                                                                        href="https://instagram.com/yourpage"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        aria-label="Instagram"
                                                                        className="hover:text-pink-400"
                                                                >
                                                                        <svg width="24" height="24" fill="currentColor" className="text-pink-500 hover:text-pink-600"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54c-.77.23-1.42.54-2.07 1.19C1.38 2.38 1.07 3.03.84 3.8.61 4.57.428 5.47.37 6.75.312 8.03.3 8.434.3 12c0 3.566.012 3.97.07 5.25.058 1.28.24 2.18.47 2.95.23.77.54 1.42 1.19 2.07.65.65 1.3.96 2.07 1.19.77.23 1.67.412 2.95.47C8.03 23.688 8.434 23.7 12 23.7c3.566 0 3.97-.012 5.25-.07 1.28-.058 2.18-.24 2.95-.47.77-.23 1.42-.54 2.07-1.19.65-.65.96-1.3 1.19-2.07.23-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-5.25 0-3.566-.012-3.97-.07-5.25-.058-1.28-.24-2.18-.47-2.95-.23-.77-.54-1.42-1.19-2.07-.65-.65-1.3-.96-2.07-1.19-.77-.23-1.67-.412-2.95-.47C15.97.312 15.566.3 12 .3zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
                                                                </a>
                                                        </div>
                                                </div>
                                        </div>

                                        {/* Newsletter */}
                                        <div className="space-y-4">
                                                <h3 className="text-lg font-semibold">خبرنامه</h3>
                                                <p className="text-gray-400">برای اطلاع از آخرین اخبار و تخفیف‌ها در خبرنامه ما عضو شوید</p>
                                                <form className="flex flex-col space-y-2">
                                                        <input
                                                                type="email"
                                                                placeholder="ایمیل خود را وارد کنید"
                                                                className="px-4 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                        />
                                                        <button
                                                                type="submit"
                                                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                                                        >
                                                                عضویت
                                                        </button>
                                                </form>
                                        </div>
                                </div>

                                {/* Copyright */}
                                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                                        <p>© {new Date().getFullYear()} SETDERIVE. تمامی حقوق محفوظ است.</p>
                                </div>
                        </div>
                </footer>
        );
} 