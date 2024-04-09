import { dqs, taskArr } from "./menuEventListeners";
import { clearTaskMain } from "./taskDOM";
import { printTasks, taskOverlay, taskOverlayListeners } from "./taskForm";
import { infoOverlayListener } from "./infoDescListeners";
import { format } from "date-fns";//parse

export function taskEListeners(){
    document.addEventListener('click', _taskTestering)
};

export const infoOverlay = dqs(".infoDescOverlay");
export const infoSection = dqs(".infoSec");
export let taskEditButton = false;
export let editTask = null;
export let titleDispClicked = false;
let taskRemButton = false;

export function _taskTestering(e){
    const taskName = e.target.parentElement.parentElement.parentElement;

    if(e.target.matches(".taskProjEdit")){
        taskEditButton = true;
        editTask = checkThroughAllTasks(taskName.textContent);
        editTaskForm(editTask);
    }
    else if(e.target.matches(".taskProjRemove")){
        taskRemButton = true;
        const taskTemp = checkThroughAllTasks(taskName.textContent);
        removeTaskFromArr(taskName.textContent);
        printTasks();//MIGHT NOT NEED
        clearTaskMain(taskName.textContent);
    }
    else if(e.target.matches(".titleTaskDisp")){
        titleDispClicked = true;
        const taskName2 = e.target.parentElement;
        const infoTask = checkThroughAllTasks(taskName2.textContent);
        infoDescOverlayTask(infoTask);
    }
    //checkbox here too blaaaah
}

function removeTaskFromArr(taskName){
    for(var i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tTitle == taskName){
            taskArr.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskArr));
}

function checkThroughAllTasks(taskName){
    for(var a = 0; a < taskArr.length; a++){
        if(taskArr[a]._tTitle == taskName){
            return taskArr[a];
        }
    }
}

export function getTaskNameLi(){
    return theThing.target.parentElement.parentElement.parentElement;
}

function infoDescOverlayTask(task){
    infoOverlay.style.animation = "projectSlideDown 1.5s forwards";

    infoSection.textContent += "DUE DATE: " + task._tDue + " DESCRIPTION: " + task._tDesc + " PROJECT: " + task._tProj;
    infoOverlayListener();
}

export function editTaskForm(task){
    taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
    const taskTitleForm = dqs("#tTitle");
    const taskDateForm = dqs("#tDueDate");
    taskTitleForm.value = task._tTitle;
    
    const tempDate = new Date(task._tDue);
    const formatDate = format(tempDate, 'yyyy-MM-dd');
    taskDateForm.value = formatDate;
    taskOverlayListeners();
}