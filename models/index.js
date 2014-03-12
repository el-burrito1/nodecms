'use strict';

var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
	title: String,
	description: String,
	vimeoLink: String,
	date: String,
	tags: [String]
})

var postModel = module.exports = mongoose.model('post' , postSchema)


