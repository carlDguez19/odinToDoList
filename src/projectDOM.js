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
    const projSide = dqs(".sidebarProject");//select sidebar section in html
    let projTitle = document.createElement('span');
    projTitle.textContent = projectTitle;//create span and add project title to it
    projTitle.classList.add('projectNameSidebar');//add styling to it via class
    projSide.appendChild(projTitle);//append to sidebar section
}
export function removeProjectFromSidebar(projectTitle){
    const sidebarProj = dqs(".sidebarProject");//get children of sidebar section aka other projects
    const sidebarProjChildren = sidebarProj.children;
    for(let i = 0; i < sidebarProjChildren.length; i++){//look through projects in sidebar and remove if title matches with param
        if(sidebarProjChildren[i].textContent == projectTitle){
            sidebarProj.removeChild(sidebarProjChildren[i]);
        }
    }
}
export function editProjectInSidebar(projectTitle){
    const sidebarProj = dqs(".sidebarProject");
    const sidebarProjChildren = sidebarProj.children;//get children of sidebar section aka other projects
    for(let i = 0; i < sidebarProjChildren.length; i++){
        if(sidebarProjChildren[i].textContent == projectTitle){//look through projects in sidebar if matches...
            sidebarProjChildren[i].textContent = projArr[sidebarProjChildren.length-1]._title;//...substitute with last pushed in projects info
        }
    }
}

export function editTasksToNewProj(projectTitle){
    for(let i = 0; i < taskArr.length; i++){//go through task arr if task proj matches param then switch...
        if(taskArr[i]._tProj == projectTitle){//... to last pushed in proj ._tProj
            taskArr[i]._tProj = projArr[projArr.length-1]._title;
            localStorage.setItem('tasks', JSON.stringify(taskArr));
        }
    }
}

export function editProjectNameMain(){//change current displayed project name to new edited project name
    const OGProjName = dqs(".projectNameMain");
    OGProjName.textContent = projArr[projArr.length-1]._title;
}

export function displayProjectInMain(project){
    clearMain();
    const projDiv = document.createElement('div');//main div that will display the project

    const taskSecUL = document.createElement('ul');//section that can hold individual tasks
    taskSecUL.classList.add("todoUL")
    
    const projCheckbox = document.createElement('input');//checkbox to be attached to the displyed project
    projCheckbox.type = "checkbox";
    projCheckbox.classList.add("projectCheckbox");

    
    const projNameSpan = document.createElement('span');//span that will hold the clickable title to display info
    if(project._title.length > 30){//jif title to long then slice it to be shorter and add ellipsis
        let mainModProjTitle = project._title.slice(0,31);
        projNameSpan.textContent = mainModProjTitle + "...";
    }else{
        projNameSpan.textContent = project._title;//else keep og title
    }
    projNameSpan.classList.add("projectNameMain");//add styling via class

    
    const buttonCont = document.createElement('div');//add container that will hold edit, remove, and addTask
    
    const addDiv = document.createElement('div');//addTask container
    const editDiv = document.createElement('div');//edit container
    const removeDiv = document.createElement('div');//remove container

    const addIcon = new Image();//adding images and styling to their respective containers
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
    removeDiv.appendChild(remIcon);//append icons to containers
    
    buttonCont.appendChild(addDiv);
    buttonCont.appendChild(editDiv);
    buttonCont.appendChild(removeDiv);
    buttonCont.classList.add("projectOptions");//append containers to button container

    projDiv.appendChild(projCheckbox);
    projDiv.appendChild(projNameSpan);
    projDiv.appendChild(buttonCont);
    projDiv.classList.add("project");//add checkbox, title, and button container to project div

    mainSec.appendChild(projDiv);//add project div to main section
    mainSec.appendChild(taskSecUL);//add task section to main section
    
    checkForTasks(project);//check if tasks are under the newly created project if so, display them in main

    projectEListeners();
}

export function checkForTasks(proj){//go through task arr if project of current task matches...
    if(taskArr){//...proj parameter then display task in the main section(taskUL)
        for(var i = 0; i < taskArr.length; i++){
            if(taskArr[i]._tProj == proj._title){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForImportantTasks(tArr){//go through task arr if task priority is high display in main sec
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            if(tArr[i]._tPrio == 'high'){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForTodaysTasks(tArr){//if task contains todays date then display in main sec
    const wrapDate = new Date();//get todays date
    const today = format(wrapDate, 'yyyy-MM-dd');//format todays date to yyyy-MM-dd format
    const todayDate = new Date(today);//wrap the formatted date in new Date
    if(tArr){
        for(var i = 0; i < tArr.length; i++){//wrap task in new task and format its ._tDue then wrap in new Date aswell
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj);
            const wrapformatTaskDate = format(parseISO(tempTask._tDue), 'yyyy-MM-dd');//check dates here... tempTask.tDue
            const ftd = new Date(wrapformatTaskDate);

            if(isEqual(ftd, todayDate)){//check todays date with the tasks date if its equal display in main
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForWeekTasks(tArr){
    // const wrapDate = new Date();//get todays date
    // const today = format(wrapDate, 'yyyy-MM-dd');//format todays date to yyyy-MM-dd format
    // const todayDate = new Date(today);//wrap the formatted date in new Date
    if(tArr){
        for(var i = 0; i < tArr.length; i++){//wrap task in new task and format its ._tDue then wrap in new Date aswell
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj)
            const wrapformatTaskDate = format(parseISO(tempTask._tDue), 'yyyy-MM-dd');//format date of wrapper task
            const ftd = new Date(wrapformatTaskDate);//then put formatted date through new date

            if(isThisWeek(ftd)){//check the tasks date if its in the same week display in main
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function clearMain(){//go through main section
    document.removeEventListener('click', _testering);
    while(mainSec.firstChild){//as long as content(children) is detected in the main section remove it
        mainSec.removeChild(mainSec.firstChild)
    }
}