'use strict';

var postModel = require('../models/index');

module.exports = function (app) {

    function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
    };

    app.get('/admin', ensureAuthenticated, function (req, res) {
        res.render('admin')
    });

    app.get('/test', function (req,res){
    	res.send('test')
    });

    app.post('/createPost' , function (req,res){
    	console.log(req.body)
    	console.log(req.body.postTags);
    	var allTags = req.body.postTags.split(',');
    	console.log(allTags);
    	console.log(Date.now())
        console.log(req.body.videoSource)
        var videoGold = (req.body.videoSource).slice(17);
        console.log(videoGold)


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
};

