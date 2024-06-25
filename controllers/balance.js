const Trade = require('../models/Trade')


exports.getBalance = async (req, res) => {
  const { timestamp } = req.query;
    if (!timestamp) {
      return res.status(400).json({ error: 'Timestamp query parameter is required' });
    }
    
    const date = new Date(timestamp);
    try {
      const trades = await Trade.find({ utcTime: { $lt: date } });
      const balance = trades.reduce((acc, trade) => {
          const { baseCoin, operation, amount } = trade;
       
          if(!acc[baseCoin]) acc[baseCoin] = 0;
            if(operation === 'Buy'){
                acc[baseCoin] += amount;
            }
            else if(operation === 'Sell'){
                acc[baseCoin] -= amount;
            }

            return acc;

      }, {});
  
      res.json(balance);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }

exports.getBalancefromJSON = async (req, res) => {
  const { timestamp } = req.body;
    if (!timestamp) {
      return res.status(400).json({ error: 'Timestamp query parameter is required' });
    }
    
    const date = new Date(timestamp);
    try {
      const trades = await Trade.find({ utcTime: { $lt: date } });
      const balance = trades.reduce((acc, trade) => {
          const { baseCoin, operation, amount } = trade;
       
          if(!acc[baseCoin]) acc[baseCoin] = 0;
            if(operation === 'Buy'){
                acc[baseCoin] += amount;
            }
            else if(operation === 'Sell'){
                acc[baseCoin] -= amount;
            }

            return acc;

      }, {});
  
      res.json(balance);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  }