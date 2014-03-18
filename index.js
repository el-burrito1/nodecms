'use strict';

var request = require('request');

var kraken = require('kraken-js'),
    app = {};

var mongoose = require('mongoose');

var passport = require('passport');

if(global.process.env.MONGOHQ_URL){
  mongoose.connect(global.process.env.MONGOHQ_URL);
}else{
  mongoose.connect('mongodb://localhost/posts');
}


app.configure = function configure(nconf, next) {
    // Async method run on startup.
    next(null);
};


app.requestStart = function requestStart(server) {
    // Run before most express middleware has been registered.
};


app.requestBeforeRoute = function requestBeforeRoute(server) {
    // Run before any routes have been added.
    server.use(passport.initialize());
    server.use(passport.session());
    // server.use(flash());
    // server.use(auth.injectUser);
};

app.requestAfterRoute = function requestAfterRoute(server) {
    // Run after all routes have been added.
};


if (require.main === module) {
    kraken.create(app).listen(function (err) {
        if (err) {
            console.error(err.stack);
        }
    });
}


module.exports = app;
