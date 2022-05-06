const openMonitoring = document.querySelector('.monitoring');
openMonitoring.classList.add('noActive');

const openMonitoringIcon = document.querySelector('.monitoring__icon')
const monitoring = document.querySelector('.header-bottom');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-top__nav');
document.onclick = (e) =>{
    console.log(e.target);
    if(e.target.classList.contains('monitoring')){
        monitoring.classList.toggle('active');
        openMonitoringIcon.classList.toggle('active');
        openMonitoring.classList.toggle('noActive');
    } else if(!e.target.classList.contains('header-bottom')){
        monitoring.classList.remove('active');
        openMonitoringIcon.classList.remove('active');
        openMonitoring.classList.add('noActive');
    }

    if(e.target.classList.contains('burger')){
        nav.classList.toggle('active');
    } else if(!e.target.classList.contains('header-top__nav')){
        nav.classList.remove('active');
    }
}