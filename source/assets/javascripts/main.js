$(document).ready(function() {
  $('.circle-project .first p').addClass('active');
  $('.circle-project p').click(function(){
    $('.circle-project p').removeClass('active');
    $(this).addClass('active');
  })
})
