$(function(){ // 링크를 통해 jquery에 접근하는 방식.

    // variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['./assets/Img_05.png','./assets/Img_06.png'];

    //keypress event
    $(document).on('keypress',function(e) {
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })

    // light
    $(document).on('keypress',function(e) {
        if(e.which == 119){
            if(flag){
                flag = false;
                $img.attr('src',cars[0]);
            }else{
                flag = true;
                $img.attr('src',cars[1]);
            }
        }
    })

});