const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Hotel name must be provided'],
  },
  type: {
    type: String,
    required: [true, 'hotel type must be provided'],
  },
  city: {
    type: String,
    required: [true, 'city must be provided'],
  },
  address: {
    type: String,
    required: [true, 'address must be provided'],
  },
  distance: {
    type: String,
    required: [true, 'distance must be provided'],
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: [true, 'desc must be provided'],
  },
  rating: {
    type: Number,
    required: [false, 'rating must be provided'],
    default: 0,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String], // as it will contain room ids
  },

  cheapestPrice: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  /* comments: {
    type: [{ type: Object }],
    default: [],
  },
  postedAt: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
    enum: {
      values: [
        'react',
        'node.js',
        'advanced-react',
        'advanced-node',
        'resumes',
      ],
      message: '{VALUE} is not supported',
    },
  },
  content: {
    type: [String],
    required: [true, 'content is required '],
    default: [],
  },*/
});

module.exports = mongoose.model('Hotel', HotelSchema);
