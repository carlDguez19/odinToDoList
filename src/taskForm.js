import { dqs, taskArr } from "./menuEventListeners";
import { displayNeedTitle } from "./projectForm";
import { displayTaskInMain } from "./taskDOM";
import { clearTaskMain } from "./taskDOM";
import { taskEditButton, editTask } from "./taskEventListeners";//editTaskProjValue
import { parse } from "date-fns";//format
import { Task } from "./taskClass";

export const taskOverlay = dqs(".newTaskOverlay");//task form overlay
const taskClose = dqs(".taskCloseButton");//close button on form
const taskSubmit = dqs(".taskSubmitButton");//submit button on form

export function taskOverlayListeners(){//wrapper method for event listeners
    taskClose.addEventListener('click', function(){//cancel button event listener
        taskFormClear();//clear task form
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards"//remove form
    });
    taskSubmit.addEventListener('click', _taskSubmit);//submit button event listener
}

export function _taskSubmit(){
    taskOverlay.style.animation = "projectSlideUp 1.5s forwards"//get rid of task form
    const currentDate = new Date();//gets todays date
    if(taskEditButton){//if edit has been pressed
        const moddedTask = extractDataForTask();//get info from submitted form
        clearTaskMain(editTask._tTitle);//remove task passed as param from main sec
        editTaskFunc(editTask._tTitle);//find task in arr as param and transfer info from last entry in array to found task in arr
        displayTaskInMain(moddedTask);//display the task from the info gathered from the edit form
        taskArr.splice(taskArr.length-1,1);//REMOVE THE LAST PROJECT IN ARRAY..NOW USELESS
        localStorage.setItem('tasks', JSON.stringify(taskArr));//set localStorage because of removed last task
        taskEditButton = false;//reset variable
        clearEvLis();//remove event listener
    }
    else{//normal task form fill(no edit)
        const madeTask = extractDataForTask();//get info from filled form
        if(madeTask){//make sure task is created
            displayTaskInMain(madeTask);//display it
        }
        taskFormClear();//clear task form
        clearEvLis();//remove submit event listener for task form
    }
}

function editTaskFunc(title){
    for(let i = 0; i < taskArr.length; i++){//go through task arr, if curr task title matches title param...
        if(taskArr[i]._tTitle == title){//...switch that tasks info with the last task in arr info
            taskArr[i]._tTitle = taskArr[taskArr.length-1]._tTitle;
            taskArr[i]._tDesc = taskArr[taskArr.length-1]._tDesc;
            taskArr[i]._tDue = taskArr[taskArr.length-1]._tDue;
            taskArr[i]._tPrio = taskArr[taskArr.length-1]._tPrio;
            taskArr[i]._tProj = taskArr[taskArr.length-1]._tProj;
            localStorage.setItem('tasks', JSON.stringify(taskArr));//set local storage since array has been modded
        }
    }
}

function clearEvLis(){//remove event listener
    taskSubmit.removeEventListener('click', _taskSubmit);
    editTask = null;
}

export function extractDataForTask(){//get info for new task
    const taskTitle = document.getElementById("tTitle").value;//get title from form
    const taskDesc = document.getElementById("tDescription").value;//get desc from form
    const taskDueDate = document.getElementById("tDueDate").value;//get due date from form
    const taskPrio = document.getElementById("tTaskPrio").value;//get priority from form
    
    const temp = dqs(".projectNameMain");//get project from main sec proj

    const taskProj = temp.textContent;//''

    const parseTaskDueDate = parse(taskDueDate, 'yyyy-MM-dd', new Date());//parse the date for info received from form

    if(taskTitle && taskDueDate){//make sure a title and due date was entered if so...
        if(checkDupTaskName(taskTitle)){//check if the task title has already been used if so...
            displayNeedTitle();//display error
            taskFormClear();//clear the task form
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";//brind down the task form
            return;
        }
        const taskMade = new Task(taskTitle, taskDesc, parseTaskDueDate, taskPrio, taskProj);//if og title create new task with all info
        taskArr.push(taskMade);//push into task array
        localStorage.setItem('tasks', JSON.stringify(taskArr));//set local storage
        taskFormClear();//clear task form
        return taskMade;//return task
    }else{//if missing title, or dueDate or both...
        displayNeedTitle();//display error
        taskFormClear();//clear form
        taskOverlay.style.animation = "projectSlideDown 1.5s forwards";//brind down task form
        return;
    }
}

function checkDupTaskName(taskName){
    for(let i = 0; i < taskArr.length; i++){//got through task arr looking for task titles that match the newly entered title name
        if(taskArr[i]._tTitle == taskName){//if dup title found return true
            return true;
        }
    }
    return false;//if original return false
}

export function taskFormClear(){//clear all inputs on form to empty
    document.getElementById("tTitle").value = "";
    document.getElementById("tDescription").value = "";
    document.getElementById("tDueDate").value = "";
    document.getElementById("tTaskPrio").value = "Select One";
}