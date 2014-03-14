'use strict';

var passport = require('passport')

module.exports = function (app) {

	app.get('/login' , function (req,res){
		res.render('authenticate')
	});

	app.post('/login',
  	passport.authenticate('local', { successRedirect: '/admin',
       failureRedirect: '/login',
       failureFlash: true })
	);
};
