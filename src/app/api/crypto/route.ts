import { NextResponse } from 'next/server';

export async function GET() {
        try {
                const symbols = [
                        "BINANCE:BTCUSDT",
                        "BINANCE:ETHUSDT",
                        "BINANCE:BNBUSDT",
                        "BINANCE:SOLUSDT",
                        "BINANCE:SUIUSDT",
                        "BINANCE:LINKUSDT",
                        "BINANCE:DOTUSDT",
                        "BINANCE:XRPUSDT",
                        "BINANCE:DOGEUSDT",
                        "BINANCE:SUSHIUSDT",
                        "BINANCE:ADAUSDT",
                        "BINANCE:ARBUSDT"
                ];

                // Validate symbols
                if (!Array.isArray(symbols) || symbols.length === 0) {
                        return NextResponse.json(
                                { error: 'Invalid symbols' },
                                { status: 400 }
                        );
                }

                const promises = symbols.map(symbol =>
                        fetch(`https://scanner.tradingview.com/crypto/scan`, {
                                method: 'POST',
                                headers: {
                                        'Content-Type': 'application/json',
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                                },
                                body: JSON.stringify({
                                        "symbols": {
                                                "tickers": [symbol]
                                        },
                                        "columns": [
                                                "close",
                                                "change",
                                                "change_abs",
                                                "change_percent"
                                        ]
                                })
                        })
                                .then(res => res.json())
                                .then(data => {
                                        const item = data.data[0];
                                        return {
                                                symbol: symbol,
                                                price: item.d[0],
                                                change: item.d[2],
                                                changePercent: item.d[3]
                                        };
                                })
                );

                const results = await Promise.all(promises);

                // Validate and format response
                const formattedData = results
                        .filter((item: any) => item && item.symbol && item.price)
                        .map((item: any) => ({
                                symbol: item.symbol,
                                price: parseFloat(item.price) || 0,
                                change: parseFloat(item.change) || 0,
                                changePercent: parseFloat(item.changePercent) || 0
                        }));

                return NextResponse.json(formattedData, {
                        headers: {
                                'Cache-Control': 'no-store, max-age=0',
                                'X-Content-Type-Options': 'nosniff'
                        }
                });
        } catch (error) {
                console.error('Error in crypto API route:', error);
                return NextResponse.json(
                        { error: 'Failed to fetch cryptocurrency data' },
                        { status: 500 }
                );
        }
} 