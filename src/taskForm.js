import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { displayNeedTitle } from "./projectForm";
import { displayTaskInMain } from "./taskDOM";
import { clearTaskMain } from "./taskDOM";
import { taskEditButton, editTask, editTaskProjValue } from "./taskEventListeners";

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
    console.log("taskEditButton bool value: " + taskEditButton);
    if(taskEditButton){
        // // // // //const taskName2 = getTaskNameLi
        // // // // //insert edit algorithm here
        // // // // //let taskName = e.target.parentElement.parentElement.textContent;
        // // // // //console.log("taskName in taskSubmit poop: " + taskName.textContent);
        //REMOVE OLD TASK USING ALGORITHM FROM REMOVETASK SECTION (editTask is task to be removed)
        const moddedTask = extractDataForTask();
        //const projNameEd = dqs(".projectNameMain");
        const projEd = findProjectInArr(moddedTask.tProj);
        clearTaskMain(editTask.tTitle);
        projEd.editTask(editTask.tTitle);
        displayTaskInMain(moddedTask);
        projEd.removeLastTask();
        //projEd.removeTaskFromArr(moddedTask.tTitle);
        projEd.printTasks();
        // // // // //projEd.editTask(taskName.textContent);//NOT NEEDED??
        // // // // //taskName.textContent = modedTask.tTitle;//NOT NEEDED??
        // // // // checkULChildrenEditTask(editTask);
        // // // // projEd.removeTaskFromArr(moddedTask.tTitle);
        // // // // taskEditButton = false;
        // // // // moddedTask = null;
        taskEditButton = false;
        clearEvLis();
    }
    else{
        const madeTask = extractDataForTask();
        if(madeTask){
            displayTaskInMain(madeTask);//current project is already detected in extractDataForTask func..may not need proj and ul as params
        }
        taskFormClear();
        clearEvLis();    //NEED TO FIND A WAY TO CLEAR EVENTLISTENER SOMEWHERE ELSE?????
    }
}

function clearEvLis(){
    taskSubmit.removeEventListener('click', _taskSubmit);
    editTask = null;
}

export function extractDataForTask(){
    const taskTitle = document.getElementById("tTitle").value;
    const taskDesc = document.getElementById("tDescription").value;
    const taskDueDate = document.getElementById("tDueDate").value;
    const taskPrio = document.getElementById("tTaskPrio").value;
    const taskProj = getProjectBelonging();
    
    const fndProj = findProjectInArr(taskProj);

    if(taskTitle && taskDueDate){
        const taskMade = fndProj.newTask(taskTitle, taskDesc, taskDueDate, taskPrio, taskProj);
        taskFormClear();
        return taskMade;
    }else{
        displayNeedTitle();
        taskFormClear();
        taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
        return;
    }
}

function getProjectBelonging(){
    if(editTask){
        return editTask.tProj;
    }else{
        const temp = dqs(".projectNameMain");//SHOULD NOT BE NEEDED GIVEN PARAM
        return temp.textContent;

        // const temporary = findProjectInArr(taskProj);
        // return temporary;
    }
}

export function taskFormClear(){
    document.getElementById("tTitle").value = "";
    document.getElementById("tDescription").value = "";
    document.getElementById("tDueDate").value = "";
    document.getElementById("tTaskPrio").value = "Select One";
}