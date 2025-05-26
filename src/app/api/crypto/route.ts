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
                                        'User-Agent': 'Mozilla/5.0',
                                        'Accept': 'application/json',
                                        'Cache-Control': 'no-cache'
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
                                }),
                                cache: 'no-store'
                        })
                                .then(res => res.json())
                );

                const results = await Promise.all(promises);

                // Validate and format response
                const formattedData = results
                        .filter((item: any) => item && item.data && item.data.length > 0)
                        .map((item: any) => {
                                const data = item.data[0];
                                return {
                                        symbol: symbols[results.indexOf(item)],
                                        price: parseFloat(data.d[0]) || 0,
                                        change: parseFloat(data.d[2]) || 0,
                                        changePercent: parseFloat(data.d[3]) || 0
                                };
                        });

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