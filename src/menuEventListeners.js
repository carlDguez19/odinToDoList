import Menu from '../src/imgs/menu.png'
import Brand from '../src/imgs/WorkerAntsMod.png';
import Close from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import { displayProjectInMain } from './projectDOM';
import { findProjectInArr } from './projectEventListeners';
//I NEED TO ADD A GLOBAL VARIABLE ARRAY THAT STORES ALL THE PROJECTS HERE
export let projArr = [];

export function dqs(c){
    return document.querySelector(c);
}

export function menuEventListen(){
    const menuContainer = document.querySelector(".menuContainer");
    const mainLogoCont = document.querySelector(".mainLogo");
    const closeContainer = document.querySelector(".menuClose");
    const createProjCont = document.querySelector(".createProj");
    
    const menuIcon = new Image();
    menuIcon.src = Menu;
    menuIcon.classList.add('main-menu-logo');

    const mainLogoImg = new Image();
    mainLogoImg.src = Brand;
    mainLogoImg.classList.add('main-logo');

    const closeIcon = new Image();
    closeIcon.src = Close;
    closeIcon.classList.add('menuClose');

    const createProjIcon = new Image();
    createProjIcon.src = Create;
    createProjIcon.classList.add('addProjButton');

    menuContainer.appendChild(menuIcon);
    mainLogoCont.appendChild(mainLogoImg);
    closeContainer.appendChild(closeIcon);
    createProjCont.appendChild(createProjIcon);

    const sideBar = document.querySelector(".sidebar-menu");
    const projOverlay = document.querySelector(".newProjectOverlay");

    menuContainer.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideOn 1.5s forwards';
    });
    closeContainer.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideClose 1.5s forwards';
    });
    createProjCont.addEventListener('click', function(){
        //console.log("create project button clicked!!");
        sideBar.style.animation = 'menuSlideClose 1.5s forwards';
        projOverlay.style.animation = 'projectSlideDown 1.5s forwards';
    });
    sideBar.addEventListener('click', (e) => {
        if(e.target.tagName === 'SPAN'){
            console.log("the following is e.target.value");
            console.log(e.target.textContent);
            const dispProj = findProjectInArr(e.target.textContent)
            displayProjectInMain(dispProj);
            //displayTaskInMain(dispProj);//THIS MIGHT HAVE TO BE CALLED WITHIN DISPLAYPROJECTINMAIN WITH THE PROJECT AND UL PARAMETERS
        }
    });
}