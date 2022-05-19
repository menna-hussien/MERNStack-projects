require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const articlesRoute = require('./routes/articles');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/error-handler');

//middleware layers
app.use(express.json());

//routes
app.use('/api/articles', articlesRoute);

//error handling
app.use(notFound);
app.use(errorHandler);

//db and server connection..simply we have to wait for db connection first before listening in the server port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
