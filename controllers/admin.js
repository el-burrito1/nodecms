'use strict';

var postModel = require('../models/index');
var User = mongoose.model('User', userSchema);

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
            imageSource: req.body.imageSource
    	});

    	post.save(function(err,doc){
    		res.send(doc)
    		console.log(err)
    	});

    });

    app.post('/newAdmin' , function (req,res){
        var user = new User({
            username: req.body.username,
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
};

