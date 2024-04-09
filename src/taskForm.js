import { dqs, taskArr } from "./menuEventListeners";
import { displayNeedTitle } from "./projectForm";
import { displayTaskInMain } from "./taskDOM";
import { clearTaskMain } from "./taskDOM";
import { taskEditButton, editTask } from "./taskEventListeners";//editTaskProjValue
import { parse } from "date-fns";//format
import { Task } from "./taskClass";

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
    const currentDate = new Date();//gets todays date
    if(taskEditButton){
        const moddedTask = extractDataForTask();
        clearTaskMain(editTask._tTitle);
        editTaskFunc(editTask._tTitle);
        displayTaskInMain(moddedTask);
        taskArr.splice(taskArr.length-1,1);//REMOVE THE LAST PROJECT IN ARRAY..NOW USELESS
        localStorage.setItem('tasks', JSON.stringify(taskArr));
        taskEditButton = false;
        clearEvLis();
    }
    else{
        const madeTask = extractDataForTask();
        if(madeTask){
            displayTaskInMain(madeTask);
        }
        taskFormClear();
        clearEvLis();
    }
}

function editTaskFunc(title){
    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tTitle == title){
            taskArr[i]._tTitle = taskArr[taskArr.length-1]._tTitle;
            taskArr[i]._tDesc = taskArr[taskArr.length-1]._tDesc;
            taskArr[i]._tDue = taskArr[taskArr.length-1]._tDue;
            taskArr[i]._tPrio = taskArr[taskArr.length-1]._tPrio;
            taskArr[i]._tProj = taskArr[taskArr.length-1]._tProj;
            localStorage.setItem('tasks', JSON.stringify(taskArr));
        }
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
    
    const temp = dqs(".projectNameMain");

    const taskProj = temp.textContent;

    const parseTaskDueDate = parse(taskDueDate, 'yyyy-MM-dd', new Date());

    if(taskTitle && taskDueDate){
        if(checkDupTaskName(taskTitle)){
            displayNeedTitle();
            taskFormClear();
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
            return;
        }
        const taskMade = new Task(taskTitle, taskDesc, parseTaskDueDate, taskPrio, taskProj);
        taskArr.push(taskMade);
        localStorage.setItem('tasks', JSON.stringify(taskArr));
        taskFormClear();
        return taskMade;
    }else{
        displayNeedTitle();
        taskFormClear();
        taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
        return;
    }
}

function checkDupTaskName(taskName){
    for(let i = 0; i < taskArr.length; i++){
        if(taskArr[i]._tTitle == taskName){
            return true;
        }
    }
    return false;
}

export function taskFormClear(){
    document.getElementById("tTitle").value = "";
    document.getElementById("tDescription").value = "";
    document.getElementById("tDueDate").value = "";
    document.getElementById("tTaskPrio").value = "Select One";
}