var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


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
module.exports = mongoose.model('TimeSlot', timeSlotSchema);
