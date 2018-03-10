var TimeSlot = require('./../models/timeSlot');

module.exports = function (app) {

	app.post('/api/timeslot', function(req,res) {
		TimeSlot.create ({
			start_time : req.body.start_time,
			end_time : req.body.end_time,
			vacancy : req.body.vacancy
		}, function (err, todo) {
        if (err)
          res.send(err);
		});	 
	});
	
	app.get('/api/timeslots', function(req, res) {
		TimeSlot.find(function(err, users) {
			if(err)
				res.send(err);
			res.json(users);
    });
  });
}
