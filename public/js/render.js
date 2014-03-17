$(document).on('ready',function(){

  $('#surfForm').on('submit' , function(e){
  	e.preventDefault();
  	console.log('test');

	  	$.ajax({
	  		type:'GET',
	  		url:'/findSurf',
	  		success: function(data){
	  			console.log(data)
	  		}
	  	})

  	})

  var container = $('.masonry').get(0);
  var msnry = new Masonry( container, {
    columnWidth: 200
  });

});
	

