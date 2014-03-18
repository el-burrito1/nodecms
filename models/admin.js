'use strict';

var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
});

// Bcrypt middleware
// userSchema.pre('save', function(next) {
//   var user = this;

//   if(!user.isModified('password')) return next();

//   bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//     if(err) return next(err);

//     bcrypt.hash(user.password, salt, function(err, hash) {
//       if(err) return next(err);
//       user.password = hash;
//       next();
//     });
//   });
// });

// Password verification
// userSchema.methods.comparePassword = function(candidatePassword, cb) {
//   bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//     if(err) return cb(err);
//     cb(null, isMatch);
//   });
// };

var user = new User({ username: 'bob', email: 'bob@example.com', password: 'secret' });
user.save(function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('user: ' + user.username + " saved.");
  }
});


// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });




// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//     if (err) { return done(err); }
//     if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
//     user.comparePassword(password, function(err, isMatch) {
//       if (err) return done(err);
//       if(isMatch) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: 'Invalid password' });
//       }
//     });
//   });
//   }
// ));


// app.configure = function configure(nconf, next) {
//     // Async method run on startup.
//     next(null);
// };


// app.requestStart = function requestStart(server) {
//     // Run before most express middleware has been registered.
// };


// app.requestBeforeRoute = function requestBeforeRoute(server) {
//     // Run before any routes have been added.
//     server.use(passport.initialize());
//     server.use(passport.session());
//     // server.use(flash());
//     // server.use(auth.injectUser);
// };

// app.requestAfterRoute = function requestAfterRoute(server) {
//     // Run after all routes have been added.
// };






var User = module.exports = mongoose.model('User', userSchema);
