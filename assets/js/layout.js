$(function () {
    $("#header").load("./partials/header.html");
    $("#footer").load("./partials/footer.html");
});

// $(function (){
//     $(document).scroll(function(){
//     var $nav = $("#header");
//     $nav.toggleClass('scrolled',$(this).scrollTop() > $nav.height());
//     }) ;
// });

$(function (){
    $(window).on('scroll',function(){
        if($(window).scrollTop()){
            $('nav').addClass('scrolled')
        }else{
            $('nav').removeClass('scrolled')
        }
    })
});