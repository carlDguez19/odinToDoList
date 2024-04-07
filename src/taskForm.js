import { dqs, taskArr } from "./menuEventListeners";//todayArr and weekArr will not be needed!!!!!
import { findProjectInArr } from "./projectEventListeners";
import { displayNeedTitle } from "./projectForm";
import { displayTaskInMain } from "./taskDOM";
import { clearTaskMain } from "./taskDOM";
import { taskEditButton, editTaskProjValue, editTask } from "./taskEventListeners";
import { parse, format } from "date-fns";
import { Project } from "./projectClass";
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
    console.log("taskEditButton bool value: " + taskEditButton);
    const currentDate = new Date();//gets todays date
    //const today = format(currentDate, 'yyyy-MM-dd');
    if(taskEditButton){
        const moddedTask = extractDataForTask();
        //const projNameEd = dqs(".projectNameMain");
        //const projEd = findProjectInArr(moddedTask.tProj);
        clearTaskMain(editTask._tTitle);
        editTaskFunc(editTask._tTitle);
        displayTaskInMain(moddedTask);
        taskArr.splice(taskArr.length-1,1);//REMOVE THE LAST PROJECT IN ARRAY..NOW USELESS
        localStorage.setItem('tasks', JSON.stringify(taskArr));
        // projEd.removeLastTask();
        // projEd.removeTaskFromArr(moddedTask.tTitle);
        printTasks(moddedTask._tProj);        
        taskEditButton = false;
        clearEvLis();
    }
    else{
        const madeTask = extractDataForTask();
        if(madeTask){
            
            //const madeDate = madeTask.tDue;
            //const parseDate = parse(madeDate, 'yyyy-MM-dd', new Date());//SHOULD NOT BE NEEDED ANYMORE
            
            displayTaskInMain(madeTask);//current project is already detected in extractDataForTask func..may not need proj and ul as params
            //date-fns GOES HERE TO DETERMINE TODAY AND NEXT WEEKS TASKS
            //MAYBE THE SEMI PERMANENT SERVER GOES HERE TOO???

            //if parseDate is today then add to todayArr and display
            //else if it is within the coming week add to weekArr and display
            //this can be done within a function
        }
        taskFormClear();
        clearEvLis();    //NEED TO FIND A WAY TO CLEAR EVENTLISTENER SOMEWHERE ELSE?????
    }
}

export function printTasks(){
    console.log("tasks in arr are the following: ")
    for(let i = 0; i < taskArr.length; i++){
        console.log(taskArr[i]._tTitle);
    }
}

function editTaskFunc(title){
    for(let i = 0; i < taskArr.length; i++){//for(let i = 0; i < projArr.length-1; i++){
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
    
    const temp = dqs(".projectNameMain");//SHOULD NOT BE NEEDED GIVEN PARAM

    const taskProj = temp.textContent;

    //const modDate = moddedTask.tDue;
    const parseTaskDueDate = parse(taskDueDate, 'yyyy-MM-dd', new Date());
    
    // const fndProj = findProjectInArr(taskProj);
    // console.log(fndProj._title);
    // let tempProj = new Project(fndProj._title, fndProj._description);
    // tempProj.title = fndProj._title;
    // tempProj.description = fndProj._description;

    if(taskTitle && taskDueDate){
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

function getProjectBelonging(){
    if(editTask){
        return editTask._tProj;
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