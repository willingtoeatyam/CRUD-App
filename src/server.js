const express = require('express');
require('dotenv').config();
const { port } = process.env;
const dbSetup = require('./database/setup')
const detailRoutes = require('./routes/detailRoutes')

const app = express();

dbSetup();

app.use(express.json());
app.use(detailRoutes);

app.listen(port || 5000 , ()=> console.log(`Server is listening`));