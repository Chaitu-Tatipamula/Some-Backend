const mongoose = require('mongoose');
require('dotenv').config()

const mongoConnect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: false,
            useUnifiedTopology: false,
        });
        console.log('Database connected');
      } catch (err) {
            console.error(err.message);
            process.exit(1);
      }
}

module.exports = mongoConnect;
