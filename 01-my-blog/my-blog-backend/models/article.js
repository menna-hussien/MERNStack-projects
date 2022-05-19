const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'article name must be provided'],
  },
  title: {
    type: String,
    required: [true, 'article title must be provided'],
  },
  likesNum: {
    type: Number,
    required: [true, 'number of likes must be provided'],
    default: 0,
  },
  dislikesNum: {
    type: Number,
    required: [true, 'number of dislikes must be provided'],
    default: 0,
  },
  comments: {
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
  },
});

module.exports = mongoose.model('Article', articleSchema);
