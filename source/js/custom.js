/* ====================================
   Onload functions
   ==================================== */
$(function() {
    // mobile menu
    $(".button-close").click(function() {
        $(".mobile-menu").removeClass("is-active");
        $(".mobile-24h").removeClass("is-active");
        $("#mask").removeClass("is-active");
        $("body").removeAttr("overflow");
    });
    $("#mask").click(function() {
        $(".mobile-menu").removeClass("is-active");
        $(".mobile-24h").removeClass("is-active");
        $(this).removeClass("is-active");
        $("body").removeAttr("overflow");
    });
    $(".button-menu").click(function() {
        $(".mobile-menu").addClass("is-active");
        $("#mask").addClass("is-active");
        $("body").css("overflow", "hidden");
    });
    $(".button-24h").click(function() {
        $(".mobile-24h").addClass("is-active");
        $("#mask").addClass("is-active");
        $("body").css("overflow", "hidden");
    });

    // index slider
    $('#etoday-slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        auto: 1,
        pause: '5000'
    });
    $('#quizz-slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        auto: 1,
        pause: '5000'
    });
    // affix navigator
    $('.navigator').affix({
        offset: {
            top: $("#site-content").offset().top
        }
    })
    // go top 
    $(".sprite-gotop").click(function() {
        return $("body,html").animate({ scrollTop: 0 }, 800), !1
    });
    $(document).scroll(function() {
        $(document).scrollTop() > 0 ? $("#gotop").fadeIn() : $("#gotop").hide()
    });
    // toggle floating social
    if ($(".article__summary").length > 0) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > $(".article__summary").offset().top) {
                $('.social-floating').show();
            } else {
                $('.social-floating').hide();
            }
        });
    }
    // add class for story has gif image
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
});