import Menu from '../src/imgs/menu.png'
import Brand from '../src/imgs/WorkerAntsMod.png';
import Close from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import { displayProjectInMain, clearMain, mainSec, checkForImportantTasks, checkForTodaysTasks, checkForWeekTasks, addProjectToSidebar } from './projectDOM';//checkForTasks
import { findProjectInArr } from './projectEventListeners';
import { Project } from './projectClass';
import { displayTaskInMain } from './taskDOM';

//check localStorage if nothing found create new array
export let projArr = localStorage.getItem('projects') ? JSON.parse(localStorage.getItem('projects')) : [];
export let taskArr = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];

if(projArr){//if localStorage projects found then add them to sidebar and add all fucntionality
    for(let i = 0; i < projArr.length; i++){
        let titleProj = projArr[i]._title;
        addProjectToSidebar(titleProj);
    }
}

export function dqs(c){
    return document.querySelector(c);
}

export function menuEventListen(){//sidebar menu dom and event listeners
    const menuContainer = document.querySelector(".menuContainer");
    const mainLogoCont = document.querySelector(".mainLogo");
    const closeContainer = document.querySelector(".menuClose");
    const createProjCont = document.querySelector(".createProj");
    
    const menuIcon = new Image();//three bar menu icon
    menuIcon.src = Menu;
    menuIcon.classList.add('main-menu-logo');

    const mainLogoImg = new Image();//workerAnts logo
    mainLogoImg.src = Brand;
    mainLogoImg.classList.add('main-logo');

    const closeIcon = new Image();//close sidebar icon
    closeIcon.src = Close;
    closeIcon.classList.add('menuClose');

    const createProjIcon = new Image();//createProj icon
    createProjIcon.src = Create;
    createProjIcon.classList.add('addProjButton');

    menuContainer.appendChild(menuIcon);
    mainLogoCont.appendChild(mainLogoImg);
    closeContainer.appendChild(closeIcon);
    createProjCont.appendChild(createProjIcon);

    const sideBar = document.querySelector(".sidebar-menu");//vars of tabs in sidemenu and sidemenu itself
    const allTasks = document.querySelector(".allTasksSide");
    const impTasks = document.querySelector(".importantHighTasksSide");
    const todayTasks = document.querySelector(".todayTasksSide");
    const weekTasks = document.querySelector(".weekTasksSide");
    const projOverlay = document.querySelector(".newProjectOverlay");

    menuContainer.addEventListener('click', function(){//menu on
        sideBar.style.animation = 'menuSlideOn 1.5s forwards';
    });
    closeContainer.addEventListener('click', function(){//menu close
        sideBar.style.animation = 'menuSlideClose 1.5s forwards';
    });
    createProjCont.addEventListener('click', function(){
        sideBar.style.animation = 'menuSlideClose 1.5s forwards';
        projOverlay.style.animation = 'projectSlideDown 1.5s forwards';
    });
    sideBar.addEventListener('click', (e) => {
        if(e.target.tagName === 'SPAN'){//if clicking a project in the sidebar
            const dispProj = findProjectInArr(e.target.textContent)//find which project was clicked in the array
            const tempObj = new Project(dispProj._title, dispProj._description);
            displayProjectInMain(tempObj);//display that project
        }
    });

    //eventListeners for the 'Tasks' tabs
    allTasks.addEventListener('click', displayAllTasks);

    impTasks.addEventListener('click', displayImportantTasks);

    todayTasks.addEventListener('click', displayTodaysTasks);

    weekTasks.addEventListener('click', displayWeekTasks);
}

function displayWeekTasks(){
    clearMain();//clear the main section
    const allTaskSecUL = document.createElement('ul');//create an empty ul to fill
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

    for(let i = 0; i < taskArr.length; i++){//go through taskArr and display each
        displayTaskInMain(taskArr[i]);
    }
}