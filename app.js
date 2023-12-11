// const ccxt = require('ccxt');

// (async () => {
//     // Connect to the exchange using your API keys
//     const exchange = new ccxt.binance({
//         apiKey: 'FPskXcjoYTW9eNwvUYFPX0CqVWqJFSgn4EnbLZMH9Qw0pnRWSorDOe1OjKPiUFN6',
//         secret: 'DyExFYLxJASkKQZof90aB44PATFnXBO0sTnlH2sndtIgp4BqNFjrSOfV3N9z2QlC',
//     });

//     // Define the symbol (token pair) you want to trade
//     const symbol = 'BTC/USDT';

//     try {
//         // Fetch Binance server time
//         const {serverTime} = await exchange.publicGetTime();
//         console.log("serverTime",serverTime);
//         const serverTimestamp = serverTime*1000;
//          console.log("serverTimestamp",serverTimestamp);
//         // Fetch historical market data with the adjusted timestamp
//         const ohlcv = await exchange.fetchOHLCV(symbol, '1d', undefined, { limit: 1000,since: serverTimestamp});

//         // Calculate moving averages (MA)
//         const calculateMovingAverage = (data, window) => {
//             const closes = data.slice(-window).map(entry => entry[4]); // Closing prices from OHLCV data
//             return closes.reduce((sum, close) => sum + close, 0) / window;
//         };

//         // Example: Calculate 20-day and 50-day moving averages
//         const ma20 = calculateMovingAverage(ohlcv, 20);
//         const ma50 = calculateMovingAverage(ohlcv, 50);

//         // Buy or Sell decision logic based on MA crossover
//         if (ma20 > ma50) {
//             // Place a buy order when the 20-day MA crosses above the 50-day MA
//             const order = await exchange.createMarketBuyOrder(symbol, 0.001); // Example: Buy 0.001 BTC
//             console.log('Buy order placed:', order);
//         } else if (ma20 < ma50) {
//             // Place a sell order when the 20-day MA crosses below the 50-day MA
//             const order = await exchange.createMarketSellOrder(symbol, 0.001); // Example: Sell 0.001 BTC
//             console.log('Sell order placed:', order);
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// })();
