const express=require('express')

const app = express()
const db = require('./db');
const person = require('./models/person');
const bodyParser = require('body-parser');
app.use(bodyParser.json());//store data in req.body
//menu card server or waiter can  only perform what is included in this menu card 
//user can say '/' and server will response welcome to our hotel 
app.get('/', (req, res) => {
  res.send('Welcome to our hotel')
})


   //import router files
   const personRoutes=require('./routes/personRoutes');
   app.use('/person',personRoutes);
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})