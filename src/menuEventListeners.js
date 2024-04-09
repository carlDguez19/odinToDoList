import Menu from '../src/imgs/menu.png'
import Brand from '../src/imgs/WorkerAntsMod.png';
import Close from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import { displayProjectInMain, clearMain, mainSec, checkForImportantTasks, checkForTodaysTasks, checkForWeekTasks, addProjectToSidebar } from './projectDOM';//checkForTasks
import { findProjectInArr } from './projectEventListeners';
import { Project } from './projectClass';
import { displayTaskInMain } from './taskDOM';

export let projArr = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];//determineProjArr();
export let taskArr = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

if(projArr){
    for(let i = 0; i < projArr.length; i++){
        let titleProj = projArr[i]._title;
        addProjectToSidebar(titleProj);
    }
}

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
    const allTasks = document.querySelector(".allTasksSide");
    const impTasks = document.querySelector(".importantHighTasksSide");
    const todayTasks = document.querySelector(".todayTasksSide");
    const weekTasks = document.querySelector(".weekTasksSide");
    const projOverlay = document.querySelector(".newProjectOverlay");

    menuContainer.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideOn 1.5s forwards';
    });
    closeContainer.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideClose 1.5s forwards';
    });
    createProjCont.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideClose 1.5s forwards';
        projOverlay.style.animation = 'projectSlideDown 1.5s forwards';
    });
    sideBar.addEventListener('click', (e) => {
        if(e.target.tagName === 'SPAN'){
            const dispProj = findProjectInArr(e.target.textContent)
            const tempObj = new Project(dispProj._title, dispProj._description);
            displayProjectInMain(tempObj);
        }
    });
    allTasks.addEventListener('click', displayAllTasks);

    impTasks.addEventListener('click', displayImportantTasks);

    todayTasks.addEventListener('click', displayTodaysTasks);

    weekTasks.addEventListener('click', displayWeekTasks);
}

function displayWeekTasks(){
    clearMain();
    const allTaskSecUL = document.createElement('ul');
    allTaskSecUL.classList.add("todoUL")

    mainSec.appendChild(allTaskSecUL);

    checkForWeekTasks(taskArr);
}

function displayTodaysTasks(){
    clearMain();
    const allTaskSecUL = document.createElement('ul');
    allTaskSecUL.classList.add("todoUL")

    mainSec.appendChild(allTaskSecUL);

    checkForTodaysTasks(taskArr);       
}

function displayImportantTasks(){
    clearMain();
    const allTaskSecUL = document.createElement('ul');
    allTaskSecUL.classList.add("todoUL")

    mainSec.appendChild(allTaskSecUL);

    checkForImportantTasks(taskArr);
}

function displayAllTasks(){
    clearMain();
    const allTaskSecUL = document.createElement('ul');
    allTaskSecUL.classList.add("todoUL")

    mainSec.appendChild(allTaskSecUL);

    for(let i = 0; i < taskArr.length; i++){
        displayTaskInMain(taskArr[i]);
    }
}