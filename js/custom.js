/** html scroll animation **/

// let controller = new scrollMagic.controller();

// new scrollMagic.Scene({
//     duration: 200,
//     offset: 5000
// })
// .setPin("#header_top")
// .addTo(controller);


// Inicialização do controlador
let fixed = new ScrollMagic.Controller();
// Criação da cena
new ScrollMagic.Scene({
    duration: 200, // Define a duração da cena em pixels
    offset: 0 // Define o deslocamento inicial da cena em relação ao topo da página
})
.setPin("#header_top") // Fixa o elemento com o seletor "#header_top" durante a cena
.addTo(controller); // Adiciona a cena ao controlador





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