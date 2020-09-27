const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');
const connectDB = require('./DB.js');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
//Connect DB
connectDB();
app.use('/posts', postRoute);

app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});