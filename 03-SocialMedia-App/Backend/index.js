//imports
const express = require('express');
//initiate the app
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
//errors

//routes
//app.use('/api/articles', articlesRoute);
app.use('/api/users', usersRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postsRoute);

//listen on port
dotenv.config();

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

connectDB(process.env.MONGO_URI);
port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}...`);
});
