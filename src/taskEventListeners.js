//Handles all task-related UI interactions: editing, removing and viewing details
//This module listens for clicks inside the task list and routes each action to
//the correct handler. It connects the DOM to the underlying task data model.

import { dqs, taskArr } from "./menuEventListeners";
import { clearTaskMain } from "./taskDOM";
import { taskOverlay, taskOverlayListeners } from "./taskForm";//printTasks
import { infoOverlayListener } from "./infoDescListeners";
import { format } from "date-fns";//parse

//Attach the main click listener for all task actions
export function taskEListeners(){
    document.addEventListener('click', _taskTestering)
};

//shared UI elements for the task info overlay
export const infoOverlay = dqs(".infoDescOverlay");
export const infoSection = dqs(".infoSec");

//flags used by taskForm.js to determine whether the user is editing a task
export let taskEditButton = false;
export let editTask = null;
export let titleDispClicked = false;
let taskRemButton = false;

//Central event handler for task interactions(edit, remove, info)
export function _taskTestering(e){
    //each task row is structured as: <li>: title + buttons
    const taskName = e.target.parentElement.parentElement.parentElement;

    if(e.target.matches(".taskProjEdit")){
        //edut button clicked
        taskEditButton = true;
        editTask = checkThroughAllTasks(taskName.textContent);//find task object
        editTaskForm(editTask);//open overlay prefilled with task data
    }
    else if(e.target.matches(".taskProjRemove")){
        //remove button clicked
        taskRemButton = true;
        const taskTemp = checkThroughAllTasks(taskName.textContent);
        removeTaskFromArr(taskName.textContent);//remove from array + localStorage
        clearTaskMain(taskName.textContent);//remove from DOM
    }
    else if(e.target.matches(".titleTaskDisp")){
        //task title clicked: show info overlay
        titleDispClicked = true;
        const taskName2 = e.target.parentElement;
        const infoTask = checkThroughAllTasks(taskName2.textContent);
        infoDescOverlayTask(infoTask);
    }
    //checkbox behavior would go here if implemented
}

//Remove a task from the array and update localStorage
function removeTaskFromArr(taskName){
    for(var i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tTitle == taskName){
            taskArr.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskArr));
}

//Find and return a task object by its title
function checkThroughAllTasks(taskName){
    for(var a = 0; a < taskArr.length; a++){ 
        if(taskArr[a]._tTitle == taskName){
            return taskArr[a];
        }
    }
}

//Display the task info overlay with full details
function infoDescOverlayTask(task){
    infoOverlay.style.animation = "projectSlideDown 1.5s forwards";

    infoSection.textContent += "DUE DATE: " + task._tDue + " DESCRIPTION: " + task._tDesc + " PROJECT: " + task._tProj;
    infoOverlayListener();//listen for close of info overlay
}

//open the task edit overlay and prefill it with the task's current data
export function editTaskForm(task){
    taskOverlay.style.animation = "projectSlideDown 1.5s forwards";

    const taskTitleForm = dqs("#tTitle");
    const taskDateForm = dqs("#tDueDate");

    taskTitleForm.value = task._tTitle;
    
    //convert stored date into yyyy-MM-dd format for input fields
    const tempDate = new Date(task._tDue);
    const formatDate = format(tempDate, 'yyyy-MM-dd');
    taskDateForm.value = formatDate;

    taskOverlayListeners();
}