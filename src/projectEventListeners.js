//Event listeners and hadlers for all project-related UI actions
//This module controls editing, removing, and viewing project details,
//as well as opening the task creation overlay from within a project

import { dqs, taskArr } from "./menuEventListeners";
import { projArr } from "./menuEventListeners";
import { clearMain } from "./projectDOM";
import { taskOverlay, taskOverlayListeners } from "./taskForm";
import { removeProjectFromSidebar } from "./projectDOM";
import { infoOverlay, infoSection } from "./taskEventListeners";
import { infoOverlayListener } from "./infoDescListeners";

const projOverlay1 = document.querySelector(".newProjectOverlay");

//Tracks whether the edit button was pressed (used by projectForm.js)
export let editButtonClicked = false;

//Stores the currently displayed project title element
export let currTitle2 = null;

//Attach the main click listener for all project actions
export function projectEListeners(){
    document.addEventListener('click', _testering)
};

//central event handler for project UI interactions
//Handles edit, remove, add-task, and project-info clicks
export var _testering = function(e){
        const editButton = e.target.matches(".projEdit");
        const removeButton = e.target.matches(".projRemove");
        const addTaskButton = e.target.matches(".projAdd");
        const projTitle = e.target.matches(".projectNameMain");
        const currTitle = dqs(".projectNameMain");
        currTitle2 = currTitle;
        
        if(editButton){
            //Open edit overlay and preload current project title
            editForm(currTitle.textContent);
            editButtonClicked = true;
        }
        else if(removeButton){
            //Remove project from sidebar, array, and its tasks
            removeProjectFromSidebar(currTitle.textContent); 
            removeProjArr(currTitle.textContent);
            removeTasksOfRemProj(currTitle.textContent);
            clearMain();
        }
        else if(addTaskButton){
            //Open task creation overlay
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
            taskOverlayListeners();
        }
        else if(projTitle){
            //Show project description overlay
            const projInfo = findProjectInArr(currTitle.textContent);
            infoDescOverlayProj(projInfo);
        }
}

//Remove all tasks belonging to adeleted project
function removeTasksOfRemProj(proj){
    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tProj == proj){
            taskArr.splice(i, 1);
            i--;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskArr));
}

//Display the project description
function infoDescOverlayProj(proj){
    infoOverlay.style.animation = "projectSlideDown 1.5s forwards";
    infoSection.textContent = "DESCRIPTION: " + proj._description;
    infoOverlayListener();
}

//Open the project edit overlay and preload the current title
function editForm(projectTitle){
    projOverlay1.style.animation = 'projectSlideDown 1.5s forwards';
    const titleIn = dqs("#title");
    titleIn.value = projectTitle;
}

//Remove a project from the project array and update localStorage
export function removeProjArr(title){
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == title){
            projArr.splice(i,1);
            localStorage.setItem('projects', JSON.stringify(projArr));
        }
    }
}

//Find and return a project object by its title
export function findProjectInArr(title){
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == title){
            return projArr[i];
        }
    }
}