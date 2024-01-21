import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { Project } from "./projectClass";
import { Task } from "./taskClass";
import { clearTaskMain } from "./taskDOM";

export function taskEListeners(){
    document.addEventListener('click', _taskTestering)
};
let taskEditButton = false;
let taskRemButton = false;
export var _taskTestering = function(e){
    if(e.target.matches(".taskProjEdit")){//this will be done last first we will work on REMOVE
        taskEditButton = true;
        const taskName = e.target.parentElement.textContent;
        console.log(taskName);

        //code here for edit on task
    }
    else if(e.target.matches(".taskProjRemove")){
        taskRemButton = true;
        const taskNameRem = e.target.parentElement.parentElement.parentElement.textContent;
        const projNameRem = dqs(".projectNameMain");
        console.log(taskNameRem);
        console.log(projNameRem.textContent);
        const projRem = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)
        projRem.removeTaskFromArr(taskNameRem);
        projRem.printTasks();
        clearTaskMain(taskNameRem);
        //code here for removal of individual task
    }
}