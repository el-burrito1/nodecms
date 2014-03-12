'use strict';

var postModel = require('../models/index');

module.exports = function (app) {
    app.get('/admin', function (req, res) {
        res.render('admin')
    });

    app.get('/test', function (req,res){
    	res.send('test')
    })

    app.post('/createPost' , function (req,res){
    	console.log(req.body)
    	console.log(req.body.postTags);
    	var allTags = req.body.postTags.split(',');
    	console.log(allTags);
    	console.log(Date.now())


    	var post = new postModel({
    		title:req.body.title,
    		description: req.body.postDescription,
    		vimeoLink: req.body.postVideo,
    		tags: allTags,
    		date: Date.now()
    	});

    	post.save(function(err,doc){
    		res.send(doc)
    		console.log(err)
    	});

    });
};