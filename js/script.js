$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header-navigation').toggleClass('active');
        $('body').toggleClass('lock');
    });
});