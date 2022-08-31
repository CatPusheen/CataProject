function viewMore(){
    let list=document.getElementById('list__more');
    let btn=document.getElementById('footer__btn');

    if (list.style.display === 'none'){

        list.style.display = 'flex';
        list.style.animation = 'showBlock 1s linear forwards'
        btn.className='btn__click'
        btn.innerHTML='Скрыть';
    } else {
        list.style.display = 'none';
        btn.innerHTML='Показать все';
        btn.className='footer__btn'
    }
}

new Swiper('.swiper-container', {
    breakpoints: {
        enabled: false,
        310: {
            enabled: true,
            slidesPerView: 1,
        },
        766: {
            enabled: false,
        },
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

