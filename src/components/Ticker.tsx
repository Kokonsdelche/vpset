"use client";
import { useEffect, useRef, useState } from "react";

const coins = [
        { symbol: "BINANCE:BTCUSDT", label: "BTC" },
        { symbol: "BINANCE:ETHUSDT", label: "ETH" },
        { symbol: "BINANCE:BNBUSDT", label: "BNB" },
        { symbol: "BINANCE:SOLUSDT", label: "SOL" },
        { symbol: "BINANCE:SUIUSDT", label: "SUI" },
        { symbol: "BINANCE:LINKUSDT", label: "LINK" },
        { symbol: "BINANCE:DOTUSDT", label: "DOT" },
        { symbol: "BINANCE:XRPUSDT", label: "XRP" },
        { symbol: "BINANCE:DOGEUSDT", label: "DOGE" },
        { symbol: "BINANCE:SUSHIUSDT", label: "SUSHI" },
        { symbol: "BINANCE:ADAUSDT", label: "ADA" },
        { symbol: "BINANCE:ARBUSDT", label: "ARB" },
];

interface PriceData {
        price: number;
        change: number;
        changePercent: number;
}

const formatPrice = (price: number, symbol: string) => {
        if (symbol === "BTC") {
                return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (symbol === "ETH") {
                return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (["BNB", "SOL"].includes(symbol)) {
                return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else if (["LINK", "DOT", "ARB"].includes(symbol)) {
                return price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } else {
                return price.toLocaleString("en-US", { minimumFractionDigits: 4, maximumFractionDigits: 4 });
        }
};

const formatChange = (change: number) => {
        return change.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

export default function Ticker() {
        const [prices, setPrices] = useState<Record<string, PriceData>>({});
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState(true);
        const [duration, setDuration] = useState(30);
        const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
        const marqueeRef = useRef<HTMLDivElement>(null);
        const [transform, setTransform] = useState('translateX(100%)');

        useEffect(() => {
                async function fetchPrices() {
                        try {
                                setLoading(true);
                                setError(null);
                                const res = await fetch('/api/crypto');
                                if (!res.ok) throw new Error("خطا در دریافت داده");
                                const data = await res.json();
                                const filtered: Record<string, PriceData> = {};

                                data.forEach((item: any) => {
                                        const coin = coins.find(c => c.symbol === item.symbol);
                                        if (coin) {
                                                filtered[coin.label] = {
                                                        price: item.price,
                                                        change: item.change,
                                                        changePercent: item.changePercent
                                                };
                                        }
                                });

                                setPrices(filtered);
                                setLastUpdate(new Date());
                                // ریست کردن موقعیت به سمت راست
                                setTransform('translateX(100%)');
                                // شروع انیمیشن بعد از یک لحظه
                                setTimeout(() => {
                                        setTransform('translateX(-100%)');
                                }, 50);
                        } catch (err) {
                                setError("دریافت قیمت آنلاین ممکن نیست. لطفاً بعداً تلاش کنید.");
                        } finally {
                                setLoading(false);
                        }
                }

                const startAnimation = () => {
                        if (marqueeRef.current) {
                                const width = marqueeRef.current.scrollWidth;
                                const newDuration = Math.max(6, Math.floor(width / 300) * 3);
                                setDuration(newDuration);

                                const updateInterval = setInterval(fetchPrices, newDuration * 1000);

                                return () => {
                                        clearInterval(updateInterval);
                                };
                        }
                };

                fetchPrices();
                const cleanup = startAnimation();
                return cleanup;
        }, []);

        useEffect(() => {
                if (marqueeRef.current) {
                        const width = marqueeRef.current.scrollWidth;
                        setDuration(Math.max(6, Math.floor(width / 300) * 3));
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
                                <div className="relative w-full overflow-hidden">
                                        <div className="text-xs text-gray-400 text-center py-1">
                                                آخرین به‌روزرسانی: {lastUpdate.toLocaleTimeString('fa-IR')}
                                        </div>
                                        <div
                                                ref={marqueeRef}
                                                className="flex whitespace-nowrap group"
                                                style={{
                                                        transform,
                                                        transition: `transform ${duration}s linear`,
                                                }}
                                                onMouseEnter={e => e.currentTarget.style.transition = 'none'}
                                                onMouseLeave={e => e.currentTarget.style.transition = `transform ${duration}s linear`}
                                        >
                                                {coins.map((coin) => (
                                                        <div
                                                                key={coin.symbol}
                                                                className="flex items-center gap-2 px-6 py-2 min-w-max bg-[#23272b] rounded-lg mx-2 shadow border border-gray-700"
                                                        >
                                                                <span className="font-bold text-white drop-shadow">{coin.label}</span>
                                                                <span className="text-lime-400 font-mono drop-shadow transition-all duration-500 ease-in-out">
                                                                        ${prices[coin.label]?.price
                                                                                ? formatPrice(prices[coin.label].price, coin.label)
                                                                                : "..."}
                                                                </span>
                                                                <span className={`text-sm font-bold transition-all duration-500 ease-in-out ${prices[coin.label]?.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {prices[coin.label]?.changePercent
                                                                                ? `${prices[coin.label].changePercent >= 0 ? '↑' : '↓'} ${formatChange(Math.abs(prices[coin.label].changePercent))}%`
                                                                                : "..."}
                                                                </span>
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
                                                                <span className="text-lime-400 font-mono drop-shadow transition-all duration-500 ease-in-out">
                                                                        ${prices[coin.label]?.price
                                                                                ? formatPrice(prices[coin.label].price, coin.label)
                                                                                : "..."}
                                                                </span>
                                                                <span className={`text-sm font-bold transition-all duration-500 ease-in-out ${prices[coin.label]?.changePercent >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {prices[coin.label]?.changePercent
                                                                                ? `${prices[coin.label].changePercent >= 0 ? '↑' : '↓'} ${formatChange(Math.abs(prices[coin.label].changePercent))}%`
                                                                                : "..."}
                                                                </span>
                                                        </div>
                                                ))}
                                        </div>
                                        <style jsx>{`
            @keyframes marquee-right-to-left {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
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