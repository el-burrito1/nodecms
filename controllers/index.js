'use strict';


var IndexModel = require('../models/index');
var request = require('request')


module.exports = function (app) {

    app.get('/', function (req, res) {
    	IndexModel.find({},function(err,docs){
	        res.render('index', {docs:docs});
    	})
        
    });

    app.post('/findSurf' , function(req,res){
    	console.log(req.body)
    	console.log(req.body.beach)
    	var beachSilver = req.body.beach;
    	var beachGold = beachSilver.replace(/\s+/g, '');
    	console.log(beachGold)
    	request('http://api.spitcast.com/api/spot-forecast/search?spot_name=' + beachGold , function(error,response,body){
    		if(response.statusCode == 200){
    			   console.log(body)
    		       res.send(body)
    		    }
    	})
    })

};


