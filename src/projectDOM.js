import Remove from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import Edit from '../src/imgs/edit.png';
import { dqs, projArr, taskArr } from './menuEventListeners';
import { projectEListeners } from './projectEventListeners';
import { _testering } from './projectEventListeners';
import { displayTaskInMain } from './taskDOM';
import { isEqual, format, parse, addDays, isWithinInterval, isThisWeek, parseISO } from 'date-fns';
import { ta } from 'date-fns/locale';
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
            console.log("found sidebar project named " + sidebarProjChildren[i].textContent);//DEBUG
            sidebarProjChildren[i].textContent = projArr[sidebarProjChildren.length-1]._title;//projArr[sidebarProjChildren.length-1].title
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
    
    //check for tasks with a loop and display each
    checkForTasks(project);

    //call eventListener here
    projectEListeners();//WILL HAVE TO ADD EVENT LISTENERS FOR TASKS HERE???
}

export function checkForTasks(proj){
    //given proj as param we will check if it contains any tasks that need to be created
    //const taskArr = proj._toDoList;
    if(taskArr){
        for(var i = 0; i < taskArr.length; i++){//MIGHT HAVE TO TRANSFER THE TASK TO A NEW TASK AND THEN SEND THE NEW TASK TO THE displayTaskInMain FUNCTION
            if(taskArr[i]._tProj == proj._title){
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForImportantTasks(tArr){
    //const taskArr = proj.toDoList;
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            if(tArr[i]._tPrio == 'high'){//MIGHT HAVE TO TRANSFER THE TASK TO A NEW TASK AND THEN SEND THE NEW TASK TO THE displayTaskInMain FUNCTION
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForTodaysTasks(tArr){
    //const taskArr = proj.toDoList;
    const wrapDate = new Date();
    const today = format(wrapDate, 'yyyy-MM-dd');
    const todayDate = new Date(today);
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            //console.log(tArr[i]._tDue);
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj);
            const wrapformatTaskDate = format(parseISO(tempTask.tDue), 'yyyy-MM-dd');//check dates here
            const ftd = new Date(wrapformatTaskDate);
            //const valueTest = isEqual(ftd, todayDate);
            //console.log("format task date: " + ftd);
            //console.log("todays date: " + todayDate);
            //console.log("isEqual value: " + valueTest);

            if(isEqual(ftd, todayDate)){//MIGHT HAVE TO TRANSFER THE TASK TO A NEW TASK AND THEN SEND THE NEW TASK TO THE displayTaskInMain FUNCTION
                displayTaskInMain(taskArr[i]);
            }
        }
    }
}

export function checkForWeekTasks(tArr){
    //const taskArr = proj.toDoList;
    const wrapDate = new Date();
    const today = format(wrapDate, 'yyyy-MM-dd');
    const todayDate = new Date(today);
    if(tArr){
        for(var i = 0; i < tArr.length; i++){
            const tempTask = new Task(tArr[i]._tTitle, tArr[i]._tDesc, tArr[i]._tDue, tArr[i]._tPrio, tArr[i]._tProj)
            const wrapformatTaskDate = format(parseISO(tempTask.tDue), 'yyyy-MM-dd');//check dates here
            const ftd = new Date(wrapformatTaskDate);

            //const futureDate = addDays(ftd, 7);
            //const valueTest = isEqual(ftd, todayDate);
            //console.log("format task date: " + ftd);
            // console.log("todays date: " + today);
            // console.log("isEqual value: " + valueTest);
            if(isThisWeek(ftd)){//isWithinInterval//MIGHT HAVE TO TRANSFER THE TASK TO A NEW TASK AND THEN SEND THE NEW TASK TO THE displayTaskInMain FUNCTION
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