// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
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

console.clear();


console.log("______________________________\n\n┏┓┳┳┏┳┓┳┳┳┓┏┓  ┏┓┏┓┳┳┓┏┓┏┓┳┓┓┏\n┣ ┃┃ ┃ ┃┃┣┫┣   ┃ ┃┃┃┃┃┃┃┣┫┃┃┗┫\n┻ ┗┛ ┻ ┗┛┛┗┗┛  ┗┛┗┛┛ ┗┣┛┛┗┛┗┗┛\n______________________________\n\n© 2024 FUTURE COMPANY DIGITAL\nTodos os direitos reservados.\n\nVisite: \n'https://futurecompany.com.br/'\n\n______________________________\n");

                              