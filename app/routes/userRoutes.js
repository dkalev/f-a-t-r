var User = require('./../models/user');

module.exports = function (app) {

  app.get('/api/users', function(req, res) {
    User.find(function(err, users) {
      if(err)
        res.send(err);
      res.json(users);
    });
  });
  
  
   app.put('/api/user', function(req,res) {
	  console.log(req.body[1]);
	  User.update({_id : req.body[0]},
		  {$push : {bookings : req.body[1]},
		  },
	  function(err, todo) {
		 if ( err )
			res.send(err);
	  });
  });
  
  
  app.put('/api/userid', function(req,res,next) {
	  console.log(req.body[1]);
	  User.update({_id : req.body[0]},
		  {$pull : {bookings : req.body[1]},
		  },
	  function(err, todo) {
		 if ( err )
			res.send(err);
	  });
  });
	

  app.post('/api/user', function(req, res) {

    //if a new registration
    if (req.body.username &&
      req.body.email &&
      req.body.password) {
        var userData = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        }

      User.create(userData , function (err, user) {
          if (err){
            res.send(err);
          }else{
            //create a session with the newly created user
            req.session.userId = user._userId;
            res.redirect('/profile');
          }
      });

    //if an user is logging in
    }else if (req.body.logemail && req.body.logpassword) {
        User.authenticate(req.body.logemail, req.body.logpassword, function (error, user){
          if (error || !user) {
            next(new Error('Wrong email or password'));
          }else{
            req.session.userId = user._userId;
            res.redirect('profile');
          }
        });
      //otherwise some of the form fields must be missing
      } else {
        return next(new Error('Please fill all fields.'))
      }
  });

  app.get('api/profile', function(req, res){
    User.findById(req.session.userId)
      .exec(function (err, user){
        if(err){
          next(err);
        }else{
          if (user != null) {
            //show content available only to registered users
            res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
          }
        }
      })
  });

  //upon logout destroy user session
  app.get('api/logout', function(req, res){
    if(req.session){
      req.session.destroy(function (err) {
        if(err)
          next(err);
        res.redirect('/');
      })
    }
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
