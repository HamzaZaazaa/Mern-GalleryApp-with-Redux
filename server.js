const express = require('express');
const app = express();
const connectDb = require('./config/connectDb');
const route = require('./routes/routes');

// reading JSON format
app.use(express.json());

// routing after /api
app.use('/api', route)



// Connected database to the server
connectDb()

// app running on port 9000
const port = 9000;
app.listen(port, (err)=> console.log(`app running on port ${port}`))