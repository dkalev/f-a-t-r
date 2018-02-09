var Booking = require('./../models/booking');

module.exports = function (app) {
  app.post('/api/booking', function (req, res) {

    // create a new booking, information comes from AJAX request from Angular
    Booking.create({

        //TODO we need user_id and tutorialroom_id => query the db at some point
        bookedBy: req.body.user_id,
        tutorialRoom: req.body.tutorial_room_id,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    }, function (err, todo) {
        if (err)
          res.send(err);
    });

  });

  // delete a booking
  app.delete('/api/bookings/:booking_id', function (req, res) {
    Booking.remove({
        _id: req.params.booking_id
    }, function (err, todo) {
        if (err)
            res.send(err);
    });

    //return all bookings
    app.get('/api/bookings', function (req, res) {
      Booking.find(function (err, bookings) {

        if (err)
          res.send(err);

        res.json(bookings); // return all bookings in JSON format
      });
    });
  });
};
