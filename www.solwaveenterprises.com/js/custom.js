$(document).ready(function() {
    var lastScroll = 0;

    jQuery(document).ready(function($) {
        $(window).scroll(function() {
            setTimeout(function() {
                //gives 100ms to finish scrolling before doing a check
                var scroll = $(window).scrollTop();
                if (scroll > lastScroll) {
                    $(".main-header").addClass("shifted");
                } else if (scroll < lastScroll) {
                    $(".main-header").removeClass("shifted");
                }
                lastScroll = scroll;
            }, 100);
        });
    });
});




$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.main-header').addClass('active');
    } else {
        $('.main-header').removeClass('active');
    }
});


// Show the first tab and hide the rest
$('.location_tab li:first-child').addClass('active');
$('.location_content').hide();
$('.location_content:first').show();

// Click function

$('.location_tab li').click(function() {
    $('.location_tab li').removeClass('active');
    $(this).addClass('active');
    $('.location_content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});


$('.gallery_section .gallery_slider').owlCarousel({
    items: 3,
    loop: true,
    margin: 50,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplaySpeed: 500,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true,
    stagePadding: 100,
    nav: true,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
    responsive: {
        0: {
            items: 1,
            margin: 10,
            stagePadding: 0,
            center: false,
        },
        480: {
            items: 2,
            margin: 10,
            stagePadding: 0,
            center: false,
        },
        767: {
            items: 2,
            margin: 10,
            stagePadding: 50,
            center: true,
        },
        992: {
            items: 2
        }
    }
});

$('.video_slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    smartSpeed: 800,
    autoplaySpeed: 3000,
    animateOut: 'fadeOut',
    touchDrag: false,
    mouseDrag: false,
    nav: true,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
});

$('.floor_slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 100,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplaySpeed: 500,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: true,
    stagePadding: 300,
    nav: true,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 1,
            margin: 10,
            stagePadding: 0,
            center: false,
        },
        768: {
            items: 1,
            margin: 10,
            stagePadding: 0,
            center: false,
        },
        991: {
            items: 2,
            center: true,
            stagePadding: 100,
            margin: 100,
        },
        1600: {
            items: 2,
            center: true,
            stagePadding: 100,
            margin: 100,
        }
    }
});

$('.custom-slider.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 100,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplaySpeed: 500,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    responsive: {
        0: {
            items: 2,
        },
        768: {
            items: 3,
        },
        991: {
            items: 4,
        },
        1600: {
            items: 4,
        }
    }
});

function searchFunc() {
    $('.search_popup').slideToggle();
    $('.search_link').toggleClass('open');
    $('.find_btn.search').toggleClass('open');
}


// active Tab on Scroll


$('.tabs_box a[href^="#"]').on("click", function(event) {
    $("body, html").animate({
        scrollTop: $($(this).attr('href')).offset().top - 60
    }, 600);
    event.preventDefault();
});


// $('.tabs_box a[href^="#"]').click(function(event) {
//     var id = $(this).attr(".href");
//     var target = $(id).offset().top;
//     $("body, html").animate({
//         scrollTop: $($(this).attr('href')).offset().top - 180
//     }, 600);

//     event.preventDefault();
// });

function getTargetTop(elem) {
    var id = elem.attr("href");
    var offset = 160;
    return $(id).offset().top - offset;
}


$(window).scroll(function(e) {
    isSelected($(window).scrollTop())
});

var sections = $('.tabs_box a[href^="#"]');

function isSelected(scrolledTo) {

    var threshold = 100;
    var i;

    for (i = 0; i < sections.length; i++) {
        var section = $(sections[i]);
        var target = getTargetTop(section);

        if (scrolledTo > target - threshold && scrolledTo < target + threshold) {
            sections.removeClass("active");
            section.addClass("active");
        }

    };
}