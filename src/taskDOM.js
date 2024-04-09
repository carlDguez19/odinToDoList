import Edit from '../src/imgs/edit.png';
import Remove from '../src/imgs/close.png';
import { _taskTestering } from './taskEventListeners';
import { dqs } from './menuEventListeners';
import { taskEListeners } from './taskEventListeners';

export function displayTaskInMain(task){
    const projUL = document.querySelector(".todoUL");

    const taskLI = document.createElement('li');

    const titleDisp = document.createElement('div');
    titleDisp.textContent = task._tTitle;
    titleDisp.classList.add("titleTaskDisp");

    const buttonDiv = document.createElement('div');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";

    const taskEditDiv = document.createElement('div');
    const taskRemoveDiv = document.createElement('div');

    const taskEditIcon = new Image();
    taskEditIcon.src = Edit;
    taskEditIcon.classList.add('taskProjEdit');

    const taskRemoveIcon = new Image();
    taskRemoveIcon.src = Remove;
    taskRemoveIcon.classList.add('taskProjRemove');

    taskEditDiv.appendChild(taskEditIcon);
    taskRemoveDiv.appendChild(taskRemoveIcon);

    buttonDiv.appendChild(taskEditDiv);
    buttonDiv.appendChild(taskRemoveDiv);
    buttonDiv.appendChild(taskCheckbox);

    buttonDiv.classList.add('taskButtons');

    taskLI.appendChild(titleDisp);

    taskLI.appendChild(buttonDiv);

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

    projUL.appendChild(taskLI);

    taskEListeners();
}

export function clearTaskMain(task){
    const ulParent = dqs(".todoUL");
    const liTaskChildren = ulParent.children;
    for(let i = 0; i < liTaskChildren.length; i++){
        if(liTaskChildren[i].textContent == task){
            ulParent.removeChild(liTaskChildren[i]);
        }
    }
}