import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { displayNeedTitle } from "./projectForm";
import { Task } from "./taskClass";
import { displayTaskInMain } from "./taskDOM";

export const taskOverlay = dqs(".newTaskOverlay");
//const currProj = {};//MIGHT BE OK TO PLACE WITHIN extractDataForTask func

export function taskOverlayListeners(projectParam123){
    const taskClose = dqs(".taskCloseButton");
    const taskSubmit = dqs(".taskSubmitButton");

    taskClose.addEventListener('click', function(){
        taskFormClear();
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"
    });
    taskSubmit.addEventListener('click', function(){
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"
        const madeTask = extractDataForTask(projectParam123);
        if(madeTask){
            displayTaskInMain(madeTask);//current project is already detected in extractDataForTask func..may not need proj and ul as params
            for(let a = 0; a < currProj.toDoList.length; a++){
                console.log((a+1)+ " "+ currProj.toDoList[a].title);
            }
        }
        taskFormClear();
    });
}

export function extractDataForTask(project1234){
    const taskTitle = document.getElementById("tTitle").value;
    const taskDesc = document.getElementById("tDescription").value;
    const taskDueDate = document.getElementById("tDueDate").value;
    const taskPrio = document.getElementById("tTaskPrio").value;
    const taskProj = dqs(".projectNameMain");//SHOULD NOT BE NEEDED GIVEN PARAM

    if(taskTitle && taskDueDate){
        console.log("hereiam");
        const taskMade = new Task(taskTitle, taskDesc, taskDueDate, taskPrio, project1234.title);//taskProj as last param
        //const currProj = findProjectInArr(taskProj);
        project.toDoList.push(taskMade);//currProj.toDoList.push(taskMade); ERROR IS HAPPENING HERE NEED TO FIND A WAY TO ACCES THE ARRAY AND PUSH INTO IT
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