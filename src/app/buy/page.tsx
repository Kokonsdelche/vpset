import React from "react";

export default function Buy() {
        return (
                <div className="min-h-screen py-20 flex flex-col items-center justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                                پرداخت به صورت ارزهای دیجیتال و ایجاد درخواست و پیش‌فاکتور فقط از طریق تلگرام و واتساپ امکان‌پذیر است
                        </h2>
                        <div className="flex gap-12 mt-8">
                                <a href="https://t.me/korosh_onsori" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                        <span className="text-blue-400 text-7xl font-bold">تلگرام</span>
                                </a>
                                <a href="https://wa.me/5511939441883" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                        <span className="text-green-500 text-7xl font-bold">واتساپ</span>
                                </a>
                        </div>
                </div>
        );
} 