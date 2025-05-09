$(() => {
    //
    /* skip navi */
    // 
    const skipNavi = document.querySelector('#skip_navi a');

    skipNavi.addEventListener('focus', function () {
      this.style.transform = 'translateY(100%)';
      this.style.opacity = '1';
    });
    
    skipNavi.addEventListener('blur', function () {
      this.style.transform = 'translateY(-200%)';
      this.style.opacity = '0';
    });
    
    /*
//pop창 닫기
*/
const pagePop =$('.pop-up-banner');
const ppclose =$('.bt_close');
ppclose.on('click', function () {
    pagePop.css('visibility', 'hidden').hide();
});


    /* gnb*/
    const dim = $('.dim');
    const dep1 = $('.depth1-li').find('li');
    dim.hide();
    dep1.on('mouseover', function() {
        const dep2 = $(this).find('.depth2');
        dep2.css('opacity','1').show();
        dim.show();
      }).on('mouseleave', function() {
        const dep2 = $(this).find('.depth2');
        dep2.css('opacity','0').hide();
        dim.hide();
      });
    

    /* slide */

    $('.slid_list').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        prevArrow: $('.hero-control .pre'),
        nextArrow: $('.hero-control .next'),
    });


    $('.slid_list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        const currentSlideElement = $(slick.$slides[currentSlide]);
        const nextSlideElement = $(slick.$slides[nextSlide]);
        const currentSlideTitle = currentSlideElement.find('img').attr('data-title');
        const nextSlideTitle = nextSlideElement.find('img').attr('data-title');

        animateProgressBar();
        $('.event-title').text(currentSlideTitle).css('opacity', 1).removeClass('active');
        setTimeout(function () {
            $('.event-title').text(nextSlideTitle).addClass('active');
        }, 1000);
    });

    $('.slid_list').on('afterChange', function (event, slick, currentSlide) {
        const activeSlide = $(slick.$slides[currentSlide]);

        setTimeout(function () {
            $('.event-title').css('opacity', 0);
        }, 2000);

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

    //
    // progress
    //
    const progressBar = $('.slid-progress .bar');
    const duration = 2000; // 애니메이션 지속 시간 (ms)
    const increment = duration / 20000;

    const animateProgressBar = () => {
        let progress = 0;
        const interval = setInterval(() => {
            if (progress >= 100) {
                clearInterval(interval);
            } else {
                progress += increment;
                progressBar.width(`${progress}%`);
            }
        }, 0);
    };
    animateProgressBar();


});
