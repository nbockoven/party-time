
$(document).on('change', '#form-questionnaire input', function(){
  setTimeout( slideCarousel, 500 );
});

function slideCarousel(){
  $('#form-questionnaire').carousel('next');
}
