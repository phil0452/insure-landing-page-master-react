$(document).ready(function(){
	$('#hambuger').click(function(){		
		$('#mobile_nav').slideDown('slow');		
		$('#hambuger').fadeOut('fast', function(){
			$('#close').fadeIn('fast');
		});
		
	});
	
	$('#close').click(function(){		
		$('#mobile_nav').slideUp('slow');	
		$('#close').fadeOut('fast', function(){		
			$('#hambuger').fadeIn('fast');			
		});
	});
});