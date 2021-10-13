const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    last_name:{
      type: String,
      required: true
    },
    email: {
      type: String,
      required: false
    },
    telephone1: {
      type: Number,
      required: true
    },
    telephone2: {
      type: Number,
      required: false
    },
    address: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    }
  });
  
  module.exports = mongoose.model("clients", ClientSchema);