module.exports = function(app){

  require('./bookingRoutes')(app);
  require('./tutorialRoomRoutes')(app);
  require('./userRoutes')(app);
  require('./timeSlotRoutes')(app);

  app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });
}
