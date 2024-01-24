import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { Project } from "./projectClass";
import { Task } from "./taskClass";
import { clearTaskMain } from "./taskDOM";
import { taskOverlay } from "./taskForm";

export function taskEListeners(){
    document.addEventListener('click', _taskTestering)
    //add the eventListener for the change of the date picker
};

export let taskEditButton = false;
let taskRemButton = false;
//const projNameRem = dqs(".projectNameMain");PLACEMENT OF THIS OUT HERE CAUSES MAJOR BUG
//const projRemEd = findProjectInArr(projNameRem.textContent);WIPES THE ENTIRE DISPLAY AREA AND MENU(EVERYTHING BASICALLY O_o)

export var _taskTestering = function(e){

    const taskName = e.target.parentElement.parentElement.parentElement.textContent;
    //const projNameRem = dqs(".projectNameMain");
    //const projRemEd = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)

    if(e.target.matches(".taskProjEdit")){//this will be done last first we will work on REMOVE
        taskEditButton = true;
        console.log(taskName);
        //bring taskform down find task and prefill with taskName and date
        //set taskEditButton = true and on taskForm.js set 'if(taskEditButton)' on submit button
        //that will encapsulate edit algorithm
        const projNameEd = dqs(".projectNameMain");
        const projEd = findProjectInArr(projNameEd.textContent);
        const editTask = projEd.findTask(taskName);
        editTaskForm(editTask);
        //code here for edit on task
    }
    else if(e.target.matches(".taskProjRemove")){
        taskRemButton = true;
        console.log(taskName);
        const projNameRem = dqs(".projectNameMain");
        const projRem = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)
        projRem.removeTaskFromArr(taskName);
        projRem.printTasks();
        clearTaskMain(taskName);
        //code here for removal of individual task
    }
}

function editTaskForm(task){
    taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
    //get dqs(#title) and dqs(#date) and set value to task title and date as default
    const taskTitleForm = dqs("#tTitle");
    const taskDateForm = dqs("#tDueDate");
    taskTitleForm.value = task.tTitle;
    taskDateForm.value = task.tDue;
}