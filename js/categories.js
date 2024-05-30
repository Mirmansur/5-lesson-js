const menu = document.querySelector('.humburger') 
const  navLink = document.querySelector('.navlink')
menu.addEventListener('click',() =>{
    navLink.classList.toggle('show')
})
