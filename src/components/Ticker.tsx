"use client";
import { useEffect, useRef, useState } from "react";

const coins = [
        { symbol: "BTCUSDT", label: "BTC" },
        { symbol: "ETHUSDT", label: "ETH" },
        { symbol: "BNBUSDT", label: "BNB" },
        { symbol: "SOLUSDT", label: "SOL" },
        { symbol: "SUIUSDT", label: "SUI" },
        { symbol: "LINKUSDT", label: "LINK" },
        { symbol: "DOTUSDT", label: "DOT" },
        { symbol: "XRPUSDT", label: "XRP" },
        { symbol: "DOGEUSDT", label: "DOGE" },
        { symbol: "SUSHIUSDT", label: "SUSHI" },
        { symbol: "ADAUSDT", label: "ADA" },
        { symbol: "ARBUSDT", label: "ARB" },
];

export default function Ticker() {
        const [prices, setPrices] = useState<any>({});
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState(true);
        const [duration, setDuration] = useState(30); // مدت زمان پیش‌فرض
        const marqueeRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
                async function fetchPrices() {
                        try {
                                setLoading(true);
                                setError(null);
                                const url = "https://api.binance.com/api/v3/ticker/price";
                                const res = await fetch(url);
                                if (!res.ok) throw new Error("خطا در دریافت داده از Binance");
                                const data = await res.json();
                                const filtered: any = {};
                                coins.forEach((coin) => {
                                        const found = data.find((item: any) => item.symbol === coin.symbol);
                                        filtered[coin.symbol] = found ? found.price : null;
                                });
                                setPrices(filtered);
                        } catch (err) {
                                setError("دریافت قیمت آنلاین ممکن نیست. لطفاً بعداً تلاش کنید.");
                        } finally {
                                setLoading(false);
                        }
                }
                fetchPrices();
                const interval = setInterval(fetchPrices, 20000);
                return () => clearInterval(interval);
        }, []);

        // محاسبه مدت زمان حرکت بر اساس طول marquee
        useEffect(() => {
                if (marqueeRef.current) {
                        const width = marqueeRef.current.scrollWidth;
                        // هر 300px حدود 6 ثانیه (قابل تنظیم)
                        setDuration(Math.max(12, Math.floor(width / 300) * 6));
                }
        }, [loading, prices]);

        if (error) {
                return (
                        <div className="w-full bg-[#181c20] border-b border-gray-800 text-center text-red-400 py-2">
                                {error}
                        </div>
                );
        }

        return (
                <div className="w-full bg-[#181c20] border-b border-gray-800 shadow-lg overflow-hidden select-none">
                        {loading ? (
                                <div className="text-center text-gray-400 py-2">در حال دریافت قیمت‌ها...</div>
                        ) : (
                                <div className="relative w-full overflow-hidden" style={{ direction: "rtl" }}>
                                        <div
                                                ref={marqueeRef}
                                                className="flex whitespace-nowrap rtl flex-row-reverse group"
                                                style={{
                                                        animation: `marquee-standard ${duration}s linear infinite`,
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.animationPlayState = "paused"}
                                                onMouseLeave={e => e.currentTarget.style.animationPlayState = "running"}
                                        >
                                                {coins.map((coin) => (
                                                        <div
                                                                key={coin.symbol}
                                                                className="flex items-center gap-2 px-6 py-2 min-w-max bg-[#23272b] rounded-lg mx-2 shadow border border-gray-700"
                                                        >
                                                                <span className="font-bold text-white drop-shadow">{coin.label}</span>
                                                                <span className="text-lime-400 font-mono drop-shadow">
                                                                        {prices[coin.symbol]
                                                                                ? Number(prices[coin.symbol]).toLocaleString("en-US", { maximumFractionDigits: 4 })
                                                                                : "..."}
                                                                </span>
                                                                <span className="text-xs text-gray-400">USDT</span>
                                                        </div>
                                                ))}
                                                {/* تکرار دوم برای حرکت بی‌وقفه */}
                                                {coins.map((coin) => (
                                                        <div
                                                                key={coin.symbol + "-repeat"}
                                                                className="flex items-center gap-2 px-6 py-2 min-w-max bg-[#23272b] rounded-lg mx-2 shadow border border-gray-700"
                                                                aria-hidden="true"
                                                        >
                                                                <span className="font-bold text-white drop-shadow">{coin.label}</span>
                                                                <span className="text-lime-400 font-mono drop-shadow">
                                                                        {prices[coin.symbol]
                                                                                ? Number(prices[coin.symbol]).toLocaleString("en-US", { maximumFractionDigits: 4 })
                                                                                : "..."}
                                                                </span>
                                                                <span className="text-xs text-gray-400">USDT</span>
                                                        </div>
                                                ))}
                                        </div>
                                        <style jsx>{`
            @keyframes marquee-standard {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .group {
              animation-play-state: running;
            }
            .group:hover {
              animation-play-state: paused;
            }
          `}</style>
                                </div>
                        )}
                </div>
        );
} 