import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { displayNeedTitle } from "./projectForm";
import { Task } from "./taskClass";

const taskOverlay = dqs(".newTaskOverlay");

export function taskOverlayListeners(){
    const taskClose = dqs(".taskCloseButton");
    const taskSubmit = dqs(".taskSubmitButton");

    taskClose.addEventListener('click', function(){
        taskFormClear();
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"
    });
    taskSubmit.addEventListener('click', function(){
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"

    });
}

export function extractDataForTask(){
    const taskTitle = document.getElementById("tTitle").value;
    const taskDesc = document.getElementById("tDescription").value;
    const taskDueDate = document.getElementById("tDueDate").value;
    const taskPrio = document.getElementById("tTaskPrio").value;
    const taskProj = dqs(".projectNameMain");

    if(taskTitle && taskDueDate){
        const taskMade = new Task(taskTitle, taskDesc, taskDueDate, taskPrio, taskProj);
        const currProj = findProjectInArr(taskProj);
        currProj.toDoList.push(taskMade);
        return taskMade;
    }else{
        displayNeedTitle();
        return;
    }
}

export function taskFormClear(){
    document.getElementById("tTitle").value = "";
    document.getElementById("tDescription").value = "";
    document.getElementById("tDueDate").value = "";
    document.getElementById("tTaskPrio").value = "Select One";
}