require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/article');
const jsonArticles = require('./article-content.js');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonArticles);
    console.log('success');
    process.exit(0); //0 means successful
  } catch (error) {
    console.log(error);
    process.exit(1); //1 means there is an error
  }
};

start();
