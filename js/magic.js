
$(document)
.on('change', '#form-questionnaire input', function(){
  setTimeout( slideCarousel, 500 );
})
.on('click', '[data-toggle="offcanvas"]', function(){
  $('.row-offcanvas').toggleClass('active')
})
.ready(function(){
  checkScreenSize();
});

function slideCarousel(){
  $('#form-questionnaire').carousel('next');
}


$(window).resize(function(){
  checkScreenSize();
});

function checkScreenSize(){
  // if screen is small, then apply .nav-justified to nav-pills
  if( $(window).width() < 768  )
    $('.jumbotron .nav-pills').addClass('nav-justified');
  else
    $('.jumbotron .nav-pills').removeClass('nav-justified');
}
