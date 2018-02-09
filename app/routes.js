var User = require('./models/user');

module.exports = function (app) {

    app.post('/api/user', function (req, res) {

        // create a new user, information comes from AJAX request from Angular
        User.create({
            username: req.body.username,
            email: req.body.email,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
        });

    });

    // delete an user
    app.delete('/api/todos/:user_id', function (req, res) {
        User.remove({
            _id: req.params.user_id
        }, function (err, todo) {
            if (err)
                res.send(err);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
