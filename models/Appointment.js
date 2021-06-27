const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  profile: {
    type: Schema.Types.ObjectId
  },
  appointmentType: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date
  },
  appointmentTime: {
    type: Date
  },
  location: {
    type: String
  },
  doctor: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('appointment', AppointmentSchema);