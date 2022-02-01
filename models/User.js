const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
  Birthday: Date,
  Avatar: {
    String,
    default: '',
  },
  Friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  FavoriteGames: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
},
  { timestamps: true }
);

userSchema.statics.hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.Password);
};

let User = mongoose.model('User', userSchema);

module.exports.User = User;