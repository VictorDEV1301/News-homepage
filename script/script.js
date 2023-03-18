const menu = window.document.getElementById('menu-mobile')
const menu_mobile = window.document.querySelector('.mobile')
menu.addEventListener('click', ()=>{
    menu_mobile.style.display = menu_mobile.style.display == 'none'?'flex':'none'
    menu.src = menu_mobile.style.display == 'none'? './assets/images/icon-menu.svg':'./assets/images/icon-menu-close.svg'
})