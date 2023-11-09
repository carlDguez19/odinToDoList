export function menuEventListen(){
    const menuLogo = document.querySelector(".main-menu-logo");
    const closeLogo = document.querySelector(".menuClose");
    const sideBar = document.querySelector(".sidebar-menu");
    menuLogo.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideOn 2s forwards';
    });
    closeLogo.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideClose 2s forwards';
    })
}