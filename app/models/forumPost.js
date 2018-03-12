var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//todo: add validations: unique, required, regex
var ForumPostSchema = new mongoose.Schema({
  _forumId: ObjectId,
  postedBy : {
	type : String,
	required : true
  },
  postType : {
	type : String,
	enum : ['Reply','Main']
  },
  modCode : {
	type : String,
	required : true
  },
  title : {
	type : String,
	required : true
  },
  comment : {
	type : String,
	required : true
  },
  parentid : {
	  type : String
  }
}, {timestamps : true});

module.exports = mongoose.model('ForumPost', ForumPostSchema);