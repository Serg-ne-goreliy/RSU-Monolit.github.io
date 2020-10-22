$( document ).ready(function() {

  $('.photo1').on('click', function() {

    if ($(('.photo2')).hasClass('open')) {$('.photo2').toggleClass('open') && $('.photo2').toggleClass('scale1');;}
    else if ($('.photo3').hasClass('open')) {$('.photo3').toggleClass('open') && $('.photo3').toggleClass('scale1');}
    else if ($('.photo4').hasClass('open')) {$('.photo4').toggleClass('open') && $('.photo4').toggleClass('scale1');}
    else if ($('.photo5').hasClass('open')) {$('.photo5').toggleClass('open') && $('.photo5').toggleClass('scale1');}
    else if ($('.photo6').hasClass('open')) {$('.photo6').toggleClass('open') && $('.photo6').toggleClass('scale1');}
    else if ($('.photo7').hasClass('open')) {$('.photo7').toggleClass('open') && $('.photo7').toggleClass('scale1');}

      	$('.photo1').toggleClass('open');
      	$('.Blur').toggleClass('blur_off');
      	$('.Blur').toggleClass('blur_on');

      	if ($('.photo1').hasClass('scale1')) {

      		$('.photo1').removeClass('scale1');

      	} else $('.photo1').toggleClass('scale1');

      	return false;
  });

  $('.photo2').on('click', function() {

    if ($(('.photo1')).hasClass('open')) {$('.photo1').toggleClass('open') && $('.photo1').toggleClass('scale1');;}
    else if ($('.photo3').hasClass('open')) {$('.photo3').toggleClass('open') && $('.photo3').toggleClass('scale1');}
    else if ($('.photo4').hasClass('open')) {$('.photo4').toggleClass('open') && $('.photo4').toggleClass('scale1');}
    else if ($('.photo5').hasClass('open')) {$('.photo5').toggleClass('open') && $('.photo5').toggleClass('scale1');}
    else if ($('.photo6').hasClass('open')) {$('.photo6').toggleClass('open') && $('.photo6').toggleClass('scale1');}
    else if ($('.photo7').hasClass('open')) {$('.photo7').toggleClass('open') && $('.photo7').toggleClass('scale1');}

      	$('.photo2').toggleClass('open');
      	$('.Blur').toggleClass('blur_off');
      	$('.Blur').toggleClass('blur_on');

      	if ($('.photo2').hasClass('scale1')) {

      		$('.photo2').removeClass('scale1');

      	} else $('.photo2').toggleClass('scale1')

      	return false;
  });
  $('.photo3').on('click', function() {

    if ($(('.photo1')).hasClass('open')) {$('.photo1').toggleClass('open') && $('.photo1').toggleClass('scale1');;}
    else if ($('.photo2').hasClass('open')) {$('.photo2').toggleClass('open') && $('.photo2').toggleClass('scale1');}
    else if ($('.photo4').hasClass('open')) {$('.photo4').toggleClass('open') && $('.photo4').toggleClass('scale1');}
    else if ($('.photo5').hasClass('open')) {$('.photo5').toggleClass('open') && $('.photo5').toggleClass('scale1');}
    else if ($('.photo6').hasClass('open')) {$('.photo6').toggleClass('open') && $('.photo6').toggleClass('scale1');}
    else if ($('.photo7').hasClass('open')) {$('.photo7').toggleClass('open') && $('.photo7').toggleClass('scale1');}
    
      	$('.photo3').toggleClass('open');
      	$('.Blur').toggleClass('blur_off');
      	$('.Blur').toggleClass('blur_on');
      	if ($('.photo3').hasClass('scale1')) {
      		$('.photo3').removeClass('scale1');
      	} else $('.photo3').toggleClass('scale1')
      	return false;
  });
  $('.photo4').on('click', function() {

    if ($(('.photo1')).hasClass('open')) {$('.photo1').toggleClass('open') && $('.photo1').toggleClass('scale1');;}
    else if ($('.photo2').hasClass('open')) {$('.photo2').toggleClass('open') && $('.photo2').toggleClass('scale1');}
    else if ($('.photo3').hasClass('open')) {$('.photo3').toggleClass('open') && $('.photo3').toggleClass('scale1');}
    else if ($('.photo5').hasClass('open')) {$('.photo5').toggleClass('open') && $('.photo5').toggleClass('scale1');}
    else if ($('.photo6').hasClass('open')) {$('.photo6').toggleClass('open') && $('.photo6').toggleClass('scale1');}
    else if ($('.photo7').hasClass('open')) {$('.photo7').toggleClass('open') && $('.photo7').toggleClass('scale1');}
    
      	$('.photo4').toggleClass('open');
      	$('.Blur').toggleClass('blur_off');
      	$('.Blur').toggleClass('blur_on');
      	if ($('.photo4').hasClass('scale1')) {
      		$('.photo4').removeClass('scale1');
      	} else $('.photo4').toggleClass('scale1')
      	return false;
  });
  $('.photo5').on('click', function() {

    if ($(('.photo1')).hasClass('open')) {$('.photo1').toggleClass('open') && $('.photo1').toggleClass('scale1');;}
    else if ($('.photo2').hasClass('open')) {$('.photo2').toggleClass('open') && $('.photo2').toggleClass('scale1');}
    else if ($('.photo3').hasClass('open')) {$('.photo3').toggleClass('open') && $('.photo3').toggleClass('scale1');}
    else if ($('.photo4').hasClass('open')) {$('.photo4').toggleClass('open') && $('.photo4').toggleClass('scale1');}
    else if ($('.photo6').hasClass('open')) {$('.photo6').toggleClass('open') && $('.photo6').toggleClass('scale1');}
    else if ($('.photo7').hasClass('open')) {$('.photo7').toggleClass('open') && $('.photo7').toggleClass('scale1');}
    
      	$('.photo5').toggleClass('open');
      	$('.Blur').toggleClass('blur_off');
      	$('.Blur').toggleClass('blur_on');
      	if ($('.photo5').hasClass('scale1')) {
      		$('.photo5').removeClass('scale1');
      	} else $('.photo5').toggleClass('scale1')
      	return false;
  });
  $('.photo6').on('click', function() {

    if ($(('.photo1')).hasClass('open')) {$('.photo1').toggleClass('open') && $('.photo1').toggleClass('scale1');;}
    else if ($('.photo2').hasClass('open')) {$('.photo2').toggleClass('open') && $('.photo2').toggleClass('scale1');}
    else if ($('.photo3').hasClass('open')) {$('.photo3').toggleClass('open') && $('.photo3').toggleClass('scale1');}
    else if ($('.photo4').hasClass('open')) {$('.photo4').toggleClass('open') && $('.photo4').toggleClass('scale1');}
    else if ($('.photo5').hasClass('open')) {$('.photo5').toggleClass('open') && $('.photo5').toggleClass('scale1');}
    else if ($('.photo7').hasClass('open')) {$('.photo7').toggleClass('open') && $('.photo7').toggleClass('scale1');}
    
      	$('.photo6').toggleClass('open');
      	$('.Blur').toggleClass('blur_off');
      	$('.Blur').toggleClass('blur_on');
      	if ($('.photo6').hasClass('scale1')) {
      		$('.photo6').removeClass('scale1');
      	} else $('.photo6').toggleClass('scale1')
      	return false;
  });
  $('.photo7').on('click', function() {

    if ($(('.photo1')).hasClass('open')) {$('.photo1').toggleClass('open') && $('.photo1').toggleClass('scale1');;}
    else if ($('.photo2').hasClass('open')) {$('.photo2').toggleClass('open') && $('.photo2').toggleClass('scale1');}
    else if ($('.photo3').hasClass('open')) {$('.photo3').toggleClass('open') && $('.photo3').toggleClass('scale1');}
    else if ($('.photo4').hasClass('open')) {$('.photo4').toggleClass('open') && $('.photo4').toggleClass('scale1');}
    else if ($('.photo5').hasClass('open')) {$('.photo5').toggleClass('open') && $('.photo5').toggleClass('scale1');}
    else if ($('.photo6').hasClass('open')) {$('.photo6').toggleClass('open') && $('.photo6').toggleClass('scale1');}
    
      	$('.photo7').toggleClass('open');
      	$('.Blur').toggleClass('blur_off');
      	$('.Blur').toggleClass('blur_on');
      	if ($('.photo7').hasClass('scale1')) {
      		$('.photo7').removeClass('scale1');
      	} else $('.photo7').toggleClass('scale1')
      	return false;
  });

  $('body').on('click', function() {

    if ($(('.photo1')).hasClass('open')) {$('.photo1').toggleClass('open') && $('.photo1').toggleClass('scale1') && $('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on');;}
    else if ($('.photo2').hasClass('open')) {$('.photo2').toggleClass('open') && $('.photo2').toggleClass('scale1') && $('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on');;}
    else if ($('.photo3').hasClass('open')) {$('.photo3').toggleClass('open') && $('.photo3').toggleClass('scale1') && $('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on');;}
    else if ($('.photo4').hasClass('open')) {$('.photo4').toggleClass('open') && $('.photo4').toggleClass('scale1') && $('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on');;}
    else if ($('.photo5').hasClass('open')) {$('.photo5').toggleClass('open') && $('.photo5').toggleClass('scale1') && $('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on');;}
    else if ($('.photo6').hasClass('open')) {$('.photo6').toggleClass('open') && $('.photo6').toggleClass('scale1') && $('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on');;}
    else if ($('.photo7').hasClass('open')) {$('.photo7').toggleClass('open') && $('.photo7').toggleClass('scale1') && $('.Blur').toggleClass('blur_off') && $('.Blur').toggleClass('blur_on');;}

  });

});