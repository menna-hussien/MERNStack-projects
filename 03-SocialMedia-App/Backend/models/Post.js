const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    content: { type: String, max: 500 },
    privacy: { type: String, enum: ['public', 'only me', 'friendSOnly'] },
    createdAt: { type: Date, min: Date },
    editedAt: { type: Date, min: Date },
    edited: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    likedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    dislikedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    userId: { type: String, required: true },
    photos: { type: Array, default: [] },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', PostSchema);
