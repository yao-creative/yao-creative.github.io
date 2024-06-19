var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'vertical',
    loop: false,
    speed: 1600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
            return '<span class="' + className + '">' + year + '</span>';
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            direction: 'horizontal',
        }
    }
});
