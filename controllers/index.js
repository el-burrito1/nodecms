'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    // var model = new IndexModel();


    app.get('/', function (req, res) {
    	IndexModel.find({},function(err,docs){
	        console.log(docs)
	        res.render('index', {docs:docs});
    	})
        
    });

};


