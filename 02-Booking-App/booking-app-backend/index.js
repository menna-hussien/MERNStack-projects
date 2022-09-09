//imports
require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const hotelsRoute = require('./routes/hotels');
const roomsRoute = require('./routes/rooms');

//initiate the app
const app = express();
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Custom API',
      description: 'Booking API',
      contact: { name: 'Menna development' },
    },
    servers: ['http://localhost:5000'],
  },
  apis: ['index.js'],
};
var options = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: 'http://localhost:5000/api/hotels',
        name: 'Spec1',
      },
    ],
  },
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * paths:
 *  /api/hotels:
 *    get:
 *      description: use to list all the hotels
 *      responses:
 *        '200':
 *            description: A successful response
 *    post:
 *      summary: get a certain hotel by id
 *      consumes: application/json
 *      parameters:
 *        -
 *          description: create a new hotel
 *          in: body
 *          name: Hotel
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: String
 *      responses:
 *       '200':
 *         description: A successful response
 *
 *  /api/hotel/{id}:
 *    get:
 *      summary: get a certain hotel by id
 *      parameters:
 *        -
 *          description: id of hotel
 *          required: true
 *          in : path
 *          name: id
 *          schema:
 *            type:integer
 *        -
 *          description: id of hotel
 *          required: true
 *          in : query
 *          name: limit
 *          schema:
 *            type:integer
 *      responses:
 *        '200':
 *          description: a new hotel is created
 */

//middleware
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

//errors

//routes

//server starting
port = process.env.PORT || 5000;

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
