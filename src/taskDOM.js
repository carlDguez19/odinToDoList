import Edit from '../src/imgs/edit.png';
import Remove from '../src/imgs/close.png';

export function displayTaskInMain(task){//(project, ul) might be needed as params but probs not
    const projUL = document.querySelector(".todoUL");

    const taskLI = document.createElement('li');
    //taskLI.classList.add("todo");

    const buttonDiv = document.createElement('div');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";
    //taskCheckbox.classList.add("todoCheck");

    const taskDateInput = document.createElement('input');
    taskDateInput.type = "date";
    //taskDateInput.classList.add("todoDate");

    const taskEditDiv = document.createElement('div');
    const taskRemoveDiv = document.createElement('div');

    const taskEditIcon = new Image();
    taskEditIcon.src = Edit;
    taskEditIcon.classList.add('projEdit');

    const taskRemoveIcon = new Image();
    taskRemoveIcon.src = Remove;
    taskRemoveIcon.classList.add('projRemove');

    taskEditDiv.appendChild(taskEditIcon);
    taskRemoveDiv.appendChild(taskRemoveIcon);

    taskLI.textContent = task.tTitle + "  " + task.tDue;
    taskLI.appendChild(taskDateInput);

    buttonDiv.appendChild(taskCheckbox);
    buttonDiv.appendChild(taskEditDiv);
    buttonDiv.appendChild(taskRemoveDiv);

    buttonDiv.classList.add('taskButtons');

    taskLI.appendChild(buttonDiv);

    taskLI.classList.add("todo");

    projUL.appendChild(taskLI);
}