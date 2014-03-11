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
    	console.log(req.body.post)
    	var post = new postModel({
    		title:req.body.post
    		// description: req.body.description,
    		// vimeoLink: req.body.video,
    		// tags: req.body.tags,
    		// date: req.body.date
    	});

    	post.save(function(err,doc){
    		res.send(doc)
    		console.log(err)
    	})

    // res.send('hello')

    	// newPost.save(function(){
    	// 	res.redirect('/admin')
    	// })

    })
};