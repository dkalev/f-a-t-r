var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//todo: add validations: unique, required, regex
var BookingSchema = new mongoose.Schema({
  _bookingId: ObjectId,
  bookedBy: {
    type: ObjectId,
    required: true
  },
  tutorialRoom: {
    type: ObjectId,
    required: true
  },
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Booking', BookingSchema);
