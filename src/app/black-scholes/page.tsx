"use client";
import { useState, useEffect, useRef } from "react";

function erf(x: number) {
        // تقریب عددی تابع erf
        // منبع: Numerical Recipes
        const sign = x >= 0 ? 1 : -1;
        x = Math.abs(x);
        const t = 1 / (1 + 0.3275911 * x);
        const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
        const y = 1 - (((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t) * Math.exp(-x * x);
        return sign * y;
}

function norm_cdf(x: number) {
        return 0.5 * (1 + erf(x / Math.sqrt(2)));
}

function blackScholes({ S, K, T, r, sigma }: { S: number; K: number; T: number; r: number; sigma: number; }) {
        const d1 = (Math.log(S / K) + (r + 0.5 * sigma ** 2) * T) / (sigma * Math.sqrt(T));
        const d2 = d1 - sigma * Math.sqrt(T);
        const call = S * norm_cdf(d1) - K * Math.exp(-r * T) * norm_cdf(d2);
        const put = K * Math.exp(-r * T) * norm_cdf(-d2) - S * norm_cdf(-d1);
        // Greeks
        const deltaCall = norm_cdf(d1);
        const deltaPut = norm_cdf(d1) - 1;
        const gamma = Math.exp(-0.5 * d1 ** 2) / (S * sigma * Math.sqrt(2 * Math.PI * T));
        const vega = S * Math.exp(-0.5 * d1 ** 2) * Math.sqrt(T) / Math.sqrt(2 * Math.PI);
        const thetaCall = (-S * sigma * Math.exp(-0.5 * d1 ** 2)) / (2 * Math.sqrt(2 * Math.PI * T)) - r * K * Math.exp(-r * T) * norm_cdf(d2);
        const thetaPut = (-S * sigma * Math.exp(-0.5 * d1 ** 2)) / (2 * Math.sqrt(2 * Math.PI * T)) + r * K * Math.exp(-r * T) * norm_cdf(-d2);
        const rhoCall = K * T * Math.exp(-r * T) * norm_cdf(d2);
        const rhoPut = -K * T * Math.exp(-r * T) * norm_cdf(-d2);
        return {
                call, put, deltaCall, deltaPut, gamma, vega, thetaCall, thetaPut, rhoCall, rhoPut
        };
}

const COINS = [
        { label: "بیت‌کوین (BTC)", id: "BTCUSDT" },
        { label: "اتریوم (ETH)", id: "ETHUSDT" },
        { label: "سولانا (SOL)", id: "SOLUSDT" },
        { label: "ریپل (XRP)", id: "XRPUSDT" },
        { label: "ورودی دستی", id: "manual" },
];

export default function BlackScholesPage() {
        const [selectedCoin, setSelectedCoin] = useState("manual");
        const [S, setS] = useState<string>("");
        const [K, setK] = useState<string>("");
        const [days, setDays] = useState<string>("");
        const [sigma, setSigma] = useState<string>("");
        const [r, setR] = useState<string>("");
        const [result, setResult] = useState<any>(null);
        const [submitted, setSubmitted] = useState(false);
        const [error, setError] = useState<string>("");
        const resultRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
                if (selectedCoin !== "manual") {
                        fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${selectedCoin}`)
                                .then(res => res.json())
                                .then(data => {
                                        const price = data.price;
                                        if (price) setS(Number(price).toString());
                                });
                }
        }, [selectedCoin]);

        const handleSubmit = (e: React.FormEvent) => {
                e.preventDefault();
                if (!S) {
                        setError("لطفا قیمت دارایی پایه را وارد کنید.");
                        setSubmitted(false);
                        return;
                }
                if (!K) {
                        setError("لطفا قیمت اعمال را وارد کنید.");
                        setSubmitted(false);
                        return;
                }
                if (!days) {
                        setError("لطفا روز تا سررسید را وارد کنید.");
                        setSubmitted(false);
                        return;
                }
                if (!sigma) {
                        setError("لطفا نوسان (Volatility) را وارد کنید.");
                        setSubmitted(false);
                        return;
                }
                if (!r) {
                        setError("لطفا نرخ بهره را وارد کنید.");
                        setSubmitted(false);
                        return;
                }
                const Snum = Number(S), Knum = Number(K), daysNum = Number(days), sigmaNum = Number(sigma), rNum = Number(r);
                if ([Snum, Knum, daysNum, sigmaNum, rNum].some(isNaN) || daysNum <= 0) {
                        setError("مقادیر وارد شده معتبر نیستند.");
                        setSubmitted(false);
                        return;
                }
                setError("");
                const T = daysNum / 365;
                const res = blackScholes({
                        S: Snum,
                        K: Knum,
                        T,
                        r: rNum / 100,
                        sigma: sigmaNum / 100,
                });
                setResult(res);
                setSubmitted(true);
                setTimeout(() => {
                        if (resultRef.current) resultRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 100);
        };

        return (
                <div className="max-w-3xl mx-auto mt-12 bg-gray-900/80 rounded-xl shadow-lg p-8 text-white">
                        <h1 className="text-2xl font-bold mb-4 text-center">ماشین حساب بلک شولز</h1>
                        {error && <div className="text-red-400 text-center mb-4">{error}</div>}
                        <div className="mb-6">
                                <label className="block mb-1">انتخاب ارز</label>
                                <select
                                        className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white"
                                        value={selectedCoin}
                                        onChange={e => setSelectedCoin(e.target.value)}
                                >
                                        {COINS.map(c => (
                                                <option key={c.id} value={c.id}>{c.label}</option>
                                        ))}
                                </select>
                        </div>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                        <label className="block mb-1">قیمت دارایی پایه</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={S} onChange={e => setS(e.target.value)} required min={0} disabled={selectedCoin !== "manual"} />
                                </div>
                                <div>
                                        <label className="block mb-1">قیمت اعمال</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={K} onChange={e => setK(e.target.value)} required min={0} />
                                </div>
                                <div>
                                        <label className="block mb-1">روز تا سررسید</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={days} onChange={e => setDays(e.target.value)} required min={1} />
                                </div>
                                <div>
                                        <label className="block mb-1">نوسان (Volatility) %</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={sigma} onChange={e => setSigma(e.target.value)} required min={0} max={100} step={0.01} />
                                </div>
                                <div>
                                        <label className="block mb-1">نرخ بهره %</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={r} onChange={e => setR(e.target.value)} required min={0} max={100} step={0.01} />
                                </div>
                                <div className="flex items-end">
                                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">محاسبه</button>
                                </div>
                        </form>
                        {submitted && result && S && K && days && sigma && r && (
                                <div ref={resultRef} className="mt-8">
                                        <h2 className="text-xl font-semibold mb-4 text-center text-blue-400">نتایج محاسبات</h2>
                                        <div className="overflow-x-auto">
                                                <table className="min-w-full text-center border border-gray-700 rounded text-white bg-gray-900">
                                                        <thead className="bg-blue-900 text-blue-200">
                                                                <tr>
                                                                        <th className="py-2 px-4 border border-gray-700">نوع</th>
                                                                        <th className="py-2 px-4 border border-gray-700">قیمت تئوری</th>
                                                                        <th className="py-2 px-4 border border-gray-700">دلتا</th>
                                                                        <th className="py-2 px-4 border border-gray-700">گاما</th>
                                                                        <th className="py-2 px-4 border border-gray-700">وگا</th>
                                                                        <th className="py-2 px-4 border border-gray-700">تتا</th>
                                                                        <th className="py-2 px-4 border border-gray-700">رو</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr className="bg-gray-800 text-white">
                                                                        <td className="py-2 px-4 border border-gray-700 font-bold">اختیار خرید</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.call.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.deltaCall.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.gamma.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.vega.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.thetaCall.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.rhoCall.toFixed(4)}</td>
                                                                </tr>
                                                                <tr className="bg-gray-800 text-white">
                                                                        <td className="py-2 px-4 border border-gray-700 font-bold">اختیار فروش</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.put.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.deltaPut.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.gamma.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.vega.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.thetaPut.toFixed(4)}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{result.rhoPut.toFixed(4)}</td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                </div>
                        )}
                </div>
        );
} 