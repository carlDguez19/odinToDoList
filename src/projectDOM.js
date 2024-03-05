import Remove from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import Edit from '../src/imgs/edit.png';
import { dqs, projArr } from './menuEventListeners';
import { projectEListeners } from './projectEventListeners';
import { _testering } from './projectEventListeners';
import { displayTaskInMain } from './taskDOM';
import { isEqual, format, parse } from 'date-fns';

export const mainSec = dqs(".projectSection");

export function addProjectToSidebar(projectTitle){
    const projSide = dqs(".sidebarProject");
    let projTitle = document.createElement('span');
    projTitle.textContent = projectTitle;
    projTitle.classList.add('projectNameSidebar');
    projSide.appendChild(projTitle);
}
export function removeProjectFromSidebar(projectTitle){
    const sidebarProj = dqs(".sidebarProject");
    const sidebarProjChildren = sidebarProj.children;
    for(let i = 0; i < sidebarProjChildren.length; i++){
        if(sidebarProjChildren[i].textContent == projectTitle){
            sidebarProj.removeChild(sidebarProjChildren[i]);
        }
    }
}
export function editProjectInSidebar(projectTitle){
    const sidebarProj = dqs(".sidebarProject");
    const sidebarProjChildren = sidebarProj.children;
    for(let i = 0; i < sidebarProjChildren.length; i++){
        if(sidebarProjChildren[i].textContent == projectTitle){
            //console.log("found sidebar project named " + sidebarProjChildren[i].textContent); DEBUG
            sidebarProjChildren[i].textContent = projArr[sidebarProjChildren.length].title;//projArr[sidebarProjChildren.length-1].title
        }
    }
}

export function editProjectNameMain(){
    const OGProjName = dqs(".projectNameMain");
    OGProjName.textContent = projArr[projArr.length-1].title;
}

export function displayProjectInMain(project){
    clearMain();
    const projDiv = document.createElement('div');

    const taskSecUL = document.createElement('ul');
    taskSecUL.classList.add("todoUL")
    
    const projCheckbox = document.createElement('input');
    projCheckbox.type = "checkbox";
    projCheckbox.classList.add("projectCheckbox");

    
    const projNameSpan = document.createElement('span');
    if(project.title.length > 30){
        let mainModProjTitle = project.title.slice(0,31);
        projNameSpan.textContent = mainModProjTitle + "...";
    }else{
        projNameSpan.textContent = project.title;
    }
    projNameSpan.classList.add("projectNameMain");

    
    const buttonCont = document.createElement('div');
    
    const addDiv = document.createElement('div');
    const editDiv = document.createElement('div');
    const removeDiv = document.createElement('div');

    const addIcon = new Image();
    addIcon.src = Create;
    addIcon.classList.add('projAdd');

    const editIcon = new Image();
    editIcon.src = Edit;
    editIcon.classList.add('projEdit');

    const remIcon = new Image();
    remIcon.src = Remove;
    remIcon.classList.add('projRemove');

    addDiv.appendChild(addIcon);
    editDiv.appendChild(editIcon);
    removeDiv.appendChild(remIcon);
    
    buttonCont.appendChild(addDiv);
    buttonCont.appendChild(editDiv);
    buttonCont.appendChild(removeDiv);
    buttonCont.classList.add("projectOptions");

    projDiv.appendChild(projCheckbox);
    projDiv.appendChild(projNameSpan);
    projDiv.appendChild(buttonCont);
    projDiv.classList.add("project");

    mainSec.appendChild(projDiv);
    mainSec.appendChild(taskSecUL);
    
    //check for tasks with a loop and display each
    checkForTasks(project);

    //call eventListener here
    projectEListeners();//WILL HAVE TO ADD EVENT LISTENERS FOR TASKS HERE???
}

export function checkForTasks(proj){
    //given proj as param we will check if it contains any tasks that need to be created
    const taskArr = proj.toDoList;
    if(taskArr){
        for(var i = 0; i < taskArr.length; i++){
            displayTaskInMain(taskArr[i]);
        }
    }
}

export function checkForImportantTasks(proj){
    const taskArr = proj.toDoList;
    if(taskArr){
        for(var i = 0; i < taskArr.length; i++){
            if(taskArr[i].tPrio == 'high'){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForTodaysTasks(proj){
    const taskArr = proj.toDoList;
    const wrapDate = new Date();
    const today = format(wrapDate, 'yyyy-MM-dd');
    const todayDate = new Date(today);
    if(taskArr){
        for(var i = 0; i < taskArr.length; i++){
            //check dates here.
            const wrapformatTaskDate = format(taskArr[i].tDue, 'yyyy-MM-dd');
            const ftd = new Date(wrapformatTaskDate);
            //const valueTest = isEqual(ftd, todayDate);
            // console.log("format task date: " + ftd);
            // console.log("todays date: " + today);
            // console.log("isEqual value: " + valueTest);
            if(isEqual(ftd, todayDate)){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function clearMain(){
    document.removeEventListener('click', _testering);
    while(mainSec.firstChild){
        mainSec.removeChild(mainSec.firstChild)
    }
}