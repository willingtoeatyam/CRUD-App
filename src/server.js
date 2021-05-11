const express = require('express');
require('dotenv').config();
const { PORT } = process.env;
const dbSetup = require('./database/setup')
const detailRoutes = require('./routes/detailRoutes')

const app = express();

dbSetup();

app.use(express.json());
app.use(detailRoutes);

app.listen(PORT || 5000 , ()=> console.log(`Server is listening`));