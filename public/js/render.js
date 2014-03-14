$(document).on('ready',function(){
	console.log('test')

	$('#checkSurf').on('submit',function(e){
		e.preventDefault();

		$('#reportField').empty();
		$('#reportField').html('test');

		
	})

  var container = $('.masonry').get(0);
  var msnry = new Masonry( container, {
    columnWidth: 200
  });

});
	

