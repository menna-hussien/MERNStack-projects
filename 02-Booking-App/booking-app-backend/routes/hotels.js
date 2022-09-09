const express = require('express');
const {
  getHotels,
  getHotel,
  createHotel,
  deleteHotel,
  updateHotel,
} = require('../controllers/hotels.js');
const router = express.Router();

router.route('/').get(getHotels).post(createHotel);

module.exports = router;
