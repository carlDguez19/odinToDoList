import Edit from '../src/imgs/edit.png';
import Remove from '../src/imgs/close.png';
import { _taskTestering, taskEListeners } from './taskEventListeners';
import { dqs } from './menuEventListeners';

export function displayTaskInMain(task){//(project, ul) might be needed as params but probs not
    const projUL = document.querySelector(".todoUL");

    const taskLI = document.createElement('li');

    const dateDisp = document.createElement('div');
    dateDisp.textContent = task.tDue;
    dateDisp.classList.add("dateTaskDisp");

    const buttonDiv = document.createElement('div');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";

    const taskDateInput = document.createElement('input');
    taskDateInput.type = "date";
    taskDateInput.value = task.tDue;

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

    taskLI.textContent = task.tTitle;//task.tTitle + "  " + task.tDue

    buttonDiv.appendChild(taskEditDiv);
    buttonDiv.appendChild(taskRemoveDiv);
    buttonDiv.appendChild(taskCheckbox);

    buttonDiv.classList.add('taskButtons');

    //taskLI.appendChild(dateDisp);

    taskLI.appendChild(buttonDiv);

    taskLI.appendChild(taskDateInput);

    taskLI.classList.add("todo");

    projUL.appendChild(taskLI);

    taskEListeners();
}

export function clearTaskMain(task){
    //get task ul section and remove li via parameter(like removing a project from sidebar)
    const ulParent = dqs(".todoUL");
    const liTaskChildren = ulParent.children;
    for(let i = 0; i < liTaskChildren.length; i++){
        if(liTaskChildren[i].textContent == task){
            ulParent.removeChild(liTaskChildren[i]);
        }
    }
    //document.removeEventListener('click', _taskTestering);IF MULTIPLE TASKS, OTHER TASKS BUTTONS WONT WORK
}