/** 
  * Template Name: OsteriaX
  * Version: 1 
  * Template Scripts
  * Author: MarkUps
  * Author URI: http://www.markups.io/

  Custom JS
  

  1. TOP SLIDER (SLICK SLIDER) 
  2. PORTFOLIO POPUP VIEW ( IMAGE LIGHTBOX ) 
  3. DATEPICKER
  4. SHEF SLIDER ( SLICK SLIDER )
  5. TESTIMONIAL SLIDER ( SLICK SLIDER )
  6. GOOGLE MAP
  7. MENU SMOOTH SCROLLING
  8. HOVER DROPDOWN MENU
  9. SCROLL TOP BUTTON
  10. BUTTON SMOOTH SCROLL ( VIEW RESERVATION FORM ) 

  
**/

jQuery(function ($) {

  /**
   * jQuery.browser.mobile (http://detectmobilebrowser.com/)
   *
   * jQuery.browser.mobile will be true if the browser is a mobile device
   *
   **/

  (function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4));
  })(navigator.userAgent || navigator.vendor || window.opera);

    var yearEx = (new Date()).getFullYear() - 2009;

    $('#year-xp').attr("data-count", (new Date()).getFullYear() - 1992);
    $('#year-ex').attr("data-count", yearEx);

    if(!jQuery.browser.mobile && yearEx%10 === 0)
        $('.github-fork-ribbon').attr('data-ribbon','Depuis '+yearEx+' ans').show();

    /* ----------------------------------------------------------- */
    /*  1. TOP SLIDER (SLICK SLIDER)
    /* ----------------------------------------------------------- */

    jQuery('.mu-top-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        cssEase: 'linear'
    });

    /* ----------------------------------------------------------- */
    /* 4. SHEF SLIDER (SLICK SLIDER)
    /* ----------------------------------------------------------- */

    /*jQuery('.mu-profile-nav').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });*/

    /* ----------------------------------------------------------- */
    /*  5. TESTIMONIAL SLIDER (SLICK SLIDER)
    /* ----------------------------------------------------------- */

    jQuery('.mu-testimonial-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20000,
        speed: 500,
        cssEase: 'linear'
    });

    /* ----------------------------------------------------------- */
    /*  6. GOOGLE MAP
    /* ----------------------------------------------------------- */

    $('#mu-map').click(function () {
        $('#mu-map iframe').css("pointer-events", "auto");
    });

    $("#mu-map").mouseleave(function () {
        $('#mu-map iframe').css("pointer-events", "none");
    });

    /* ----------------------------------------------------------- */
    /*  7. MENU SMOOTH SCROLLING
    /* ----------------------------------------------------------- */


    //MENU SCROLLING WITH ACTIVE ITEM SELECTED

    // Cache selectors
    var lastId,
        topMenu = $(".mu-main-nav"),
        topMenuHeight = topMenu.outerHeight() + 13,
        // All list items
        menuItems = topMenu.find('a[href^=\\#]'),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 32;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1500);
        jQuery('.navbar-collapse').removeClass('in');
        e.preventDefault();
    });

    // Bind to scroll
    jQuery(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href=\\#" + id + "]").parent().addClass("active");
        }
    })

    /* ----------------------------------------------------------- */
    /*  8. HOVER DROPDOWN MENU
    /* ----------------------------------------------------------- */

    // for hover dropdown menu
    jQuery('ul.nav li.dropdown').hover(function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function () {
        jQuery(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });


    /* ----------------------------------------------------------- */
    /*  9. SCROLL TOP BUTTON
    /* ----------------------------------------------------------- */

    //Check to see if the window is top if not then display button

    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 300) {
            jQuery('.scrollToTop').fadeIn();
        } else {
            jQuery('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top

    jQuery('.scrollToTop').click(function () {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    /* ----------------------------------------------------------- */
    /*  10. BUTTON SMOOTH SCROLL ( VIEW MY WORK )
    /* ----------------------------------------------------------- */

    $('.mu-readmore-btn-2').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

    /* ----------------------------------------------------------- */
    /*  11. MORE REFERENCES
    /* ----------------------------------------------------------- */

    $('#mu-more-references-btn').on('click', function (e) {
        e.preventDefault();
        if ($('.mu-more-references-content').css('display') == 'none') {
            $('.mu-more-references-content').css('display', 'inline');
            var h = $('.mu-more-references-content').height();
            $('.mu-more-references-content').css('height', 0);
            $('.mu-more-references-content').animate({
                'height': h
            }, 1000, 'swing', function () {
                $('.mu-more-references-content').css('height', '');
            });
            $('#mu-more-references-btn').css('display', 'none');
        }
    });

    refreshCounter();

    $(window).resize(function () {
        refreshCounter();
    });

});

function refreshCounter() {

    var single_counter_height = 0;

    $('.mu-single-counter').each(function () {
        $(this).css('height', 'auto');
        if ($(this).height() > single_counter_height)
            single_counter_height = $(this).height();
    });

    $('.mu-single-counter').each(function () {
        if ($(this).height() < single_counter_height)
            $(this).height(single_counter_height);
    });
}