$(document).on('ready', function(){
	console.log('test')

	$('#newPost').on('submit', function(e){
		e.preventDefault();


		console.log($(this).serialize());

		$.ajax({
		  type: "POST",
		  url: '/createPost',
		  data: $('#newPost').serialize(),
		  crossDomain: true,
		  dataType:'json',
		  success: function(data){
		  	console.log(data)
		  }	
		});

		$(this)[0].reset()
		

	});



})