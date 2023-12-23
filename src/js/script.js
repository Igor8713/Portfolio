document.querySelector('.hamburger').addEventListener('click', function(){
    document.querySelector('.menu').classList.add('active');
});

document.querySelector('.menu__close').addEventListener('click', function(){
    document.querySelector('.menu').classList.remove('active');
});

const percs = document.querySelectorAll('.skills__progressPerc'),
      progBars = document.querySelectorAll('.skills__progressBar span');

percs.forEach((item, i) =>{
    progBars[i].style.width = item.innerHTML;
});