const mongoose = require('mongoose');
const mongoURL='mongodb://localhost:27017/hotels';

mongoose.connect(mongoURL);
const db = mongoose.connection;
db.on('connected',()=>
{
    console.log('connected to mongodb');
});

db.on('error',()=>
{
    console.log('MongoDB connection error');
});

db.on('disconnected',()=>
{
    console.log('MongoDB disconnected');
});

//export database connection
module.exports = db;