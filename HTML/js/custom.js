
$(document).ready(function () {

    "use strict";

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    function introHeight() {
        var wh = $(window).height();
        if(wh>500){
            $('#intro').css({height: wh});
        }
        else{
            $('#intro').css({height: 500});
        }
    }

    introHeight();
    $(window).bind('resize',function () {
        //Update slider height on resize
        introHeight();
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Timers Init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    $('#fun-facts').waypoint(function() {
        "use strict";
        // first timer
        $('.timer1').countTo({

            from: 0, // the number you want to start
            to: 76, // the number you want to reach
            speed: 2000,
            refreshInterval: 100

        });

        // second timer
        $('.timer2').countTo({

            from: 0,// the number you want to start
            to: 12,// the number you want to reach
            speed: 1500,
            refreshInterval: 50

        });


        // third timer
        $('.timer3').countTo({

            from: 0,// the number you want to start
            to: 67,// the number you want to reach
            speed: 2000,
            refreshInterval: 100
        });


        // fourth timer
        $('.timer4').countTo({

            from: 0,// the number you want to start
            to: 29,// the number you want to reach
            speed: 2000,
            refreshInterval: 10,


        });


    }, { offset: 500 });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Magnific pop-up  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('.portfolioItem').magnificPopup({
        delegate: ' .popup-link',
        gallery: {
            enabled: true, // set to true to enable gallery

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button

        },
        type: 'image',
        mainClass: 'mfp-fade',
        // Info about options is in docs:
        // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

        tLoading: 'Loading...'
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 100,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });


    $('.featuredWork').magnificPopup({
        delegate: ' .popup-link',
        gallery: {
            enabled: true, // set to true to enable gallery

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button

        },
        type: 'image',
        mainClass: 'mfp-fade',
        // Info about options is in docs:
        // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

        tLoading: 'Loading...'
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Isotope  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    //init Isotope
    var $container = $('.gallery').imagesLoaded( function() {
        $container.isotope({
            // options
        });
    });


    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $container.isotope({
        filter: '*' // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs'
    });




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* owl carousels  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    $("#owl-clients").owlCarousel({
        margin:20,
        loop:true,
        stagePadding:50,
        autoplay:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:3
            },
            // breakpoint from 768 up
            768 : {
                items:4
            }
        },
        dots:false
    });

    $("#owl-client-reviews").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoHeight: false,
        autoHeightClass: 'owl-height',
        dots:false,
        nav:true,
        navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ]
    });

    $("#owl-blog").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoHeightClass: 'owl-height',
        dots:false,
        nav:true,
        navText:[
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ]
    });

    $("#owl-featured").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:1
            },
            // breakpoint from 480 up
            480 : {
                items:2
            },
            // breakpoint from 768 up
            768 : {
                items:3
            }
        },
        nav:false,
        margin:20
    });

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* click switched with touch for mobile  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    $('.imageWrapper img').bind('touchstart', function() {
        $(this).addClass('.imageWrapper .caption');
    });

    $('.imageWrapper img').bind('touchend', function() {
        $(this).removeClass('.imageWrapper .caption');
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* contact form init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#result").slideUp(300,function() {
            $('#result').hide();
            $('#submit')
                .attr('disabled','disabled');
            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    comments: $('#comments').val(),
                },
                function(data){
                    document.getElementById('result').innerHTML = data;
                    $('#result').slideDown('slow');
                    $('#submit').removeAttr('disabled');
                    if(data.match('success') != null) $('#contactform').slideUp('slow');
                }
            );

        });

        return false;

    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* google map  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


    function initialize() {
        var map_canvas = document.getElementById('googleMap');

        var map_options = {
            center: new google.maps.LatLng(54.046575, -2.8007399),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };

        var map = new google.maps.Map(map_canvas, map_options);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(44.434596, 26.080533),
            map: map,
            title: 'Hello World!'
        });
        var styles = [
            {
                "stylers": [
                    { "saturation": -56 },
                    { "color": "#838080" },
                    { "lightness": -45 }
                ]
            },{
                "featureType": "landscape",
                "stylers": [
                    { "color": "#938080" }
                ]
            },{
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    { "color": "#868483" },
                    { "saturation": -72 },
                    { "lightness": -35 }
                ]
            },{
                "featureType": "landscape.man_made",
                "elementType": "labels.text",
                "stylers": [
                    { "color": "#808080" },
                    { "saturation": -88 },
                    { "lightness": 100 },
                    { "weight": 0.1 }
                ]
            },{
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                    { "saturation": -88 },
                    { "lightness": 100 },
                    { "weight": 0.1 }
                ]
            },{
                "featureType": "road.highway",
                "stylers": [
                    { "color": "#c99f6c" },
                    { "saturation": -40 }
                ]
            },{
                "featureType": "road.arterial",
                "stylers": [
                    { "color": "#c99f6c" },
                    { "saturation": -85 },
                    { "lightness": 41 }
                ]
            },{
                "featureType": "road.local",
                "stylers": [
                    { "color": "#c99f6c" },
                    { "saturation": -86 },
                    { "lightness": -49 }
                ]
            },{
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    { "lightness": 100 },
                    { "weight": 0.1 }
                ]
            },{
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    { "color": "#ae8080" },
                    { "lightness": 100 }
                ]
            },{
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    { "color": "#558080" },
                    { "lightness": 100 },
                    { "weight": 0.1 }
                ]
            },{
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    { "color": "#d18080" },
                    { "visibility": "off" }
                ]
            },{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [
                    { "color": "#958080" },
                    { "lightness": 100 }
                ]
            },{
            }
        ]
        map.setOptions({styles: styles});
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* parallax init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    if(!Modernizr.touch){
        $.stellar({
            responsive: false,
            horizontalOffset: 0,
            horizontalScrolling:false

        });
    }
    else{
    }


    var iOS = false,
        p = navigator.platform;

    if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
        iOS = 1;
    }

    if(!iOS){
        ///
    }
    else{
        $( "#what-we-do" ).css( "background-attachment", "scroll" );
        $( "#features" ).css( "background-attachment", "scroll" );
        $( "#clients-reviews" ).css( "background-attachment", "scroll" );
        $( "#our-information" ).css( "background-attachment", "scroll" );
    }


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* smooth scroll init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    smoothScroll.init({
        offset: 100
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* no scroll on body when ajax-overlay is on */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

    $(function () {

        $('a.overlay-ajax').click(function(){
            $( "body" ).addClass( "noscroll" );
        });

        $('a.overlay-close').click(function(){
            $( "body" ).removeClass( "noscroll" );
        });
    });





    $('#tab div').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })

    $('#tab div').on('click', function(){
        $('#tab div.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#filters button').tooltip();

    $("a.ajax-portfolio").click(function() {
        var url = $(this).attr("href");
//        $('.close-ajaxWrapper').css("background-color","white");
        $('.close-ajax img').tooltip();
        $('html, body').animate({scrollTop: ($('#div1').offset().top - 100)},'slow', function(){
            $('#div1').load(url + ' #transmitter', function (){
                $('.gallery').slideDown("slow");});
            $('a.close-ajax').click(function(){
                $('.close-ajax img').tooltip('hide')
                $('.close-ajaxWrapper').css("background-color","transparent");
                $('div#filters').slideDown(1000, function(){
                    $('div#div1').empty();
                });
                $('html, body').animate({scrollTop: ($('#div1').offset().top - 0)});
                return false;
            });//End: click()
        });
//                $("#div1").load(url);
        return false;
    });


    $("a.overlay-ajax").click(function(){
        var url = $(this).attr("href");
        $(".overlay-section").load(url + ' #transmitter');
        $('.overlay-close img').tooltip();
        return false;
    });



    $('body').fitVids();
});

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* remove class active on the navbar when users reach #intro  */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(document).scroll(function () {
    'use strict';
    var wh1 = $('#intro').height();
    var scroll = $(window).scrollTop();
    if (scroll < wh1) {
        $("#navbar-collapse-1 > div:nth-child(1) > ul > li.active").removeClass("active");
    }
});



/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/*  Preloader */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

$(window).load(function() {    // makes sure the whole site is loaded
    "use strict";
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(100).css({'overflow':'visible'});
});


