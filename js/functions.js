$(document).ready(function() {
    //$("input[type=radio]").addClass("radiorequired");

   $("#cname").attr("placeholder","Full Name*");
$("#cemail").attr("placeholder","Email*");
$("#cphone").attr("placeholder","Mobile No.*");
$("#cstate option:first").html("State*");
$("#ccity").attr("placeholder","City*");
$("#date").attr("placeholder","Date of Birth*");
$("#ccard").attr("placeholder","Valid Aadhar Card Number*");
$("#ccourses option:first").html("Courses*");
$("#cspace option:first").html("Space Available *");
$("#cinvestment option:first").html("Investment Available *");
    //$(".required").addClass("radiorequired");

    $("input[type=submit]").val("Apply Now");

    //$('input[type=radio]').live('change', function() { alert('This university is only for Women'); });

    jQuery('.campuses_click').click(function() {
        //$(".free_consultation_show").hide();
        if (!jQuery(".campuses_show").is(":visible"))
            jQuery('.campuses_click').addClass("selected");
        jQuery(".campuses_show").slideToggle('slow', function() {
            if (!jQuery(".campuses_show").is(":visible"))
                jQuery('.campuses_click').removeClass("selected");

        });
    });

    $('.bxslider').bxSlider({
        minSlides: 2,
        maxSlides: 12,
        slideWidth: 150,
        slideMargin: 15,
        ticker: true,
        speed: 17000
    });

    //FANCYBOX//

    $(".fancybox").fancybox({
        'transitionIn': 'fade',
        'transitionOut': 'fade',
        'speedIn': 600,
        'speedOut': 200,
        'overlayShow': false,
        'showCloseButton': false,
    });


    $(document).ready(function() {
        $('input[type=radio]').live('change', function() {
            alert('This university is only for Women');
        });
    });



});