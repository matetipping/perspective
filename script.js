var database = firebase.database();
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
        $(".leaving").removeClass("fadein");
        $(".leaving").addClass("done");
        $(".coming").addClass("fadein");
        $(".nextbutton").addClass("nextbuttonfinished");
        $(".nextbutton").removeClass("nextbutton");
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
    $("#lamp").click(function() {
        addPerspective();
        if ($("#lamp").hasClass("shake")) {
            $("#lamp").attr("src","images/Resized Lamp Off.png");
            $("#lamp").removeClass("shake");
            $("#iphone").removeClass("shake");
            $("#frame").removeClass("shake");
            $("#clock").removeClass("shake");
            $("#mug").removeClass("shake");
            $(".leaving2").removeClass("fadein");
            $(".leaving2").addClass("done");
            $(".coming2").addClass("fadein");
        }
    });
};

function addPerspective() {
  firebase.database().ref('perspectives/').push({
    data1: 'value1',
    data2: 'value2',
    data3: 'value3'
  });
}
