"use client";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Legend } from "recharts";
import React from "react";

const optionKinds = [
        { label: "خرید اختیار خرید (Buy Call)", value: "buy_call" },
        { label: "فروش اختیار خرید (Sell Call)", value: "sell_call" },
        { label: "خرید اختیار فروش (Buy Put)", value: "buy_put" },
        { label: "فروش اختیار فروش (Sell Put)", value: "sell_put" },
];

type OptionParams = {
        kind: string;
        strike: number;
        premium: number;
        contracts: number;
        contractSize: number;
};

function calcPL({ kind, strike, premium, contracts, contractSize }: OptionParams) {
        return (S: number) => {
                let pl = 0;
                switch (kind) {
                        case "buy_call":
                                pl = Math.max(0, S - strike) - premium;
                                break;
                        case "sell_call":
                                pl = -1 * (Math.max(0, S - strike) - premium);
                                break;
                        case "buy_put":
                                pl = Math.max(0, strike - S) - premium;
                                break;
                        case "sell_put":
                                pl = -1 * (Math.max(0, strike - S) - premium);
                                break;
                }
                return pl * contracts * contractSize;
        };
}

// Tooltip سفارشی
const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any; label?: any }) => {
        if (active && payload && payload.length) {
                const value = payload[0].value;
                const totalInitial = payload[0].payload.totalInitial;
                let percent = totalInitial > 0 ? (value / totalInitial) * 100 : 0;
                const isProfit = value >= 0;
                const percentBg = isProfit ? "bg-green-700/80" : "bg-red-700/80";
                return (
                        <div className="rounded-lg shadow-lg p-2 bg-gray-900/90 border border-gray-700 min-w-[120px]">
                                <div className={`text-center text-xs mb-1 px-2 py-1 rounded ${percentBg} text-white`}>
                                        {percent.toFixed(1)}٪
                                </div>
                                <div className="text-center text-base font-bold text-blue-200">
                                        {value.toLocaleString()}
                                </div>
                                <div className="text-center text-xs text-gray-300 mt-1">قیمت: {label.toLocaleString()}</div>
                        </div>
                );
        }
        return null;
};

// تشخیص استراتژی بر اساس معاملات وارد شده
function detectStrategy(trades: OptionParams[]) {
        if (trades.length === 1) {
                const t = trades[0];
                if (t.kind === 'buy_call') return 'Long Call';
                if (t.kind === 'buy_put') return 'Long Put';
                if (t.kind === 'sell_call') return 'Short Call';
                if (t.kind === 'sell_put') return 'Short Put';
        }
        if (trades.length === 2) {
                const [a, b] = trades;
                // Long Straddle
                if (((a.kind === 'buy_call' && b.kind === 'buy_put') || (a.kind === 'buy_put' && b.kind === 'buy_call')) && a.strike === b.strike) {
                        return 'Long Straddle';
                }
                // Long Strangle
                if (((a.kind === 'buy_call' && b.kind === 'buy_put') || (a.kind === 'buy_put' && b.kind === 'buy_call')) && a.strike !== b.strike) {
                        return 'Long Strangle';
                }
                // Bull Call Spread
                if ((a.kind === 'buy_call' && b.kind === 'sell_call' && a.strike < b.strike) || (a.kind === 'sell_call' && b.kind === 'buy_call' && b.strike < a.strike)) {
                        return 'Bull Call Spread';
                }
                // Bear Put Spread
                if ((a.kind === 'buy_put' && b.kind === 'sell_put' && a.strike > b.strike) || (a.kind === 'sell_put' && b.kind === 'buy_put' && b.strike > a.strike)) {
                        return 'Bear Put Spread';
                }
        }
        if (trades.length === 3) {
                // Butterfly Spread (Call)
                const calls = trades.filter(t => t.kind === 'buy_call' || t.kind === 'sell_call');
                if (calls.length === 3) {
                        const strikes = calls.map(t => t.strike).sort((a, b) => a - b);
                        const buyCount = calls.filter(t => t.kind === 'buy_call').length;
                        const sellCount = calls.filter(t => t.kind === 'sell_call').length;
                        if (buyCount === 2 && sellCount === 1 && strikes[1] - strikes[0] === strikes[2] - strikes[1]) {
                                return 'Call Butterfly Spread';
                        }
                }
                // Butterfly Spread (Put)
                const puts = trades.filter(t => t.kind === 'buy_put' || t.kind === 'sell_put');
                if (puts.length === 3) {
                        const strikes = puts.map(t => t.strike).sort((a, b) => a - b);
                        const buyCount = puts.filter(t => t.kind === 'buy_put').length;
                        const sellCount = puts.filter(t => t.kind === 'sell_put').length;
                        if (buyCount === 2 && sellCount === 1 && strikes[1] - strikes[0] === strikes[2] - strikes[1]) {
                                return 'Put Butterfly Spread';
                        }
                }
        }
        if (trades.length === 4) {
                // Iron Condor
                const buyCalls = trades.filter(t => t.kind === 'buy_call');
                const sellCalls = trades.filter(t => t.kind === 'sell_call');
                const buyPuts = trades.filter(t => t.kind === 'buy_put');
                const sellPuts = trades.filter(t => t.kind === 'sell_put');
                if (buyCalls.length === 1 && sellCalls.length === 1 && buyPuts.length === 1 && sellPuts.length === 1) {
                        const strikes = trades.map(t => t.strike).sort((a, b) => a - b);
                        if (
                                buyPuts[0].strike < sellPuts[0].strike &&
                                sellPuts[0].strike < sellCalls[0].strike &&
                                sellCalls[0].strike < buyCalls[0].strike
                        ) {
                                return 'Iron Condor';
                        }
                }
        }
        return null;
}

export default function OptionPLPage() {
        const [spot, setSpot] = useState(3000);
        const [newTrade, setNewTrade] = useState({
                kind: "buy_call",
                strike: 3200,
                premium: 100,
                contracts: 1,
                contractSize: 1,
        });
        const [trades, setTrades] = useState<OptionParams[]>([]);

        // افزودن معامله جدید
        const addTrade = (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                setTrades([...trades, { ...newTrade }]);
        };
        // حذف معامله
        const removeTrade = (idx: number) => {
                setTrades(trades.filter((_, i) => i !== idx));
        };

        // محاسبه سرمایه اولیه (جمع هزینه معاملات خرید)
        const totalInitial = trades.reduce((sum, trade) => {
                if (trade.kind === "buy_call" || trade.kind === "buy_put") {
                        return sum + Math.abs(trade.premium * trade.contracts * trade.contractSize);
                }
                return sum;
        }, 0);

        // تولید داده‌های نمودار
        const minPrice = Math.max(0, spot * 0.5);
        const maxPrice = spot * 1.5;
        const step = Math.max(1, Math.round((maxPrice - minPrice) / 40));
        const data = [];
        for (let S = minPrice; S <= maxPrice; S += step) {
                let totalPL = 0;
                trades.forEach(trade => {
                        totalPL += calcPL(trade)(S);
                });
                data.push({ price: Math.round(S), pl: totalPL, totalInitial });
        }
        // Add current spot price
        let totalPLSpot = 0;
        trades.forEach(trade => { totalPLSpot += calcPL(trade)(spot); });
        data.push({ price: spot, pl: totalPLSpot, totalInitial });
        data.sort((a, b) => a.price - b.price);

        // تشخیص استراتژی
        const strategyName = detectStrategy(trades);

        // داده‌های جداگانه برای سود و زیان
        const profitData = data.map(d => ({ ...d, pl: d.pl > 0 ? d.pl : null }));
        const lossData = data.map(d => ({ ...d, pl: d.pl < 0 ? d.pl : null }));

        return (
                <div className="max-w-3xl mx-auto mt-12 bg-gray-900/80 rounded-xl shadow-lg p-8 text-white">
                        <h1 className="text-2xl font-bold mb-6 text-center">محاسبه‌گر سود/زیان استراتژی آپشن</h1>
                        {/* فرم افزودن معامله */}
                        <form className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-6 items-end" onSubmit={addTrade}>
                                <div className="col-span-2 md:col-span-2">
                                        <label className="block mb-1">نوع معامله</label>
                                        <select className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={newTrade.kind} onChange={e => setNewTrade({ ...newTrade, kind: e.target.value })}>
                                                {optionKinds.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                                        </select>
                                </div>
                                <div>
                                        <label className="block mb-1">قیمت اعمال</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={newTrade.strike} onChange={e => setNewTrade({ ...newTrade, strike: Number(e.target.value) })} min={0} />
                                </div>
                                <div>
                                        <label className="block mb-1">قیمت آپشن</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={newTrade.premium} onChange={e => setNewTrade({ ...newTrade, premium: Number(e.target.value) })} min={0} />
                                </div>
                                <div>
                                        <label className="block mb-1">تعداد قرارداد</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={newTrade.contracts} onChange={e => setNewTrade({ ...newTrade, contracts: Number(e.target.value) })} min={1} />
                                </div>
                                <div>
                                        <label className="block mb-1">اندازه هر قرارداد</label>
                                        <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={newTrade.contractSize} onChange={e => setNewTrade({ ...newTrade, contractSize: Number(e.target.value) })} min={1} />
                                </div>
                                <div className="md:col-span-1 col-span-2 flex items-end">
                                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">افزودن معامله</button>
                                </div>
                        </form>
                        {/* قیمت دارایی پایه */}
                        <div className="mb-6 md:w-1/2 md:ml-auto">
                                <label className="block mb-1">قیمت فعلی دارایی پایه (Spot)</label>
                                <input type="number" className="w-full border border-gray-700 rounded p-2 bg-black/80 text-white" value={spot} onChange={e => setSpot(Number(e.target.value))} min={0} />
                        </div>
                        {/* جدول معاملات */}
                        {trades.length > 0 && (
                                <div className="overflow-x-auto mb-8">
                                        <table className="min-w-full text-center border border-gray-700 rounded text-white bg-gray-900">
                                                <thead className="bg-blue-900 text-blue-200">
                                                        <tr>
                                                                <th className="py-2 px-4 border border-gray-700">نوع معامله</th>
                                                                <th className="py-2 px-4 border border-gray-700">قیمت اعمال</th>
                                                                <th className="py-2 px-4 border border-gray-700">قیمت آپشن</th>
                                                                <th className="py-2 px-4 border border-gray-700">تعداد</th>
                                                                <th className="py-2 px-4 border border-gray-700">اندازه قرارداد</th>
                                                                <th className="py-2 px-4 border border-gray-700">حذف</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                        {trades.map((trade, idx) => (
                                                                <tr key={idx} className="bg-gray-800 text-white">
                                                                        <td className="py-2 px-4 border border-gray-700 font-bold">{optionKinds.find(o => o.value === trade.kind)?.label}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{trade.strike}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{trade.premium}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{trade.contracts}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">{trade.contractSize}</td>
                                                                        <td className="py-2 px-4 border border-gray-700">
                                                                                <button className="text-red-400 hover:text-red-600" onClick={() => removeTrade(idx)}>حذف</button>
                                                                        </td>
                                                                </tr>
                                                        ))}
                                                </tbody>
                                        </table>
                                </div>
                        )}
                        {/* نمودار سود/زیان */}
                        <div className="mb-4 text-center text-blue-300">نمودار سود/زیان استراتژی در سررسید</div>
                        <ResponsiveContainer width="100%" height={340}>
                                <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                        <XAxis
                                                dataKey="price"
                                                type="number"
                                                domain={[minPrice, maxPrice]}
                                                tick={{ fill: '#fff' }}
                                        />
                                        <YAxis
                                                tick={{ fill: '#fff' }}
                                                label={{ value: 'سود/زیان کل', angle: 0, position: 'top', fill: '#38bdf8', dy: -20, fontSize: 16, fontWeight: 700 }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Line type="monotone" dataKey="pl" data={profitData} stroke="#22c55e" strokeWidth={3} dot={false} name="سود" />
                                        <Line type="monotone" dataKey="pl" data={lossData} stroke="#ef4444" strokeWidth={3} dot={false} name="زیان" />
                                        <ReferenceLine
                                                x={spot}
                                                stroke="#22d3ee"
                                                strokeDasharray="3 3"
                                                label={{ value: 'قیمت فعلی', fill: '#22d3ee', position: 'top', dy: 24 }}
                                        />
                                        <Legend />
                                </LineChart>
                        </ResponsiveContainer>
                        {/* نمایش نام استراتژی */}
                        {strategyName && (
                                <div className="mb-4 text-center">
                                        <span className="inline-block bg-blue-900/80 text-blue-200 px-4 py-2 rounded-lg text-lg font-bold shadow">
                                                {strategyName}
                                        </span>
                                </div>
                        )}
                </div>
        );
} 