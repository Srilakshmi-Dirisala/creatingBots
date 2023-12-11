// // const express = require('express');
// // const ccxt = require('ccxt');

// // const app = express();
// // const port = 3000;

// // // Connect to Binance exchange using your API keys
// // const exchange = new ccxt.binance({
// //     apiKey: 'FPskXcjoYTW9eNwvUYFPX0CqVWqJFSgn4EnbLZMH9Qw0pnRWSorDOe1OjKPiUFN6',
// //     secret: 'DyExFYLxJASkKQZof90aB44PATFnXBO0sTnlH2sndtIgp4BqNFjrSOfV3N9z2QlC',
// // });

// // app.use(express.json());

// // app.post('/tradingview-webhook', async (req, res) => {
// //     const alert = req.body; // Assuming TradingView sends the necessary data in the request body

// //     // Check for buy/sell signals from TradingView alerts
// //     if (alert.strategy === 'YourStrategy' && alert.action === 'buy') {
// //         // Place a buy order when TradingView sends a buy signal
// //         const symbol = 'BTC/USDT'; // Replace with your desired trading pair
// //         const order = await exchange.createMarketBuyOrder(symbol, 0.001); // Example: Buy 0.001 BTC
// //         console.log('Buy order placed:', order);
// //     } else if (alert.strategy === 'YourStrategy' && alert.action === 'sell') {
// //         // Place a sell order when TradingView sends a sell signal
// //         const symbol = 'BTC/USDT'; // Replace with your desired trading pair
// //         const order = await exchange.createMarketSellOrder(symbol, 0.001); // Example: Sell 0.001 BTC
// //         console.log('Sell order placed:', order);
// //     }

// //     res.status(200).send('Received TradingView alert');
// // });

// // app.listen(port, () => {
// //     console.log(`Server running on port http://localhost:${port}`);
// // });






// const express = require('express');
// const ccxt = require('ccxt');

// const app = express();
// const port = 3000;

// app.use(express.json());

// // Initialize the Binance exchange without API keys for timestamp retrieval
// const binance = new ccxt.binance();

// app.post('/tradingview-webhook', async (req, res) => {
//     try {
//         // Fetch Binance server time
//         const serverTime = await binance.publicGetTime();
//         const timestamp = parseInt(serverTime.serverTime)
//   console.log("timestamp",timestamp);
  
//         // Connect to Binance exchange using your API keys
//         const exchange = new ccxt.binance({
//             apiKey: 'FPskXcjoYTW9eNwvUYFPX0CqVWqJFSgn4EnbLZMH9Qw0pnRWSorDOe1OjKPiUFN6',
//     secret: 'DyExFYLxJASkKQZof90aB44PATFnXBO0sTnlH2sndtIgp4BqNFjrSOfV3N9z2QlC',
//             options: {
//                 adjustForTimeDifference: true, // Adjust timestamp automatically
//                 timestamp, // Synchronize the timestamp
//             },
//         });

//         const alert = req.body; // Assuming TradingView sends the necessary data in the request body

//         // Check for buy/sell signals from TradingView alerts
//         if (alert.strategy === 'YourStrategy' && alert.action === 'buy') {
//             // Place a buy order when TradingView sends a buy signal
//             const symbol = 'BTC/USDT'; // Replace with your desired trading pair
//             const order = await exchange.createMarketBuyOrder(symbol, 0.001); // Example: Buy 0.001 BTC
//             console.log('Buy order placed:', order);
//         } else if (alert.strategy === 'YourStrategy' && alert.action === 'sell') {
//             // Place a sell order when TradingView sends a sell signal
//             const symbol = 'BTC/USDT'; // Replace with your desired trading pair
//             const order = await exchange.createMarketSellOrder(symbol, 0.001); // Example: Sell 0.001 BTC
//             console.log('Sell order placed:', order);
//         }

//         res.status(200).send('Received TradingView alert');
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server running on port http://localhost:${port}`);
// });
