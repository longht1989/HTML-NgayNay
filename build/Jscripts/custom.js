/* ====================================
   Onload functions
   ==================================== */
$(function() {
    // mobile menu
    $(".button-close").click(function() {
        $(".mobile-menu").removeClass("is-active");
        $(".mobile-topics").removeClass("is-active");
        $("#mask").removeClass("is-active");
        $("body").removeAttr("style");
    });
    $("#mask").click(function() {
        $(".mobile-menu").removeClass("is-active");
        $(".mobile-topics").removeClass("is-active");
        $(this).removeClass("is-active");
        $("body").removeAttr("style");
    });
    $(".button-menu").click(function() {
        $(".mobile-menu").addClass("is-active");
        $("#mask").addClass("is-active");
        $("body").css("overflow", "hidden");
    });
    $(".button-topics").click(function() {
        $(".mobile-topics").addClass("is-active");
        $("#mask").addClass("is-active");
        $("body").css("overflow", "hidden");
    });
    // toggle sub menu mobile 
    $(".mobile-menu .sprite-caret-down").click(function() {
        // $(this).closest('.menu__sub').toggleClass('is-active');
        $(this).next('.menu__sub').slideToggle('fast');
        $(this).toggleClass("is-active");
    });
    // index slider
    // $('#etoday-slider').bxSlider({
    //     nextText: '',
    //     prevText: '',
    //     adaptiveHeight: 1,
    //     auto: 1,
    //     pause: '5000'
    // });
    $('#opinion-slider').bxSlider({
        nextText: '',
        prevText: '',
        adaptiveHeight: 1,
        auto: 1,
        pause: '5000'
    });
    // $('#quizz-slider').bxSlider({
    //     nextText: '',
    //     prevText: '',
    //     adaptiveHeight: 1,
    //     auto: 1,
    //     pause: '5000'
    // });
    // affix navigator
    $('.navigator').affix({
        offset: {
            top: $("#site-content").offset().top
        }
    })
    // add class for story has gif image
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
});