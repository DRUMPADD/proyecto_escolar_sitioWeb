document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.menu').classList.toggle('show');
});

//SCROLL INDEX PAGE
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.logo');
ScrollReveal().reveal('.news-card', {delay : 500});
ScrollReveal().reveal('.cards-banner', {delay : 500});
ScrollReveal().reveal('.cards-banner-2', {delay : 500});

//SCROLL ABOUT PAGE
ScrollReveal().reveal('.info-header');

let cajas = document.getElementsByClassName('caja');

let btn = document.getElementsByClassName('btnshowHide');

let i = 0;

for(let x = 0; x < btn.length; x++) {
    btn[x].addEventListener('click',() => {
        if(i === 0) {
            cajas[x].style.display = 'block';
        }
        
        
        if(i === 1) {
            cajas[x].style.display = 'none';
        }
        i++;

        if(i > 1) {
            i = 0;
        }
    });
}

