import { dqs } from "./menuEventListeners";
import { findProjectInArr } from "./projectEventListeners";
import { Project } from "./projectClass";
import { Task } from "./taskClass";
import { clearTaskMain } from "./taskDOM";

export function taskEListeners(){
    document.addEventListener('click', _taskTestering)
    //add the eventListener for the change of the date picker
};

let taskEditButton = false;
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

        //code here for edit on task
    }
    else if(e.target.matches(".taskProjRemove")){
        taskRemButton = true;
        console.log(taskName);
        const projNameRem = dqs(".projectNameMain");
        const projRemEd = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)
        projRemEd.removeTaskFromArr(taskName);
        projRemEd.printTasks();
        clearTaskMain(taskName);
        //code here for removal of individual task
    }
}