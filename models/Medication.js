const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MedicationSchema = new Schema({
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "appointment",
  },
  medicationName: {
    type: String
  },
  medicationArea: {
    type: String
  },
  medicationType: {
    type: String
  },
  refillDate: {
    type: Date
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('medication', MedicationSchema);