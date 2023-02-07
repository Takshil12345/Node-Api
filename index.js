const express = require("express");
// const mongoose = require("mongoose");
// const users = require('./MOCK_DATA.json')

const  connectMongoDb  = require('./connections');
const  bakwas  = require('./middlewares');
const userRouter  = require('./routes/user');


const app = express();
const PORT = 8000;

// connection
connectMongoDb('mongodb://127.0.0.1:27017/Node-App').then(() => { console.log("MongoDb successfully connected") }).catch((err) => { console.log(err) });


// Middleware
app.use(express.urlencoded({ extended: false }));

app.use(bakwas("log.txt"));

// Routes:
app.use('/api/users', userRouter);

app.listen(PORT, () => { console.log("Server listening on port " + PORT) });