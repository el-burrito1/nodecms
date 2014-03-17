'use strict';


var IndexModel = require('../models/index');
var request = require('request')


module.exports = function (app) {

    app.get('/', function (req, res) {
    	IndexModel.find({},function(err,docs){
	        res.render('index', {docs:docs});
    	})
        
    });

    app.get('/findSurf' , function(req,res){
    	request('http://api.spitcast.com/api/spot/forecast/205/', function(error,response,body){
    		if(response.statusCode == 200){
    		       res.send(body)
    		    }
    	})
    })

};


