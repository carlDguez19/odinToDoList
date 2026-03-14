//Handles rendering tasks into the main task list and removing them from the UI.
//This module is responsible only for DOM creation and cleanup - all logic for
//editing, removing, or interacting with tasks lives in taskEventListeners.
import Edit from '../src/imgs/edit.png';
import Remove from '../src/imgs/close.png';
import { _taskTestering } from './taskEventListeners';
import { dqs } from './menuEventListeners';
import { taskEListeners } from './taskEventListeners';

//Render a single task object into the amin task list section
export function displayTaskInMain(task){
    const projUL = document.querySelector(".todoUL");//Parent <ul> for tasks

    const taskLI = document.createElement('li');//container for the task row

    //title section (clickable for info overlay)
    const titleDisp = document.createElement('div');
    titleDisp.textContent = task._tTitle;
    titleDisp.classList.add("titleTaskDisp");

    //button container(edit, remove, checkbox)
    const buttonDiv = document.createElement('div');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";

    //edit icon
    const taskEditDiv = document.createElement('div');
    const taskEditIcon = new Image();
    taskEditIcon.src = Edit;
    taskEditIcon.classList.add('taskProjEdit');
    taskEditDiv.appendChild(taskEditIcon);

    //remove icon
    const taskRemoveDiv = document.createElement('div');
    const taskRemoveIcon = new Image();
    taskRemoveIcon.src = Remove;
    taskRemoveIcon.classList.add('taskProjRemove');
    taskRemoveDiv.appendChild(taskRemoveIcon);

    //Assemble button section
    buttonDiv.appendChild(taskEditDiv);
    buttonDiv.appendChild(taskRemoveDiv);
    buttonDiv.appendChild(taskCheckbox);
    buttonDiv.classList.add('taskButtons');

    //Assemble task row
    taskLI.appendChild(titleDisp);
    taskLI.appendChild(buttonDiv);

    //Apply priority-based styling
    taskLI.classList.add("todo");
    const prio = task._tPrio;
    if(prio == 'high'){
        taskLI.classList.add("highPrio");
    }
    else if(prio == "medium"){
        taskLI.classList.add("mediumPrio");
    }
    else if(prio == "low"){
        taskLI.classList.add("lowPrio");
    }

    //insert into DOM
    projUL.appendChild(taskLI);

    //Attach event listeners for edit/remove/info actions
    taskEListeners();
}

//Remove a task from the main task list by matching its title text
export function clearTaskMain(task){
    const ulParent = dqs(".todoUL");
    const liTaskChildren = ulParent.children;
    
    //Loop through all <li> elements and remove the matching one
    for(let i = 0; i < liTaskChildren.length; i++){
        if(liTaskChildren[i].textContent == task){
            ulParent.removeChild(liTaskChildren[i]);
        }
    }
}