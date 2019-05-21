function toggleNav() {
    var updateElement = document.getElementById("menu");
    updateElement.classList.toggle("active");
}



var divs = $('.top-header');
$(window).on('scroll', function () {
    var st = $(this).scrollTop();
    divs.css({
        'opacity': (1 - st / 250)
    });
});
