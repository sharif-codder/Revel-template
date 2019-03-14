
jQuery(document).ready(function(){

        //position fixed on scrolling of title image
		var section_pos = $('body').find('.section-pos');
		var	section_fixed_item=$('section').find('.section-inner>.title-image')
		var section_top=[];
		var section_bottom = [];
		var window_width=$(window).width();
	   
        console.log($(window).width(),section_pos,section_top);

	   function scrollmanage(divitem){
	  	for(var i=0; i<section_pos.length; i++)
	  	{
	  		if(divitem >= section_top[i] && divitem <= section_bottom[i])
	  		{
	  			$(section_fixed_item[i]).addClass('title-image-fixed'); 
	  			
	  		}
	        else 
	        {
	  			$(section_fixed_item[i]).removeClass('title-image-fixed');
	        }
	  	}
        
	  }  

	$(window).scroll( function(e) { 
	    var scrolled_val = $(window).scrollTop();

	    for(var i=0; i<section_pos.length; i++)
		    {
		    	section_top[i]=$(section_pos[i]).offset().top;
	            section_bottom[i]=section_top[i] + $(section_pos[i]).innerHeight();
		    }

	    scrollmanage(scrolled_val);

	    if($(section_fixed_item[section_pos.length - 1]).hasClass('title-image-fixed'))
	    {
	    	
	    	if(window_width <= 1239)
		    	{
                 $('.section-wraper-inner').addClass('cnt-scroll');
		    	}
	    	else
		    	{
		    	 $('.section-wraper-inner').removeClass('cnt-scroll');
		        }
	    }
	    else
	    {
	    	$('.title-image-fixed').css({'height':'100vh'});
	    }
	   e.preventDefault(); 	   
	});

	// on click menu-item scroll to item top position
            function scroll_To(fn){
            	var posi;
	            var link = $(fn).attr('href');
	            var test = $(link).offset();

	            if(!test){
	            	location.replace('index.html');
				    posi = $(link).offset().top;
	            }else{
                    posi = $(link).offset().top;
	            }
	            
				console.log(posi);
				$('body,html').animate({scrollTop:posi},1500);
            }
	    $('.navbar-nav li>a').click(function(e){
	    	console.log(this);
	  	    scroll_To(this);
	  	    e.preventDefault();
        });

        $('.mobile-menu li>a').click(function(e){
        	scroll_To(this);
	  	    e.preventDefault(); 
        });

	//mobile menu display
		 $('.navbar-toggle').on('click', function(e) {
                $('body').toggleClass('open-mobile-menu')
                e.preventDefault();
            });

	//light-case
	    $('a[data-rel^=lightcase]').lightcase();

	// ISOTOP
    // Activate isotope in container
        $(".port-folio-items").isotope({
            itemSelector: '.gallery-item ',
            layoutMode: 'fitRows',
        });


        // Add isotope click function
        
        $(".catagory-group li").click(function(){
            $(".catagory-group li").removeClass("is_selected");
            $(this).addClass("is_selected");
     
            var selector = $(this).attr('data-filter');
            $(".port-folio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                },
            });
            return false;
        });
			
});
