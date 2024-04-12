import Edit from '../src/imgs/edit.png';
import Remove from '../src/imgs/close.png';
import { _taskTestering } from './taskEventListeners';
import { dqs } from './menuEventListeners';
import { taskEListeners } from './taskEventListeners';

export function displayTaskInMain(task){
    const projUL = document.querySelector(".todoUL");//task section

    const taskLI = document.createElement('li');//main task section

    const titleDisp = document.createElement('div');//div that display the clickable title of the task
    titleDisp.textContent = task._tTitle;
    titleDisp.classList.add("titleTaskDisp");//styling via class

    const buttonDiv = document.createElement('div');//div that contains the buttons for task(edit, remove)

    const taskCheckbox = document.createElement('input');//checkbox for task
    taskCheckbox.type = "checkbox";

    const taskEditDiv = document.createElement('div');//div that holds edit icon
    const taskRemoveDiv = document.createElement('div');//div that holds remove icon

    const taskEditIcon = new Image();//create edit image with styling via class
    taskEditIcon.src = Edit;
    taskEditIcon.classList.add('taskProjEdit');

    const taskRemoveIcon = new Image();//create remove image with styling via class
    taskRemoveIcon.src = Remove;
    taskRemoveIcon.classList.add('taskProjRemove');

    taskEditDiv.appendChild(taskEditIcon);//append icons to repective divs
    taskRemoveDiv.appendChild(taskRemoveIcon);

    buttonDiv.appendChild(taskEditDiv);//append edit, remove and checkbox to button div
    buttonDiv.appendChild(taskRemoveDiv);
    buttonDiv.appendChild(taskCheckbox);

    buttonDiv.classList.add('taskButtons');

    taskLI.appendChild(titleDisp);//append title to task main

    taskLI.appendChild(buttonDiv);//append button div to task main

    taskLI.classList.add("todo");//check prio of task, depending on prio add color
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

    projUL.appendChild(taskLI);//add task to task sec

    taskEListeners();//add task event listeners to the task
}

export function clearTaskMain(task){//given task as param...
    const ulParent = dqs(".todoUL");
    const liTaskChildren = ulParent.children;//...go through all task in task section until match is found
    for(let i = 0; i < liTaskChildren.length; i++){
        if(liTaskChildren[i].textContent == task){
            ulParent.removeChild(liTaskChildren[i]);//remove task from task section
        }
    }
}