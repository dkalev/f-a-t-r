var ForumPost = require('./../models/forumPost');

module.exports = function (app) {

	app.post('/api/forumpost', function(req,res) {
		console.log(req.body.postedBy);
		console.log(req.body.postType);
		console.log(req.body.modCode);
		console.log(req.body.title);
		console.log(req.body.comment);
		ForumPost.create ({
			postedBy : req.body.postedBy,
			postType : req.body.postType,
			modCode : req.body.modCode,
			title : req.body.title,
			comment : req.body.comment,
		}, function (err, todo) {
        if (err)
          res.send(err);
		});	 
	});
	
	app.get('/api/forumposts', function(req, res) {
		ForumPost.find(function(err, users) {
			if(err)
				res.send(err);
			res.json(users);
    });
  });
}
