import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { displayNeedTitle } from "./projectForm";
import { Task } from "./taskClass";

export const taskOverlay = dqs(".newTaskOverlay");
const currProj = {};

export function taskOverlayListeners(){
    const taskClose = dqs(".taskCloseButton");
    const taskSubmit = dqs(".taskSubmitButton");

    taskClose.addEventListener('click', function(){
        taskFormClear();
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"
    });
    taskSubmit.addEventListener('click', function(){
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"
        const madeTask = extractDataForTask();
        if(madeTask){
            displayTaskInMain();
            for(let a = 0; a < currProj.toDoList.length; a++){
                console.log((a+1)+ " "+ currProj.toDoList[a].title);
            }
        }
        taskFormClear();
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
        currProj = findProjectInArr(taskProj);
        currProj.toDoList.push(taskMade);
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