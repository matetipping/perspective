window.onload = function() {
    /* Adjust these global variables */
    // Speed of hamburger animation (milliseconds). Should match CSS animation speed.
    hamburgerAnimSpeed = 400;
    /* End adjustable variables */
    
    /* Do not adjust these global variables */
    scrollValue = -100;
    screenWidth = screen.width;
    /* End global variables */
    
    // Fading animation for on-load words.
    $(".fade").addClass("fadein");
    
    $("#top_hamburger").click(function() {
        if ($(this).hasClass("animcomplete")) {
            $(this).removeClass("animcomplete");
            $(this).addClass("closed");
            $("#dropdown").css("transform", "TranslateY(-200px)");
            $("#dropdown").css("-webkit-transform", "TranslateY(-200px)");
            setTimeout(function() {
              $("#top_hamburger").removeClass("closed");
            }, hamburgerAnimSpeed);
        } else {
            $(this).addClass("open");
            $("#dropdown").css("transform", "TranslateY(-30px)");
            $("#dropdown").css("-webkit-transform", "TranslateY(-30px)");
            setTimeout(function() {
              $("#top_hamburger").removeClass("open");
              $("#top_hamburger").addClass("animcomplete");
            }, hamburgerAnimSpeed);
        }
    });
    $("#mark").click(function() {
        if (location.pathname == "/") {
            scrollToTop();
        } else {
            redirect("/");
        }
    });
    $("#nextbuttonP1").click(function() {
        $(".fade").removeClass("fadein");
        $(".leaving").addClass("done");
        if ($("#lamp").hasClass("shake")) {
            $("#lamp").removeClass("shake");
        } else {
            $("#lamp").addClass("shake");
        }
        if ($("#mug").hasClass("shake")) {
            $("#mug").removeClass("shake");
       } else {
           $("#mug").addClass("shake");
       }
       if ($("#clock").hasClass("shake")) {
           $("#clock").removeClass("shake");
       } else {
           $("#clock").addClass("shake");
       }
       if ($("#frame").hasClass("shake")) {
           $("#frame").removeClass("shake");
       } else {
           $("#frame").addClass("shake");
       }
       if ($("#iphone").hasClass("shake")) {
           $("#iphone").removeClass("shake");
       } else {
           $("#iphone").addClass("shake");
       }
    });
};
