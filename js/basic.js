$(() => {
    //
    /* skip navi */
    // 
    const skipNavi = document.querySelector('#skip_navi a');

    skipNavi.addEventListener('focus', function () {
        this.style.transform = 'translateY(100%)';
    });

    skipNavi.addEventListener('blur', function () {
        this.style.transform = 'translateY(-200%)';
    });

    /* slide */
    
    $('.slid_list').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnDotsHover: true,
        speed: 2000,
        prevArrow: $('.hero-control .pre'),
        nextArrow: $('.hero-control .next'),
        pauseOnHover:$('.hero-control .purse'),
    });

    $('.card-slot').slick({
        infinite: true,
        slidesToShow: 5,
        pauseOnDotsHover: true,
        prevArrow: $('.slot-box .pre'),
        nextArrow: $('.slot-box .next'),
    });
    $('.photo_lists').slick({
        infinite: true,
        autoplay: false,
        slidesToShow: 1,
        pauseOnDotsHover: true,
        prevArrow: $('.slide_wrap .pre'),
        nextArrow: $('.slide_wrap .next'),
    });

});
