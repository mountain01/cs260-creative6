const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, unique: true },
  color: String,
  email: String,
  hashed_password: String
});

module.exports = mongoose.model('User', User);
