jQuery(document).ready(function ($) {
                
    $('.gridder').gridderExpander({
        scroll: true,
        scrollOffset: 30,
        scrollTo: "panel",
        animationSpeed: 400,
        animationEasing: "easeInOutExpo",
        showNav: true,
        nextText: "<span></span>",
        prevText: "<span></span>",
        closeText: "",
        onStart: function () {
            console.log('On Gridder Initialized...');
        },
        onContent: function () {
            console.log('On Gridder Expand...');
        },
        onClosed: function () {
            console.log('On Gridder Closed...');
        }
    });

});