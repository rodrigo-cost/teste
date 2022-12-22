function redefinir(){
    defineLarg();
    redefinirCat();
}
// Script do navbar
let menu = document.querySelector('.mobile-menu-icon')
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open') == true) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "css-js/img/menu.png";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "css-js/img/x.png";
        // document.querySelector('.icon').style.whidth = '20px'
    }
}
menu.onclick = menuShow;




/////////////////// Script do carousel  ////////////////

const swiper1 = new Swiper ('.swiper1', {
    speed: 400,
    spaceBetween: 100,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

})

let larg_img = document.querySelector('.promo').offsetHeight;
document.querySelector('.carousel1').style.height = larg_img + "px"

function defineLarg(){
    larg_img = document.querySelector('.promo').offsetHeight;
    document.querySelector('.carousel1').style.height = larg_img + "px"
    
}

/////////////////////    Categorias           ////////////////////////////////
redefinirCat()
let larg = window.innerWidth
function redefinirCat(){
    let larg = window.innerWidth;
    if(larg > 730) {
        const swiper2 = new Swiper ('.swiper2', {
            speed: 400,
            spaceBetween: 1,
            slidesPerView: 6,
        
        })
    }
    else{
        const swiper2 = new Swiper ('.swiper2', {
            speed: 400,
            spaceBetween: 10,
            slidesPerView: 4.5,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        
        })
    }
}
window.onresize = redefinir;
// document.querySelector('.bot-cat').style.height = '10px'
// document.querySelector('.bot-cat').style.width = '10px'



/////////////////// Scripts da tela do produto//////////////////////
let modal_status = 'none';
const switchProduct = () => {
    const modal = document.querySelector('.modal')    
    // modal_status = modal.style.display;
    if (modal_status == 'none'){
        modal_status = 'block';
    } else {
        modal_status = 'none'
    }

    modal.style.display = modal_status
}
window.onclick = function (event){
    const produto = event.target.offsetParent;
    const classe = produto.className
    const tela_produto = document.querySelector('.tela-produto')
    const fechar = document.querySelector('.fechar')
    if(event.target == tela_produto || event.target == fechar) {
        switchProduct();
    }
    if ( classe == 'produto') {
        switchProduct();
    }
    

}

