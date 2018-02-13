var User = require('./../models/user');

module.exports = function (app) {

  app.get('/api/users', function(req, res) {
    User.find(function(err, users) {
      if(err)
        res.send(err);
      res.json(users);
    });
  });
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

  // delete an user
  app.delete('/api/users/:user_id', function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, todo) {
        if (err)
            res.send(err);
    });

    //update user profile
  });
}
