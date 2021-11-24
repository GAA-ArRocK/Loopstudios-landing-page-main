let menu = document.querySelector('.menu')
let sideMenu = document.querySelector('.sideMenu')

let navTop = document.querySelector('.nav--top')
let navMiddle = document.querySelector('.nav--middle')
let navBot = document.querySelector('.nav--bot')

menu.addEventListener('click', () => {
    sideMenu.classList.toggle('active')
    navTop.classList.toggle('active')
    navMiddle.classList.toggle('active')
    navBot.classList.toggle('active')
})