$(document).ready(function(){
    $('#headerSlider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 80
    });
  });

$(document).ready(function(){
    $('#newsSlider').slick({
        infinite: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dotsClass: 'newsSliderDots',
        autoplay: true,
        autoplaySpeed: 4000,
    });
});

$(document).ready(function() {
    $('#radioAboutUs').change(function() {
        $("body,html").animate(
            {
            scrollTop: $('#headerSliderWrapper').offset().top
            },
            200
        );
    });
});

$(document).ready(function() {
    $('#radioProjects').change(function() {
        $("body,html").animate(
            {
            scrollTop: $('#whatWeDo').offset().top
            },
            200
        );
    });
});

$(document).ready(function() {
    $('#scrollButton').click(function() {
        $("body,html").animate(
            {
            scrollTop: $('#whatWeDo').offset().top
            },
            200
        );
    });
});


$(document).ready(function() {
    $('#radioNews').change(function() {
        $("body,html").animate(
            {
            scrollTop: $('#news').offset().top
            },
            200
        );
    });
});

$(document).ready(function() {
    $('#radioContact').change(function() {
        $("body,html").animate(
            {
            scrollTop: $('#contact').offset().top
            },
            200
        );
    });
});

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 700 && scroll_pos < 2350) {
            $("header").css('background-color', '#55b8ffef');
        } else if (scroll_pos > 3380 && scroll_pos < 4380) {
            $("header").css('background-color', '#55b8ffef');
        } else if (scroll_pos > 4380) {
            $("header").css('background-color', '#929292ef');
        } else {
            $("header").css('background-color', 'transparent');
        }
    });
});


// $(document).ready(function() {
//     $('.newsSliderImgZoom').mousedown(function() {
//         $(this).parent().css( "transform", "scale(1.5)" );
//         $(this).parent().css( "z-index", "99999999" );
//         $(this).css( "opacity", "0" );


//     });
//     $('.newsSliderImgZoom').mouseup(function() {
//         $(this).parent().css( "transform", "scale(1)" );
//         $(this).css( "opacity", "inherit" );

//     });
// });

