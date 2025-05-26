import { NextResponse } from 'next/server';

const SYMBOLS = [
        'BTCUSDT',
        'ETHUSDT',
        'BNBUSDT',
        'SOLUSDT',
        'SUIUSDT',
        'LINKUSDT',
        'DOTUSDT',
        'XRPUSDT',
        'DOGEUSDT',
        'SUSHIUSDT',
        'ADAUSDT',
        'ARBUSDT'
];

export async function GET() {
        try {
                const prices = await getBinancePrices();
                return NextResponse.json(prices, {
                        headers: {
                                'Cache-Control': 'public, s-maxage=30, stale-while-revalidate=30',
                        },
                });
        } catch (error) {
                console.error('Error fetching prices:', error);
                return NextResponse.json(
                        { error: 'Failed to fetch prices' },
                        { status: 500 }
                );
        }
}

async function getBinancePrices() {
        const prices: any = {};

        try {
                const promises = SYMBOLS.map(symbol =>
                        fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`, {
                                next: { revalidate: 30 }
                        })
                                .then(res => res.json())
                );

                const results = await Promise.all(promises);

                results.forEach((data: any) => {
                        if (data.symbol) {
                                const symbol = data.symbol.replace('USDT', '').toLowerCase();
                                prices[symbol] = {
                                        usd: parseFloat(data.lastPrice),
                                        usd_24h_change: parseFloat(data.priceChangePercent)
                                };
                        }
                });

                return prices;
        } catch (error) {
                console.error('Error fetching from Binance:', error);
                throw error;
        }
} 