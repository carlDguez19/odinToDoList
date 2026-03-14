//DOM utilities and assets for rendering projects in the UI
import Remove from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import Edit from '../src/imgs/edit.png';

import { dqs, projArr, taskArr } from './menuEventListeners';
import { projectEListeners, _testering } from './projectEventListeners';
import { displayTaskInMain } from './taskDOM';

import { isEqual, format, isThisWeek, parseISO } from 'date-fns';//parse, addDays, isWithinInterval
import { Task } from './taskClass';

//Main section where the selected project and its tasks are displayed
export const mainSec = dqs(".projectSection");

//Add project title to the sidebar list
export function addProjectToSidebar(projectTitle){
    const projSide = dqs(".sidebarProject");
    let projTitle = document.createElement('span');
    projTitle.textContent = projectTitle;
    projTitle.classList.add('projectNameSidebar');
    projSide.appendChild(projTitle);
}

//Remove a project title from the sidebar list
export function removeProjectFromSidebar(projectTitle){
    const sidebarProj = dqs(".sidebarProject");
    const sidebarProjChildren = sidebarProj.children;
    for(let i = 0; i < sidebarProjChildren.length; i++){
        if(sidebarProjChildren[i].textContent == projectTitle){
            sidebarProj.removeChild(sidebarProjChildren[i]);
        }
    }
}

//update a project title in the sidebar after editing
export function editProjectInSidebar(projectTitle){
    const sidebarProj = dqs(".sidebarProject");
    const sidebarProjChildren = sidebarProj.children;
    for(let i = 0; i < sidebarProjChildren.length; i++){
        if(sidebarProjChildren[i].textContent == projectTitle){
            //Replace with the most recently updated project title
            sidebarProjChildren[i].textContent = projArr[sidebarProjChildren.length-1]._title;
        }
    }
}

//Update tasks so they belong to the newly edited project name
export function editTasksToNewProj(projectTitle){
    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tProj == projectTitle){
            taskArr[i]._tProj = projArr[projArr.length-1]._title;
            localStorage.setItem('tasks', JSON.stringify(taskArr));
        }
    }
}

//Update the displayed project name in the main section after editing
export function editProjectNameMain(){
    const OGProjName = dqs(".projectNameMain");
    OGProjName.textContent = projArr[projArr.length-1]._title;
}

//Render a selected project and its task list in the main section
export function displayProjectInMain(project){
    clearMain();
    
    const projDiv = document.createElement('div');

    //Container for tasks under this project
    const taskSecUL = document.createElement('ul');
    taskSecUL.classList.add("todoUL")
    
    //checkbox for marking project completion (visual only)
    const projCheckbox = document.createElement('input');
    projCheckbox.type = "checkbox";
    projCheckbox.classList.add("projectCheckbox");

    //Project title (truncated if too long)
    const projNameSpan = document.createElement('span');
    if(project._title.length > 30){
        let mainModProjTitle = project._title.slice(0,31);
        projNameSpan.textContent = mainModProjTitle + "...";
    }else{
        projNameSpan.textContent = project._title;
    }
    projNameSpan.classList.add("projectNameMain");

    //Container for edit, remove, and add-task buttons
    const buttonCont = document.createElement('div');
    
    const addDiv = document.createElement('div');
    const editDiv = document.createElement('div');
    const removeDiv = document.createElement('div');

    //Icons for porject actions
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

    //Build the full project display block
    projDiv.appendChild(projCheckbox);
    projDiv.appendChild(projNameSpan);
    projDiv.appendChild(buttonCont);
    projDiv.classList.add("project");

    mainSec.appendChild(projDiv);
    mainSec.appendChild(taskSecUL);
    
    //Display tasks belonging to this project
    checkForTasks(project);

    //Attach event listeners for project actions
    projectEListeners();
}

//Display all tasks belonging to the given project
export function checkForTasks(proj){
    if(taskArr){
        for(var i = 0; i < taskArr.length; i++){
            if(taskArr[i]._tProj == proj._title){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

//Display all tasks marked as high priority
export function checkForImportantTasks(tArr){
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            if(tArr[i]._tPrio == 'high'){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

//Display tasks due today
export function checkForTodaysTasks(tArr){
    const wrapDate = new Date();
    const today = format(wrapDate, 'yyyy-MM-dd');
    const todayDate = new Date(today);
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj);
            const wrapformatTaskDate = format(parseISO(tempTask._tDue), 'yyyy-MM-dd');
            const ftd = new Date(wrapformatTaskDate);

            if(isEqual(ftd, todayDate)){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

//Display tasks due this week
export function checkForWeekTasks(tArr){
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj)
            const wrapformatTaskDate = format(parseISO(tempTask._tDue), 'yyyy-MM-dd');
            const ftd = new Date(wrapformatTaskDate);

            if(isThisWeek(ftd)){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

//Clear the main section before rendering a new project or filter view
export function clearMain(){
    document.removeEventListener('click', _testering);
    while(mainSec.firstChild){
        mainSec.removeChild(mainSec.firstChild)
    }
}