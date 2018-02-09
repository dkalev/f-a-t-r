var TutorialRoom = require('./../models/tutorialRoom');

module.exports = function (app) {
  app.post('/api/tutorialRooms', function(req, res) {
    TutorialRoom.find(function (err, tutorialRooms) {

      if (err)
        res.send(err);

      res.json(tutorialRooms); // return all tutorialRooms in JSON format
    });

  });
}
