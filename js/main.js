//  LING BOB SITE JS

$(document).ready(function($) {

    $('[data-toggle~="menu-toggle"]').click(function() {
        $("body").toggleClass("menu-toggle");
    });
    
    // Contact Form


    // instagram
    $(".instafeed").instastream({
        instaToken: '3062633.5e1f163.ffa63aafbff9485ca34574dc55432ab1',
        instaUser: '3062633',
        instaResults: 8,
        instaMenu: 'yes'
    });

});