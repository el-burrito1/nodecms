'use strict';


var IndexModel = require('../models/index');
var request = require('request')


module.exports = function (app) {

    app.get('/', function (req, res) {
    	IndexModel.find({}).sort('-_id').exec(function(err,docs){
	        res.render('index', {docs:docs});
    	})
        
    });

    app.post('/findSurf' , function(req,res){
    	var beachSilver = req.body.beach;
    	var beachGold = beachSilver.replace(/\s+/g, '');
    	request('http://api.spitcast.com/api/spot-forecast/search?spot_name=' + beachGold , function(error,response,body){
    		if(response.statusCode == 200){
    		       res.send(body)
    		    }
    	})
    })

    app.post('/detailReport' , function(req,res){
    	console.log(req.body.spot_id);
    	request('http://api.spitcast.com/api/spot/forecast/' + req.body.spot_id , function(error,response,body){
    		if(response.statusCode == 200){
    			res.send(body)
    		}
    	})
    })

};


