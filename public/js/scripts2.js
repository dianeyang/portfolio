$(document).ready(function() {
    // fade in on page load
    $("body").css("display", "none");
    $height = $(window).height() - 96; // lawlz this is shameful
    $("#top").css({height: $height + "px"});
    $("body").fadeIn(600, 'linear');

    $("#navbar ul li a").click(function (e) {
        // don't add the hash to the end of the url
        e.preventDefault();

        // unhighlight anything that may already be highlighted
        $("#navbar a").removeClass("highlighted");

        // highlight the link you just clicked
        $(this).addClass("highlighted");

        // grab the id of the div we should be manipulating
        $id = $(this).attr('href')

        $("#top").animate({
            height: 0,
            padding: 0,
        }, 800);

        $height = $(window).height() - 72; // lol hardcoding what is life
        $($id).animate({
            height: $height + "px",
        }, 800).animate({top: 0}, 200);

        $(".section").not($id).animate({
            height: '0px',
        }, 800);
    });

    $("#navbar h1").click(function (e) {
        e.preventDefault();
        $height = $(window).height() - 96;
        $("#top").animate({
            height: $height + "px",
            padding: '1em'
        }, 800, function(){
           $(".section").not("#top").animate({
                height: '0px',
            }, 800); 
        });

        
    })
});