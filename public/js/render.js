$(document).on('ready',function(){

  $('#surfForm').on('submit' , function(e){
  	e.preventDefault();
  	console.log('test');

  	$.ajax({
  		type: 'POST',
  		url: '/findSurf',
  		data: $('#surfForm').serialize(),
  		crossDomain: true,
  		success: function(data){
  			var result = JSON.parse(data);
  			var beachName = $('#beachSearch').val()
  			var highlightBeach = [];
  			highlightBeach = result.filter(function(i){
  				return (i.spot_name.toLowerCase()) == ($('#beachSearch').val()).toLowerCase()
  			});

  			// for(var i = 0 ; i <result.length ; i++){
	  		// 		console.log(result[i].spot_name)
	  		// 	};

	  		var beachName = highlightBeach[0].spot_name
  			var minWave = highlightBeach[0].average.size_min;
  			var maxWave = highlightBeach[0].average.size_max;


	  			$.ajax({
	  				type: 'POST',
	  				url: '/detailReport',
	  				data: highlightBeach[0],
	  				crossDomain: true,
	  				success: function(data){
	  					var test = JSON.parse(data);
	  					measure = test.length;
	  					var conditions = (test[measure-1].shape_full)

	  				$('.surfReport').html('The current surf at ' + beachName + ' is ' + minWave.toFixed(2) + '-' + maxWave.toFixed(2) + ' feet. Conditions are ' + conditions + '.')

	  				}
	  			})
  		}
  	  })
	});

  var container = $('.masonry').get(0);
  var msnry = new Masonry( container, {
    columnWidth: 200
  });

});
	

