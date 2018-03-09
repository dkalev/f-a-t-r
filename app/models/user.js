var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var ObjectId = mongoose.Schema.Types.ObjectId;

//todo: add validations: unique, required, regex
var UserSchema = new mongoose.Schema({
  _userId: ObjectId,
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  bookings: [{ type : ObjectId }]
}, {timestamps: true});

//prehook to hash the password before inserting into db
UserSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

//authenticate and login user
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({email: email})
    .exec(function (err, user){
      if(err){
        return callback(err)
      //if there is no such user throw an error
      }else if(!user){
        var err = new Error('Username or password incorrect');
        err.status = 401;
        return callback(err);
      }
      //otherwise compare input password and user password
      bcrypt.compare(password, user.password, function(err, result){
        if (result){
          //return the user data if the passwords match
          return callback(null, user);
        }else{
          return callback();
        }
      })
    });
}

var User = mongoose.model('User', UserSchema);
module.exports = User;
