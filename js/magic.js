$(document).ready(function(){
  $('#form-questionnaire input').change(function(){
    setTimeout( slideCarousel, 500 );
  });
});

function slideCarousel(){
  $('#form-questionnaire').carousel('next');
}
