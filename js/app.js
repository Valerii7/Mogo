$(function(){

    var header= $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset=$(window).scrollTop();

    checkScroll(scrollOffset);

$(window).on("scroll", function()
{
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
});

function checkScroll(scrollOffset)
{
   
    console.log(scrollOffset);

    if(scrollOffset>=introH)
    {
        header.addClass("fixed");
    }
    else
    {
        header.removeClass("fixed");
    }
}

$("[data-scroll]").on("click", function(event)
{
event.preventDefault();
var $this=$(this);
var blockId= $this.data('scroll');
var blockOffset=$(blockId).offset().top;
$("#menu a").removeClass("active");
$this.addClass("active");

$("html,body").animate({
    scrollTop:blockOffset
}, 500)
});

$("#nav-toggle").on("click",function(event)
{
    event.preventDefault();
    $(this).toggleClass("active");
    $("#menu").toggleClass("active");
})


});


