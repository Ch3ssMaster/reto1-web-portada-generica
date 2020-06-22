$(document).ready(function () {

    // Add scrollspy to <body>
    $('body').scrollspy({ target: "#navigation", offset: 10 });

    // Add smooth scrolling on all links inside the navbar
    $("#navigation li a[href^='index.html#']").on('click', function (event) {
        var target = this.hash;

        event.preventDefault();

        var navOffset = $('nav').height();

        return $('html, body').animate({
            scrollTop: $(this.hash).offset().top - navOffset
        }, 800, function () {
            return window.history.pushState(null, null, target);
        });
    });
});

//enable bootstrap tooltip
$('[data-toggle="tooltip"]').tooltip();

//change active navigation element status on click event
$("#navigation .nav-item").click(function () {
    $("#navigation .nav-item").removeClass('active');
    $(this).toggleClass('active');
});

//add date to footer
// var currentYear = (new Date).getFullYear();

$("#footer span.copy-left").text((new Date).getFullYear());