const express = require('express');
const app = express()
const mongoConnect = require('./database/db');
const multer = require('multer')
const balance = require('./routes/balance')
const uploadFile = require('./routes/upload')

mongoConnect()
app.use(express.json());

const upload = multer({ dest: 'uploads/' });
app.use('/upload', uploadFile);

app.use('/balance',balance)




app.listen(7000, () => console.log(`Server started on port 7000`));
