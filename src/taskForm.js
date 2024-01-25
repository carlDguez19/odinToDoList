import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { displayNeedTitle } from "./projectForm";
import { displayTaskInMain } from "./taskDOM";
import { taskEditButton } from "./taskEventListeners";

export const taskOverlay = dqs(".newTaskOverlay");
const taskClose = dqs(".taskCloseButton");
const taskSubmit = dqs(".taskSubmitButton");

export function taskOverlayListeners(){
    taskClose.addEventListener('click', function(){
        taskFormClear();
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"
    });
    taskSubmit.addEventListener('click', _taskSubmit);
}

export function _taskSubmit(){
    taskOverlay.style.animation = "projectSlideUp 1.5s forwards"
    if(taskEditButton){
        //insert edit algorithm here
        const taskName = e.target.parentElement.parentElement.parentElement.textContent;
        const projNameEd = dqs(".projectNameMain");
        const projEd = findProjectInArr(projNameEd.textContent);
        const modedTask = projEd.getLastTask()
        projEd.editTask(taskName);
        e.target.parentElement.parentElement.parentElement.textContent = modedTask.tTitle;
        projEd.removeTaskFromArr(modedTask.tTitle);
        taskEditButton = false;
    }
    else{
        const madeTask = extractDataForTask();
        if(madeTask){
            displayTaskInMain(madeTask);//current project is already detected in extractDataForTask func..may not need proj and ul as params
        }
        taskFormClear();
        clearEvLis();    
    }
}

function clearEvLis(){
    taskSubmit.removeEventListener('click', _taskSubmit);
}

export function extractDataForTask(proj){
    const taskTitle = document.getElementById("tTitle").value;
    const taskDesc = document.getElementById("tDescription").value;
    const taskDueDate = document.getElementById("tDueDate").value;
    const taskPrio = document.getElementById("tTaskPrio").value;
    
    const temp = dqs(".projectNameMain");//SHOULD NOT BE NEEDED GIVEN PARAM
    const taskProj = temp.textContent;

    const fndProj = findProjectInArr(taskProj);


    if(taskTitle && taskDueDate){
        const taskMade = fndProj.newTask(taskTitle, taskDesc, taskDueDate, taskPrio, fndProj.title);
        taskFormClear();
        return taskMade;
    }else{
        displayNeedTitle();
        taskFormClear();
        taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
        return;
    }
}

export function taskFormClear(){
    document.getElementById("tTitle").value = "";
    document.getElementById("tDescription").value = "";
    document.getElementById("tDueDate").value = "";
    document.getElementById("tTaskPrio").value = "Select One";
}