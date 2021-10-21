const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: false
    },
    owner: {
      telephone: {
        type: Number,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      last_name: {
        type: String,
        required: false
      },
      owner_id:{
        type: String,
        required: false
      },
    },
    breed: {
      type: String,
      required: false
    },
    gender: {
      type: String,
      required: true
    },
    birthday: {
      type: Date,
      required: false
    },
    weight: {
      type: Number,
      required: false
    },
    image: {
      type: Buffer,
      required: false,
    },
    health: {
      castrated: {
        type: Boolean,
        required: false
      },
      vaccines: {
        name:{
          type: String,
          required: true
        },
        date: {
          type: Date,
          required: true,
        },
        nextDate: {
          type: Date,
          required: true,
        },
        next: {
          type: String,
          required: true
        }
      },
      medhistory: {
        type: String,
        required: false
      }
    }
  });
  
  module.exports = mongoose.model("patients", PatientSchema);