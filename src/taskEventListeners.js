import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { Project } from "./projectClass";
import { Task } from "./taskClass";
import { clearTaskMain } from "./taskDOM";
import { taskOverlay, taskOverlayListeners } from "./taskForm";
import { infoOverlayListener } from "./infoDescListeners";

export function taskEListeners(){
    document.addEventListener('click', _taskTestering)
    //add the eventListener for the change of the date picker
};

export const infoOverlay = dqs(".infoDescOverlay");
export const infoSection = dqs(".infoSec");
export let taskEditButton = false;
export let editTask = null;
let taskRemButton = false;
//const projNameRem = dqs(".projectNameMain");PLACEMENT OF THIS OUT HERE CAUSES MAJOR BUG
//const projRemEd = findProjectInArr(projNameRem.textContent);WIPES THE ENTIRE DISPLAY AREA AND MENU(EVERYTHING BASICALLY O_o)

// export function giveTaskName(taskName){
//     return taskName;
// }

export function _taskTestering(e){//var _taskTestering = function(e){
    //we can optimize this by putting... 
        // const projNameEd = dqs(".projectNameMain");//current project
        // const projEd = findProjectInArr(projNameEd.textContent);
        // editTask = projEd.findTask(taskName.textContent);//current task
    //out here instead of repeating code in each "if" and "else if"

    const taskName = e.target.parentElement.parentElement.parentElement;
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
        const projNameEd = dqs(".projectNameMain");//current project
        const projEd = findProjectInArr(projNameEd.textContent);
        editTask = projEd.findTask(taskName.textContent);//current task

        //ADD TASK USING FUNCTION FROM taskDOM.js file (displayTaskInMain(editTask))
        //remove
        editTaskForm(editTask);
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
    // else if task name "button" bring down infoDescOverlay with all info of task
    else if(e.target.matches(".titleTaskDisp")){
        const taskName2 = e.target.parentElement;
        const projNameEd = dqs(".projectNameMain");//current project
        const projEd = findProjectInArr(projNameEd.textContent);
        const infoTask = projEd.findTask(taskName2.textContent);//current task
        infoDescOverlayTask(infoTask);
    }
    //checkbox here too blaaaah
}

export function getTaskNameLi(){
    return theThing.target.parentElement.parentElement.parentElement;
}

function infoDescOverlayTask(task){
    infoOverlay.style.animation = "projectSlideDown 1.5s forwards";

    infoSection.textContent += "DUE DATE: " + task.tDue + " DESCRIPTION: " + task.tDesc;
    infoOverlayListener();
}

export function editTaskForm(task){
    taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
    //get dqs(#title) and dqs(#date) and set value to task title and date as default
    const taskTitleForm = dqs("#tTitle");
    const taskDateForm = dqs("#tDueDate");
    taskTitleForm.value = task.tTitle;
    taskDateForm.value = task.tDue;
    taskOverlayListeners();// MIGHT NOT BE NEEDED
}