var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//todo: add validations: unique, required, regex
var tutorialRoomSchema = new mongoose.Schema({
  _tutorialRoomId: ObjectId,
  roomNumber: {
    type: Number,
    required: true
  },
  address: {
    street: String,
    building: String,
    floor: String
  },
  availableTables: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('TutorialRoom', tutorialRoomSchema);
