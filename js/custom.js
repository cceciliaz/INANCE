/** animated HTML **/
$(document).ready(function() {
    $(window).scroll(function() {
        $('.animate').each(function() {
            var topOfElement = $(this).offset().top;
            var bottomOfWindow = $(window).scrollTop() + $(window).height();

            if (bottomOfWindow > topOfElement) {
                $(this).addClass('visible');
            }
        });
    });
});

/** our services animation **/

$("#box_servicesss").click(function() {
    $(this).hide(500, function() {
        $(".modal").show();
    });
});

/** close modal **/

$(".bnt-close").click(function(){
    $(".modal").hide();
})

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}