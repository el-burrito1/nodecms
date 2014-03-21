$(document).on('ready',function(){

  $('#surfForm').on('submit' , function(e){
  	e.preventDefault();
  	
  	$('.surfReport').empty()

  	$('#coolIcon').addClass("fa fa-spinner fa-spin")

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

  			if(highlightBeach[0] == undefined){
  				$('.surfReport').html('Sorry we do not have that beach in our database. Click <a id="viewBeaches">here</a> to view all available beaches')
  				$('#coolIcon').removeClass("fa fa-spinner fa-spin")	
  				$('#viewBeaches').on('click',function(){
  					$('#myModal').modal({show:true})
  				})
  			} else {

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
	  					console.log(test)
	  					measure = test.length;
	  					var conditions = (test[measure-1].shape_full)
	  					$('.surfReport').html('The current surf at ' + beachName + ' is ' + minWave.toFixed(2) + '-' + maxWave.toFixed(2) + ' feet. Conditions are ' + conditions + '.')
  						$('#coolIcon').removeClass("fa fa-spinner fa-spin")	
  					}
	  			})
	  		} /////keep eye on this one //////
  		}
  	  })
	});

  var container = $('.masonry').get(0);
  var msnry = new Masonry( container, {
    columnWidth: 200
  });

  var trackOutboundLink = function(url) {
     ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
       function () {
       document.location = url;
       }
     });
  };

  $('.outboundLink').on('click' , function(){
    trackOutboundLink(this.href);
    return false;
  })



});
	

