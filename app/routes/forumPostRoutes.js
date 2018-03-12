var ForumPost = require('./../models/forumPost');

module.exports = function (app) {

	app.post('/api/forumpost', function(req,res) {
		ForumPost.create ({
			postedBy : req.body.postedBy,
			postType : req.body.postType,
			modCode : req.body.modCode,
			title : req.body.title,
			comment : req.body.comment,
			parentid : req.body.parentid
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
