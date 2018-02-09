var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//todo: add validations: unique, required, regex
var UserSchema = new mongoose.Schema({
  _userId: ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  bookings: [{ type : ObjectId }]
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema);
