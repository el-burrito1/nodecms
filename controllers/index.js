'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    app.get('/', function (req, res) {
    	IndexModel.find({},function(err,docs){
	        res.render('index', {docs:docs});
    	})
        
    });

};


