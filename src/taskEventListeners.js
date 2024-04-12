import { dqs, taskArr } from "./menuEventListeners";
import { clearTaskMain } from "./taskDOM";
import { taskOverlay, taskOverlayListeners } from "./taskForm";//printTasks
import { infoOverlayListener } from "./infoDescListeners";
import { format } from "date-fns";//parse

export function taskEListeners(){//wrapper function for task event listener
    document.addEventListener('click', _taskTestering)
};

export const infoOverlay = dqs(".infoDescOverlay");
export const infoSection = dqs(".infoSec");
export let taskEditButton = false;
export let editTask = null;
export let titleDispClicked = false;
let taskRemButton = false;

export function _taskTestering(e){
    const taskName = e.target.parentElement.parentElement.parentElement;//get title of clicked task

    if(e.target.matches(".taskProjEdit")){// if clicked on edit
        taskEditButton = true;//set task edit 'flag' true
        editTask = checkThroughAllTasks(taskName.textContent);//find task given name as param
        editTaskForm(editTask);//bring down form prefilled with title and due date, to be edited
    }
    else if(e.target.matches(".taskProjRemove")){//if remove is clicked
        taskRemButton = true;
        const taskTemp = checkThroughAllTasks(taskName.textContent);//get task given param
        removeTaskFromArr(taskName.textContent);//go through array and remove task passed as param
        clearTaskMain(taskName.textContent);//remove task from main passed as param
    }
    else if(e.target.matches(".titleTaskDisp")){//title clicked
        titleDispClicked = true;
        const taskName2 = e.target.parentElement;//task name
        const infoTask = checkThroughAllTasks(taskName2.textContent);//find task in arr
        infoDescOverlayTask(infoTask);//bring down overlay with info of task
    }
    //checkbox here too blaaaah
}

function removeTaskFromArr(taskName){
    for(var i = 0; i < taskArr.length; i++){//go through array if task name matches param
        if(taskArr[i]._tTitle == taskName){
            taskArr.splice(i, 1);//remove task from array
        }
    }
    localStorage.setItem('tasks', JSON.stringify(taskArr));//set localStorage
}

function checkThroughAllTasks(taskName){//go through all tasks
    for(var a = 0; a < taskArr.length; a++){//if task title matches param 
        if(taskArr[a]._tTitle == taskName){
            return taskArr[a];//return that task
        }
    }
}

export function getTaskNameLi(){//??????????????????????
    return theThing.target.parentElement.parentElement.parentElement;
}

function infoDescOverlayTask(task){//given task as param fill the info overlay with its info and bring down the overlay
    infoOverlay.style.animation = "projectSlideDown 1.5s forwards";

    infoSection.textContent += "DUE DATE: " + task._tDue + " DESCRIPTION: " + task._tDesc + " PROJECT: " + task._tProj;
    infoOverlayListener();//listen for close of info overlay
}

export function editTaskForm(task){//bring down the task overlay 
    taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
    const taskTitleForm = dqs("#tTitle");
    const taskDateForm = dqs("#tDueDate");
    taskTitleForm.value = task._tTitle;//prefill the title input with task param
    
    const tempDate = new Date(task._tDue);//prefill the dueDate input with task param
    const formatDate = format(tempDate, 'yyyy-MM-dd');
    taskDateForm.value = formatDate;
    taskOverlayListeners();//set listeners
}