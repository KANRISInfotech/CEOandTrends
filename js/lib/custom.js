window.onload = function() {
    setInterval(function() {
        $(".css-slider-wrapper").css('height', $(window).width() / 820 * 461);
    }, 2000);
}

$(document).ready(function() {
    jQuery(".nav a").on("click", function() {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });
    $(".footer_bottom_right h5 span").click(function() {
        if ($(this).text() == 'PRIVACY & COOKIES') {
            window.open('docs/Privacy Policy.pdf');
        }
        if ($(this).text() == 'LEGAL') {
            window.open('docs/TC.pdf');
        }
    })
})


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}