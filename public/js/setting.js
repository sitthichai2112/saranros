function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    // document.getElementById("main").style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(document).ready(function() {
    $(".nav [href]").each(function() {
    if (this.href == window.location.href) {
        $(this).addClass("active");
        }
    });
 });

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 40,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      },
			navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


		$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').show();
            } else {
                $('#back-to-top').hide();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#back-to-top').tooltip('show');

});


$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('.nav-top-container').addClass("fixed-top");
		$('.nav-top-container').addClass("sticky");
		$('.img-nav').addClass("sticky-img");
		$('.search').addClass("stciky-search");
		$('.nav-menu').addClass("stciky-nav-menu");
  }
  else{
    $('.nav-top-container').removeClass("fixed-top");
		$('.nav-top-container').removeClass("sticky");
		$('.img-nav').removeClass("sticky-img");
		$('.search').removeClass("stciky-search");
		$('.nav-menu').removeClass("stciky-nav-menu");
  }
});


$(document).ready(function(){
    $("#btn-search").click(function(){
        $(".search-mb").toggle();
    });
});
