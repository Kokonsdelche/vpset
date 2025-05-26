import { NextResponse } from 'next/server';

export async function GET() {
        try {
                const symbols = [
                        "BTCUSDT",
                        "ETHUSDT",
                        "BNBUSDT",
                        "SOLUSDT",
                        "SUIUSDT",
                        "LINKUSDT",
                        "DOTUSDT",
                        "XRPUSDT",
                        "DOGEUSDT",
                        "SUSHIUSDT",
                        "ADAUSDT",
                        "ARBUSDT"
                ];

                // Validate symbols
                if (!Array.isArray(symbols) || symbols.length === 0) {
                        return NextResponse.json(
                                { error: 'Invalid symbols' },
                                { status: 400 }
                        );
                }

                const promises = symbols.map(symbol =>
                        fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`, {
                                headers: {
                                        'Accept': 'application/json',
                                        'Cache-Control': 'no-cache'
                                },
                                cache: 'no-store'
                        })
                                .then(res => res.json())
                );

                const results = await Promise.all(promises);

                // Validate and format response
                const formattedData = results
                        .filter((item: any) => item && item.symbol && item.lastPrice)
                        .map((item: any) => ({
                                symbol: `BINANCE:${item.symbol}`,
                                price: parseFloat(item.lastPrice) || 0,
                                change: parseFloat(item.priceChange) || 0,
                                changePercent: parseFloat(item.priceChangePercent) || 0
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