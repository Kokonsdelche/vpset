"use client";
import { useState } from "react";

export default function Navbar() {
        const [menuOpen, setMenuOpen] = useState(false);
        return (
                <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 border-b border-gray-800 top-[80px] md:top-[80px] lg:top-[80px]">
                        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                                <div className="flex items-center gap-8">
                                        <a href="/" className="text-xl font-bold"> SETDERIVE</a>
                                        <div className="hidden md:flex gap-6">
                                                <a href="/" className="hover:text-blue-400">خانه</a>
                                                <a href="/learn" className="hover:text-blue-400">آموزش</a>
                                                <a href="/articles" className="hover:text-blue-400">مقالات</a>
                                                <a href="/about" className="hover:text-blue-400">درباره ما</a>
                                                <a href="/contact" className="hover:text-blue-400">ارتباط با ما</a>
                                                <a href="/buy" className="hover:text-blue-400">نحوه خرید vpn,vps</a>
                                                <a href="/black-scholes" className="hover:text-blue-400">ماشین حساب بلک شولز</a>
                                                <a href="/option-pl" className="hover:text-blue-500 transition-colors">محاسبه‌گر سود/زیان آپشن</a>
                                        </div>
                                        {/* Hamburger menu button */}
                                        <button
                                                className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                                                onClick={() => setMenuOpen(!menuOpen)}
                                                aria-label="باز کردن منو"
                                        >
                                                <span className={`block w-7 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                                <span className={`block w-7 h-0.5 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                                                <span className={`block w-7 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                                        </button>
                                </div>
                                <div className="hidden md:flex items-center gap-4">
                                        <a
                                                href="https://t.me/korosh_onsori"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Telegram"
                                        >
                                                <svg width="24" height="24" fill="currentColor" className="text-blue-400 hover:text-blue-500"><path d="M21.05 3.05a2.5 2.5 0 0 0-2.6-.2L3.6 9.2c-1.1.5-1.1 1.9 0 2.4l3.6 1.5 1.5 3.6c.5 1.1 1.9 1.1 2.4 0l6.35-14.85c.2-.5.8-.7 1.2-.5.5.2.7.8.5 1.2L8.7 20.4c-.2.5-.8.7-1.2.5-.5-.2-.7-.8-.5-1.2l6.35-14.85c.2-.5.8-.7 1.2-.5.5.2.7.8.5 1.2z" /></svg>
                                        </a>
                                        <a
                                                href="https://instagram.com/yourpage"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Instagram"
                                        >
                                                <svg width="24" height="24" fill="currentColor" className="text-pink-500 hover:text-pink-600"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54c-.77.23-1.42.54-2.07 1.19C1.38 2.38 1.07 3.03.84 3.8.61 4.57.428 5.47.37 6.75.312 8.03.3 8.434.3 12c0 3.566.012 3.97.07 5.25.058 1.28.24 2.18.47 2.95.23.77.54 1.42 1.19 2.07.65.65 1.3.96 2.07 1.19.77.23 1.67.412 2.95.47C8.03 23.688 8.434 23.7 12 23.7c3.566 0 3.97-.012 5.25-.07 1.28-.058 2.18-.24 2.95-.47.77-.23 1.42-.54 2.07-1.19.65-.65.96-1.3 1.19-2.07.23-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-5.25 0-3.566-.012-3.97-.07-5.25-.058-1.28-.24-2.18-.47-2.95-.23-.77-.54-1.42-1.19-2.07-.65-.65-1.3-.96-2.07-1.19-.77-.23-1.67-.412-2.95-.47C15.97.312 15.566.3 12 .3zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
                                        </a>
                                </div>
                                <a
                                        href="https://www.derive.xyz/invite/NX4NF"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                                >
                                        شروع معاملات
                                </a>
                        </nav>
                        {/* Mobile menu */}
                        {menuOpen && (
                                <div className="md:hidden bg-black/95 border-b border-gray-800 px-4 py-6 absolute right-0 left-0 z-50 animate-fade-in-down top-[80px]">
                                        <a href="/" className="block py-2 px-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>خانه</a>
                                        <a href="/learn" className="block py-2 px-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>آموزش</a>
                                        <a href="/articles" className="block py-2 px-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>مقالات</a>
                                        <a href="/about" className="block py-2 px-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>درباره ما</a>
                                        <a href="/contact" className="block py-2 px-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>ارتباط با ما</a>
                                        <a href="/buy" className="block py-2 px-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>نحوه خرید vpn,vps</a>
                                        <a href="/black-scholes" className="block py-2 px-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>ماشین حساب بلک شولز</a>
                                        <a href="/option-pl" className="block py-2 px-2 hover:text-blue-500 transition-colors" onClick={() => setMenuOpen(false)}>محاسبه‌گر سود/زیان آپشن</a>
                                </div>
                        )}
                </header>
        );
} 