$(document).ready(function() {
  $('.circle-project .first p').addClass('active');
  $('.circle-project p').click(function(){
    $('.circle-project p').removeClass('active');
    $(this).addClass('active');
  })
})

$(document).ready(main);
var counter = 1;
function main(){
  $('.fixed-header').click(function(){
		if(counter == 1){
      $('.mobile-menu').animate({
        right: '0'
      });
      counter = 0;
    } else {
      counter = 1;
      $('.mobile-menu').animate({
        right: '-100%'
      });
    }
	});
};
$(document).ready(function() {
  $('.mobile-menu ol li').click(function(){
    $('.mobile-menu').animate({
      right: '-100%'
    });
    counter = 1;
  })
})
