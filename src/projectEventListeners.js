import { dqs, taskArr } from "./menuEventListeners";
import { projArr } from "./menuEventListeners";
import { clearMain } from "./projectDOM";
import { taskOverlay, taskOverlayListeners } from "./taskForm";
import { removeProjectFromSidebar } from "./projectDOM";
import { infoOverlay, infoSection } from "./taskEventListeners";
import { infoOverlayListener } from "./infoDescListeners";

const projOverlay1 = document.querySelector(".newProjectOverlay");
export let editButtonClicked = false;
export let currTitle2 = null;

export function projectEListeners(){
    document.addEventListener('click', _testering)
};

export var _testering = function(e){//all buttons on project dom
        const editButton = e.target.matches(".projEdit");
        const removeButton = e.target.matches(".projRemove");
        const addTaskButton = e.target.matches(".projAdd");
        const projTitle = e.target.matches(".projectNameMain");
        const currTitle = dqs(".projectNameMain");
        currTitle2 = currTitle;
        
        if(editButton){//edit button pressed
            editForm(currTitle.textContent);
            editButtonClicked = true;
        }
        else if(removeButton){//remove button pressed
            removeProjectFromSidebar(currTitle.textContent); 
            removeProjArr(currTitle.textContent);
            removeTasksOfRemProj(currTitle.textContent);//remove the tasks from taskArr of project that is to be removed
            clearMain();//clear the main display area
        }
        else if(addTaskButton){//add task button pressed
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
            taskOverlayListeners();
        }
        else if(projTitle){//title clicked
            const projInfo = findProjectInArr(currTitle.textContent);
            infoDescOverlayProj(projInfo);
        }
}

function removeTasksOfRemProj(proj){
    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tProj == proj){//go through task array and check for proj of removed project
            taskArr.splice(i, 1);
            i--;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskArr));//set localStorage after tasks are removed
}

function infoDescOverlayProj(proj){
    infoOverlay.style.animation = "projectSlideDown 1.5s forwards";//bring down info overlay filled with description

    infoSection.textContent = "DESCRIPTION: " + proj._description;
    infoOverlayListener();
}

function editForm(projectTitle){
    projOverlay1.style.animation = 'projectSlideDown 1.5s forwards';//bring down edit overlay and fill with current title
    const titleIn = dqs("#title");
    titleIn.value = projectTitle;
}

export function removeProjArr(title){//given title look for proj in arr and splice out
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == title){
            projArr.splice(i,1);
            localStorage.setItem('projects', JSON.stringify(projArr));//set localStorage after removal
        }
    }
}

export function findProjectInArr(title){//given title look for proj and return it
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == title){
            return projArr[i];
        }
    }
}