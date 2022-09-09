const Hotel = require('../models/Hotel');
const getHotels = async (req, res) => {
  try {
    res.status(200).send('get all hotels');
  } catch (error) {
    res.status(500).json(err);
  }
};

const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    //or await Hotel.create(req.body)
    res.status(200).json(savedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateHotel = async (req, res) => {
  res.status(200).send('get all hotels');
};

const getHotel = async (req, res) => {
  res.status(200).send('get all hotels');
};

const deleteHotel = async (req, res) => {
  res.status(200).send('get all hotels');
};

module.exports = { getHotels, getHotel, createHotel, updateHotel, deleteHotel };
