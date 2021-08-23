const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    telephone: {
      type: Number,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    role: {
      type: String,
      required: false
    }
  });
  
  module.exports = mongoose.model("users", UserSchema);