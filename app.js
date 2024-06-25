const express = require('express');
const app = express()
const mongoConnect = require('./database/db');
const multer = require('multer')
const balance = require('./routes/balance')
const uploadFile = require('./routes/upload')

mongoConnect()
app.use(express.json());

app.use('/',(req,res)=>{
    res.send(`<div>
        <h3>/balance/json</h3>
        <p>use /balance/json if you want to give timestamp(JSON) as body</p>
        <h3>/balance?timestamp=2022-09-28%2012:00:00</h3>
        <p>use /balance?timestamp= if you want to use query parameter</p>
        <h3>/upload</h3>
        <p>use /upload to upload csv file to the Database by creating a readstream</p>
    </div>`)
})

const upload = multer({ dest: 'uploads/' });
app.use('/upload', uploadFile);

app.use('/balance',balance)




app.listen(7000, () => console.log(`Server started on port 7000`));
