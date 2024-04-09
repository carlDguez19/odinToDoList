import Remove from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import Edit from '../src/imgs/edit.png';
import { dqs, projArr, taskArr } from './menuEventListeners';
import { projectEListeners } from './projectEventListeners';
import { _testering } from './projectEventListeners';
import { displayTaskInMain } from './taskDOM';
import { isEqual, format, isThisWeek, parseISO } from 'date-fns';//parse, addDays, isWithinInterval
import { Task } from './taskClass';

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
            sidebarProjChildren[i].textContent = projArr[sidebarProjChildren.length-1]._title;
        }
    }
}

export function editTasksToNewProj(projectTitle){
    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tProj == projectTitle){
            taskArr[i]._tProj = projArr[projArr.length-1]._title;
            localStorage.setItem('tasks', JSON.stringify(taskArr));
        }
    }
}

export function editProjectNameMain(){
    const OGProjName = dqs(".projectNameMain");
    OGProjName.textContent = projArr[projArr.length-1]._title;
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
    if(project._title.length > 30){
        let mainModProjTitle = project._title.slice(0,31);
        projNameSpan.textContent = mainModProjTitle + "...";
    }else{
        projNameSpan.textContent = project._title;
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
    
    checkForTasks(project);

    projectEListeners();
}

export function checkForTasks(proj){
    if(taskArr){
        for(var i = 0; i < taskArr.length; i++){
            if(taskArr[i]._tProj == proj._title){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForImportantTasks(tArr){
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            if(tArr[i]._tPrio == 'high'){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForTodaysTasks(tArr){
    const wrapDate = new Date();
    const today = format(wrapDate, 'yyyy-MM-dd');
    const todayDate = new Date(today);
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj);
            const wrapformatTaskDate = format(parseISO(tempTask._tDue), 'yyyy-MM-dd');//check dates here... tempTask.tDue
            const ftd = new Date(wrapformatTaskDate);

            if(isEqual(ftd, todayDate)){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForWeekTasks(tArr){
    const wrapDate = new Date();
    const today = format(wrapDate, 'yyyy-MM-dd');
    const todayDate = new Date(today);
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj)
            const wrapformatTaskDate = format(parseISO(tempTask._tDue), 'yyyy-MM-dd');//check dates here... tempTask.tdue
            const ftd = new Date(wrapformatTaskDate);

            if(isThisWeek(ftd)){
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