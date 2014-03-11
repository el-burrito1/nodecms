'use strict';

var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
	title: String,
	description: String,
	vimeoLink: String,
	tags: String,
	date: String
})

var postModel = module.exports = mongoose.model('post' , postSchema)


// module.exports = function IndexModel() {
//     return {
//         name: 'nodecms'
//     };
// };