var TutorialRoom = require('./../models/tutorialRoom');

module.exports = function (app) {

  app.get('/api/tutorialrooms', function(req, res) {
    TutorialRoom.find(function(err, users) {
      if(err)
        res.send(err);
      res.json(users);
    });
  });
	
  app.post('/api/tutorialroom', function(req, res) {
	  //console.log(TutorialRoom);
    TutorialRoom.create({

        //TODO we need user_id and tutorialroom_id => query the db at some point
        roomNumber: req.body.roomNumber,
        date: req.body.date,
        day: req.body.day
    }, function (err, todo) {
        if (err)
          res.send(err);
    });
  });
  
  app.put('/api/tutorialroom', function(req, res) {
	  
	  TutorialRoom.update({_id : req.body.tutRoom_id}, 
						  { $push : {timeSlots : req.body.timeSlot}} ,
	  function(err, todo) {
		if ( err )
			res.send(err);
	  });
  });
  
}
