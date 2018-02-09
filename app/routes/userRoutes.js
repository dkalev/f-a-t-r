var User = require('./../models/user');

module.exports = function (app) {
  app.post('/api/user', function(req, res) {
    User.create({

        //TODO we need user_id and tutorialroom_id => query the db at some point
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }, function (err, todo) {
        if (err)
          res.send(err);
    });
  });
}
