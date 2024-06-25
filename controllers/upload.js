const fs = require('fs');
const csv = require('csv-parser');
const Trade = require('../models/Trade');


exports.fileUpload = (req, res) => {
    const fileRes = [];
  
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (data) => fileRes.push(data))
      .on('end', async () => {
        const trades = fileRes.map((row) => {
          const [baseCoin, quoteCoin] = row['Market'].split('/');
          return {
            userId :row['User_ID'],
            utcTime: new Date(row['UTC_Time']),
            operation: row['Operation'],
            market: row['Market'],
            baseCoin,
            quoteCoin,
            amount: parseFloat(row['Buy/Sell Amount']),
            price: parseFloat(row['Price']),
          };
        });
  
        await Trade.insertMany(trades);
        res.send('File uploaded and data stored successfully.');
      });
  }