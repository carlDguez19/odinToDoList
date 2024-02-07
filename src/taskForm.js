import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { displayNeedTitle } from "./projectForm";
import { displayTaskInMain } from "./taskDOM";
import { clearTaskMain } from "./taskDOM";

//const taskEdit = dqs(".taskProjEdit");
let taskName = null;
let taskEditButton = false;


export function taskEListeners(){
    document.addEventListener('click', _taskTestering);//document."..."
    //add the eventListener for the change of the date picker
};

function _taskTestering(e){
        //const taskName = getTaskNameLi();

        taskName = e.target.parentElement.parentElement.parentElement;
        //giveTaskName(taskName.textContent);
        //const projNameRem = dqs(".projectNameMain");
        //const projRemEd = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)
    
        if(e.target.matches(".taskProjEdit")){//this will be done last first we will work on REMOVE
            //const taskName = e.target.parentElement.parentElement.textContent;
            //console.log("current task Name is2222: " + taskName);
            taskEditButton = true;
            console.log("morePestoPlease: " + taskName.textContent);
            //bring taskform down find task and prefill with taskName and date
            //set taskEditButton = true and on taskForm.js set 'if(taskEditButton)' on submit button
            //that will encapsulate edit algorithm
            const projNameEd = dqs(".projectNameMain");
            const projEd = findProjectInArr(projNameEd.textContent);
            const editTask = projEd.findTask(taskName.textContent);
            editTaskForm(editTask);
            //code here for edit on task
        }
        else if(e.target.matches(".taskProjRemove")){//"else if" if all three buttons are in this section
            taskRemButton = true;
            console.log(taskName.textContent);
            const projNameRem = dqs(".projectNameMain");
            const projRem = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)
            projRem.removeTaskFromArr(taskName.textContent);
            projRem.printTasks();
            clearTaskMain(taskName.textContent);
            //code here for removal of individual task
        }
}

export function editTaskForm(task){
    taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
    //get dqs(#title) and dqs(#date) and set value to task title and date as default
    const taskTitleForm = dqs("#tTitle");
    const taskDateForm = dqs("#tDueDate");
    taskTitleForm.value = task.tTitle;
    taskDateForm.value = task.tDue;
    taskOverlayListeners();//last thing i added 1/27/2024 5:00pm
}

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
        //const taskName2 = getTaskNameLi
        //insert edit algorithm here
        //let taskName = e.target.parentElement.parentElement.textContent;
        console.log("taskName in taskSubmit poop: " + taskName.textContent);
        const projNameEd = dqs(".projectNameMain");
        const projEd = findProjectInArr(projNameEd.textContent);
        const modedTask = projEd.getLastTask()
        projEd.editTask(taskName.textContent);
        taskName.textContent = modedTask.tTitle;    //e.target.parentElement.parentElement.parentElement.textContent = modedTask.tTitle;
        projEd.removeTaskFromArr(modedTask.tTitle);
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