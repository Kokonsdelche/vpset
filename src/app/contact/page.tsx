import React from "react";

export default function Contact() {
        return (
                <div className="min-h-screen py-20">
                        <div className="container mx-auto px-4">
                                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                        ارتباط با ما
                                </h1>
                                <section className="mb-12 max-w-xl mx-auto bg-gray-900 rounded-lg p-8 border border-gray-800">
                                        <h2 className="text-2xl font-bold mb-6 text-center">از طریق ایمیل یا پیام‌رسان‌ها با ما در ارتباط باشید</h2>
                                        <form className="mb-8" action="mailto:your@email.com" method="POST" encType="text/plain">
                                                <div className="mb-4">
                                                        <label className="block mb-2 text-right" htmlFor="name">نام:</label>
                                                        <input className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700" type="text" id="name" name="name" required />
                                                </div>
                                                <div className="mb-4">
                                                        <label className="block mb-2 text-right" htmlFor="email">ایمیل:</label>
                                                        <input className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700" type="email" id="email" name="email" required />
                                                </div>
                                                <div className="mb-4">
                                                        <label className="block mb-2 text-right" htmlFor="message">پیام:</label>
                                                        <textarea className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700" id="message" name="message" rows={4} required></textarea>
                                                </div>
                                                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors font-bold">ارسال ایمیل</button>
                                        </form>
                                        <div className="flex flex-col items-center gap-4">
                                                <a href="https://wa.me/5511939441883" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold text-lg">ارتباط در واتساپ</a>
                                                <div className="flex gap-6 mt-2">
                                                        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                                                <svg width="32" height="32" fill="currentColor" className="text-pink-500 hover:text-pink-600"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54c-.77.23-1.42.54-2.07 1.19C1.38 2.38 1.07 3.03.84 3.8.61 4.57.428 5.47.37 6.75.312 8.03.3 8.434.3 12c0 3.566.012 3.97.07 5.25.058 1.28.24 2.18.47 2.95.23.77.54 1.42 1.19 2.07.65.65 1.3.96 2.07 1.19.77.23 1.67.412 2.95.47C8.03 23.688 8.434 23.7 12 23.7c3.566 0 3.97-.012 5.25-.07 1.28-.058 2.18-.24 2.95-.47.77-.23 1.42-.54 2.07-1.19.65-.65.96-1.3 1.19-2.07.23-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-5.25 0-3.566-.012-3.97-.07-5.25-.058-1.28-.24-2.18-.47-2.95-.23-.77-.54-1.42-1.19-2.07-.65-.65-1.3-.96-2.07-1.19-.77-.23-1.67-.412-2.95-.47C15.97.312 15.566.3 12 .3zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.6a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
                                                        </a>
                                                        <a href="https://t.me/korosh_onsori" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                                                <svg width="32" height="32" fill="currentColor" className="text-blue-400 hover:text-blue-500"><path d="M21.05 3.05a2.5 2.5 0 0 0-2.6-.2L3.6 9.2c-1.1.5-1.1 1.9 0 2.4l3.6 1.5 1.5 3.6c.5 1.1 1.9 1.1 2.4 0l6.35-14.85c.2-.5.8-.7 1.2-.5.5.2.7.8.5 1.2L8.7 20.4c-.2.5-.8.7-1.2.5-.5-.2-.7-.8-.5-1.2l6.35-14.85c.2-.5.8-.7 1.2-.5.5.2.7.8.5 1.2z" /></svg>
                                                        </a>
                                                </div>
                                        </div>
                                </section>
                        </div>
                </div>
        );
} 