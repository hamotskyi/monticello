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
