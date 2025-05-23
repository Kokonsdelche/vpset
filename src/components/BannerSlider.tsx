"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
        {
                image: "/slider/slide1.jpg",
                title: " ما خودمان تریدر و سرمایه گذار در بازارهای مالی و کریپتوکارنسی هستیم ",
                desc: "از مشکلات سرعت اینترنت و قطعی اتصال vpn و vps های داخل ایران با خبر هستیم "
        },
        {
                image: "/slider/slide2.jpg",
                title: "درد سرهای vpn , vps شما را در حد انتظار و با هزینه مناسب انتظارتان حل میکنیم vpn و vps اختصاصی خودتان را داشته باشید  تا مشکل افت سرعت  وقطعی مدام vpn , vps را تا 90% موارد برایتان حل شود.... و حتی از اینترنت پر سرعت تر هم برخوردار شوید    ",
                desc: "البته ما هیچ راه حلی برای قطعی برق یا اختلالات مخابراتی اینترنت نداریم ولی شما را از هزینه های اضافی vpn , vps و به طور سواستفاده افراد سود جو خلاص میکنیم  "
        },
        {
                image: "/slider/slide1.jpg",
                title: "ابزارهای پیشرفته",
                desc: "vps  گروهی  با CPU سرعت و حجمهای بالا برای شرکتها باقابلت تنظیمات اختصاصی دسترسی به سایتها ."
        },
        {
                image: "/slider/slide2.jpg",
                title: "پشتیبانی 24/7 در تلگرام و واتساپ ",
                desc: "محصولات متنوع و قابل برنامه‌ریزی برای  معامله گران و تریدرهای حرفه ای ."
        },
        {
                image: "/slider/slide1.jpg",
                title: "استفاده آزمایشی 3 روزه از vpn ,vps اختصاصی ما",
                desc: " طرح های رایگان دوماهه قابل تمدید  vpn ,vps برای معامله گران حرفه ای و گروهی  "
        },
];

export default function BannerSlider() {
        const [current, setCurrent] = useState(0);
        const [paused, setPaused] = useState(false);
        const [isTransitioning, setIsTransitioning] = useState(false);
        const intervalRef = useRef<NodeJS.Timeout | null>(null);

        useEffect(() => {
                if (paused) return;
                intervalRef.current = setInterval(() => {
                        setIsTransitioning(true);
                        setTimeout(() => {
                                setCurrent((prev) => (prev + 1) % slides.length);
                                setIsTransitioning(false);
                        }, 500);
                }, 10000);
                return () => {
                        if (intervalRef.current) clearInterval(intervalRef.current);
                };
        }, [paused]);

        const handleMouseEnter = () => setPaused(true);
        const handleMouseLeave = () => setPaused(false);

        const handleSlideChange = (idx: number) => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setTimeout(() => {
                        setCurrent(idx);
                        setIsTransitioning(false);
                }, 500);
        };

        return (
                <div className="w-full max-h-72 md:max-h-96 bg-gray-900 rounded-xl overflow-hidden mb-8 relative select-none">
                        <div className="w-full h-72 md:h-96 relative">
                                <div className={`absolute inset-0 transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                                        <Image
                                                src={slides[current].image}
                                                alt={slides[current].title}
                                                fill
                                                className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                                                priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 flex flex-col justify-center items-center text-center p-6">
                                                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white drop-shadow-lg transform transition-all duration-500 hover:scale-105">
                                                        {slides[current].title}
                                                </h2>
                                                <p className="text-md md:text-xl text-gray-200 drop-shadow-lg transform transition-all duration-500 hover:scale-105">
                                                        {slides[current].desc}
                                                </p>
                                        </div>
                                </div>
                        </div>
                        {/* Indicators */}
                        <div className="absolute bottom-4 right-0 left-0 flex justify-center gap-2 z-10">
                                {slides.map((_, idx) => (
                                        <button
                                                key={idx}
                                                className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-500 transform hover:scale-125 ${current === idx
                                                        ? "bg-white scale-110"
                                                        : "bg-transparent hover:bg-white/50"
                                                        }`}
                                                onClick={() => handleSlideChange(idx)}
                                                aria-label={`اسلاید ${idx + 1}`}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                        />
                                ))}
                        </div>
                </div>
        );
} 