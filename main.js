let menu =document.querySelector('#menu-btn');
let navbar =document.querySelector('.header .navbar');
menu.onclick= () => {
    menu.classList.toggle('fas-times');
    navbar.classList.toggle('active');   
}
window.onsroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}
