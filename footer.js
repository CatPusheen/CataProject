
 let list=document.querySelector('.list-invis');
 let btn=document.getElementById('footer__btn');

 btn.addEventListener('click',viewMore);

function viewMore(){

    if (!list.classList.contains('list-vis')){
        list.classList.add('list-vis');
        btn.classList.add('btn__click');
        btn.innerHTML='Скрыть';
    } else {
        list.classList.remove('list-vis');
        btn.innerHTML='Показать все';
        btn.classList.remove('btn__click');
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


