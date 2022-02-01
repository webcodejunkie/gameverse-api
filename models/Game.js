const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let gameSchema = mongoose.Schema({
  Title: { type: String, required: true },
  Description: { type: String, required: true },
  Year: { type: Date, required: true },
  Genre: {
    Title: String,
    Description: String,
  },
  Creator: {
    Company: String,
    Bio: String,
  },
  ImagePoster: String,
  Singleplayer: Boolean,
  Multiplayer: Boolean,
});

let Game = mongoose.model('Game', gameSchema);

module.exports.Game = Game;