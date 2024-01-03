export function displayTaskInMain(task){//(project, ul) might be needed as params but probs not
    const projUL = document.querySelector(".todoUL");

    const taskLI = document.createElement('li');
    taskLI.classList.add("todo");

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add("todoCheck");

    const taskDateInput = document.createElement('input');
    taskDateInput.type = "date";
    taskDateInput.classList.add("todoDate");

    taskLI.appendChild(taskDateInput);
    taskLI.appendChild(taskCheckbox);

    taskLI.textContent = task.tTitle;

    projUL.appendChild(taskLI);
}