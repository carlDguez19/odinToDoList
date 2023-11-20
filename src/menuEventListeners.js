import Menu from '../src/imgs/menu.png'
import Brand from '../src/imgs/WorkerAntsMod.png';
//here i can also import the images into the html


export function menuEventListen(){
    const menuContainer = document.querySelector(".menuContainer");
    const mainLogoCont = document.querySelector(".mainLogo");
    
    const menuIcon = new Image();
    menuIcon.src = Menu;
    menuIcon.classList.add('main-menu-logo');

    const mainLogoImg = new Image();
    mainLogoImg.src = Brand;
    mainLogoImg.classList.add('main-logo');

    menuContainer.appendChild(menuIcon);
    mainLogoCont.appendChild(mainLogoImg);

    //const menuLogo = document.querySelector(".main-menu-logo");
    const closeLogo = document.querySelector(".menuClose");
    const sideBar = document.querySelector(".sidebar-menu");
    menuContainer.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideOn 1.5s forwards';
    });
    closeLogo.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideClose 1.5s forwards';
    })
}