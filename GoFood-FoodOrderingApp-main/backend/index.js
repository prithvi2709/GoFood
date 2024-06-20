require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const connectDB = require("./mongoDB/db")



app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', "https://chimerical-caramel-bec29d.netlify.app");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})


connectDB();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(express.json())
app.use('/api', require('./Routes/CreateUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})