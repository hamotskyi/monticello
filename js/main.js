$(document).ready(function(){
    $('.headerSlider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
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

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(window).scrollTop();
        if(scroll_pos > 700) {
            $("header").css('background-color', '#55b8ffef');
        } else {
            $("header").css('background-color', 'transparent');
        }
    });
});