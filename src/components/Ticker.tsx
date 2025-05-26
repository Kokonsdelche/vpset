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

interface Price {
        usd: number;
        usd_24h_change: number;
}

interface Prices {
        [key: string]: Price;
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
        const [prices, setPrices] = useState<Prices>({});
        const [nextPrices, setNextPrices] = useState<Prices>({});
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState(true);
        const [duration, setDuration] = useState(30);
        const [lastUpdate, setLastUpdate] = useState<number>(Date.now());
        const marqueeRef = useRef<HTMLDivElement>(null);
        const [isFirstSet, setIsFirstSet] = useState(true);

        const fetchPrices = async (isFirst: boolean = true) => {
                try {
                        setLoading(true);
                        setError(null);
                        const res = await fetch('/api/crypto');
                        if (!res.ok) throw new Error("خطا در دریافت داده");
                        const data = await res.json();

                        if (isFirst) {
                                setPrices(data);
                        } else {
                                setNextPrices(data);
                        }
                        setLastUpdate(Date.now());
                } catch (err) {
                        setError("دریافت قیمت آنلاین ممکن نیست. لطفاً بعداً تلاش کنید.");
                } finally {
                        setLoading(false);
                }
        };

        useEffect(() => {
                const initializePrices = async () => {
                        await fetchPrices(true);
                        await fetchPrices(false);
                };
                initializePrices();
                const interval = setInterval(() => {
                        fetchPrices(!isFirstSet);
                }, 30000);

                return () => clearInterval(interval);
        }, [isFirstSet]);

        const handleAnimationEnd = () => {
                setIsFirstSet(!isFirstSet);
                fetchPrices(!isFirstSet);
        };

        if (error) {
                return (
                        <div className="w-full bg-[#181c20] border-b border-gray-800 text-center text-red-400 py-2">
                                {error}
                        </div>
                );
        }

        const currentPrices = isFirstSet ? prices : nextPrices;
        const animationDuration = Object.keys(currentPrices).length * 2; // 2 seconds per price

        return (
                <div className="w-full overflow-hidden bg-gray-900 py-2">
                        {loading ? (
                                <div className="text-center text-gray-400 py-2">در حال دریافت قیمت‌ها...</div>
                        ) : (
                                <div className="relative w-full overflow-hidden">
                                        <div className="text-xs text-gray-400 text-center py-1">
                                                آخرین به‌روزرسانی: {new Date(lastUpdate).toLocaleTimeString('fa-IR')}
                                        </div>
                                        <div
                                                ref={marqueeRef}
                                                className="flex whitespace-nowrap"
                                                style={{
                                                        animation: `ticker ${animationDuration}s linear infinite`,
                                                        willChange: 'transform'
                                                }}
                                                onAnimationEnd={handleAnimationEnd}
                                        >
                                                {Object.entries(currentPrices).map(([symbol, data]) => (
                                                        <div
                                                                key={symbol}
                                                                className="inline-flex items-center px-4 text-white"
                                                        >
                                                                <span className="font-bold">{symbol.toUpperCase()}</span>
                                                                <span className="mx-2">${data.usd.toLocaleString()}</span>
                                                                <span className={`${data.usd_24h_change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                                        {data.usd_24h_change >= 0 ? '↑' : '↓'} {Math.abs(data.usd_24h_change).toFixed(2)}%
                                                                </span>
                                                        </div>
                                                ))}
                                        </div>
                                        <style jsx>{`
            @keyframes ticker {
              0% {
                transform: translateX(100vw);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}</style>
                                </div>
                        )}
                </div>
        );
} 