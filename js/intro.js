const wrapper = document.querySelector('.wrapper');
var images = ['url(../img/intro/1.jpg)', 'url(../img/intro/2.jpg)', 'url(../img/intro/3.jpg)', 'url(../img/intro/4.jpg)', 'url(../img/intro/5.jpg)' ,'url(../img/intro/6.jpg)'];
setInterval(() =>{
    let lastnum;
    let num;
    do{
        num = Math.floor(Math.random() * 6);
    } while(num == lastnum);
    lastnum = num;
    wrapper.style.background = images[num]; 
}, 2000);
