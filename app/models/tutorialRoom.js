
require('./../models/timeSlot');
var timeSlotSchema = require('mongoose').model('TimeSlot').schema;
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//todo: add validations: unique, required, regex
/*var tutorialRoomSchema = new mongoose.Schema({
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

var timeSlotSchema = new mongoose.Schema({
	_timeid : ObjectId,
	start_time : {
		type : Number,
		required : true
	},
	end_time : { 
		type : Number,
		required : true
	},
	vacancy : {
		type : Number,
		required : true
	}
});
module.exports = mongoose.model('TimeSlot', timeSlotSchema);*/

var tutorialRoomSchema = new mongoose.Schema({
	_tutid : ObjectId,
	roomNumber : {
		type : Number,
		required : true
	},
	date : {
		type : Number,
		required : true
	},
	day : {
		type : String,
		enum : ['Monday','Tuesday','Wednesday','Thursday','Friday']
	},
	timeSlots : [timeSlotSchema]
},{timestamps:true});

module.exports = mongoose.model('TutorialRoom', tutorialRoomSchema);
