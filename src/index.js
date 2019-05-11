const express = require('express');
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const routes1 = require('./routesv1');
PORT = process.env.PORT || 3000;
const app = express();
const morganLog = process.env.NODE_ENV === 'production'? morgan('common'):morgan('dev');
app.use(helmet());
app.use(cors());
app.use(morganLog);
app.use(express.json());
app.use('/v1', routes1);
app.listen(PORT, ()=>{
  console.log(`server listen on port ${PORT}`);
})