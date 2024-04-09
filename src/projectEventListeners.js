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

export var _testering = function(e){
        const editButton = e.target.matches(".projEdit");
        const removeButton = e.target.matches(".projRemove");
        const addTaskButton = e.target.matches(".projAdd");
        const projTitle = e.target.matches(".projectNameMain");
        const currTitle = dqs(".projectNameMain");
        currTitle2 = currTitle;
        
        if(editButton){
            editForm(currTitle.textContent);
            editButtonClicked = true;
        }
        else if(removeButton){
            removeProjectFromSidebar(currTitle.textContent); 
            removeProjArr(currTitle.textContent);
            removeTasksOfRemProj(currTitle.textContent);
            clearMain();
        }
        else if(addTaskButton){
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
            taskOverlayListeners();
        }
        else if(projTitle){
            const projInfo = findProjectInArr(currTitle.textContent);
            infoDescOverlayProj(projInfo);
        }
}

function removeTasksOfRemProj(proj){
    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tProj == proj){
            taskArr.splice(i, 1);
            i--;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskArr));
}

function infoDescOverlayProj(proj){
    infoOverlay.style.animation = "projectSlideDown 1.5s forwards";

    infoSection.textContent = "DESCRIPTION: " + proj._description;
    infoOverlayListener();
}

function editForm(projectTitle){
    projOverlay1.style.animation = 'projectSlideDown 1.5s forwards';
    const titleIn = dqs("#title");
    titleIn.value = projectTitle;
}

export function removeProjArr(title){
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == title){
            projArr.splice(i,1);
            localStorage.setItem('projects', JSON.stringify(projArr));
        }
    }
}

export function findProjectInArr(title){
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == title){
            return projArr[i];
        }
    }
}