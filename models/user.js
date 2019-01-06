var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect ('mongodb://localhost/test', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('conectat la baza de date');
    }
});
var db = mongoose.connection;

var SchemaUser = mongoose.Schema({

    name:   {
        type: String,
        index: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
});

var User = mongoose.model('User', SchemaUser);

module.exports = User;

var newUser = new User({
    name: 'Test',
    username: 'usertest',
    password: 'testpass',
    email: 'george@ceva.ro'
});

newUser.save().then(function(doc) {
    console.log('user-ul a fost salvat in baza de date', doc);
}, function(e) {
    console.log('eroare, nu a putut fi salvat user-ul in baza de date');
    });