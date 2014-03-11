$(document).on('ready', function(){
	console.log('test')

	$('#newPost').on('submit', function(e){
		e.preventDefault();

		$.ajax({
		  type: "POST",
		  url: '/createPost',
		  data: {post: $('#test').val()},
		  crossDomain: true,
		  dataType:'json',
		  success: function(data){
		  	console.log(data)
		  }	
		});

		console.log($('#test').val())

		// $.ajax({
		// 	type:'GET',
		// 	url: '/test',
		// 	success: function(data){
		// 		console.log(data)
		// 	}
		// })

	})



})