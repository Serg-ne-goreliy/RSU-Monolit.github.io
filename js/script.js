$( document ).ready(function() { 

$('.photo').on('click', function() { 

if ($(this).hasClass('open')) { 
$(this).toggleClass('open'); 
$(this).toggleClass('scale1'); 
return false; 
} 

if ($(this).hasClass('scale1')) { 
$(this).toggleClass('scale1'); 
$(this).toggleClass('open'); 
return false; 
} 

}); 

$('.photo').on('click', function() { 
$('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on'); 
}); 


$('.Blur').on('click', function() { 

$('.photo').each(function (index, value){ 

if ($(this).hasClass('open')) { 
$(this).toggleClass('open'); 
$(this).toggleClass('scale1'); 
return false; 
}; 

}); 

$('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on'); 

}); 

});