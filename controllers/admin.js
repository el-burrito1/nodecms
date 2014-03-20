'use strict';

var mongoose = require('mongoose');
var postModel = require('../models/index');
var userModel = require('../models/admin')

module.exports = function (app) {

    function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
    };

    app.get('/admin', ensureAuthenticated, function (req, res) {
        res.render('admin')
    });


    app.post('/createPost' , function (req,res){
    	var allTags = req.body.postTags.split(',');
        var videoGold = (req.body.videoSource).slice(17);

    	var post = new postModel({
    		title:req.body.title,
    		description: req.body.postDescription,
    		videoSource: videoGold,
    		tags: allTags,
    		date: Date.now(),
            feature: req.body.button === 'feature',
            imageSource: req.body.imageSource,
            blogURL: req.body.blogURL
    	});

    	post.save(function(err,doc){
    		res.send(doc)
    		console.log(err)
    	});

    });

    app.post('/newAdmin' , function (req,res){
        var user = new userModel({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        user.save(function(err){
            if(err){
                console.log(err);
            } else {
                console.log('user: ' + user.username + " saved.")
            }
        });
    });

    app.get('/logout' , function(req, res){
        req.logout();
        res.redirect('/');
    })
};

