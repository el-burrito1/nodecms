$(document).on('ready', function(){
	console.log('test')


	$('#feature').on('change',function(){
		$('#videoCode').css('opacity' , 1);
		$('#imageCode').css('opacity' , .3)
	})

	$('#product').on('change' , function(){
		$('#imageCode').css('opacity' , 1)
		$('#videoCode').css('opacity' , .3)
	})

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