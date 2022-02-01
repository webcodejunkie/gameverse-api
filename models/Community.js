const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let communitySchema = mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Game: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game', max: 1, min: 1, }],
  Users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', }],
  Admin: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User', max: 3, min: 1, unique: true, }],
  Banner: String,
  Posts: {
    userId: {
      type: String,
    },
    Description: {
      type: String,
      max: 500
    },
    Img: {
      type: String,
    },
    Likes: {
      type: Array,
      default: [],
    }
  }
}, { timestamps: true });

let Community = mongoose.model('Community', communitySchema);

module.exports.Community = Community;