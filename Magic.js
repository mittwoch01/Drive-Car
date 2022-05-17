$(function(){ // 링크를 통해 jquery에 접근하는 방식.

    // variables
    $surface = $('.surface');
    $car = $('.car');

    //keypress event
    $(document).on('keypress',function(e) {
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })

    // light
    $(document).on('keypress',function(e) {

    })

});