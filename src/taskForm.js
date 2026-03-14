// Handles the task creation/editing form overlay.
// This module extracts form data, validates it, updates taskArr/localStorage,
// and syncs changes to the main task display.

import { dqs, taskArr } from "./menuEventListeners";
import { displayNeedTitle } from "./projectForm";
import { displayTaskInMain, clearTaskMain } from "./taskDOM";
import { taskEditButton, editTask } from "./taskEventListeners";
import { parse } from "date-fns";
import { Task } from "./taskClass";

export const taskOverlay = dqs(".newTaskOverlay");
const taskClose = dqs(".taskCloseButton");
const taskSubmit = dqs(".taskSubmitButton");


// Initialize listeners for the task form overlay (close + submit).
export function taskOverlayListeners() {
    taskClose.addEventListener('click', function () {
        taskFormClear();
        taskOverlay.style.animation = "projectSlideUp 1.5s forwards";
    });

    taskSubmit.addEventListener('click', _taskSubmit);
}


// Handle task submission for both new tasks and edited tasks.
export function _taskSubmit() {
    taskOverlay.style.animation = "projectSlideUp 1.5s forwards";

    if (taskEditButton) {
        // Editing an existing task
        const moddedTask = extractDataForTask(); // updated task data

        clearTaskMain(editTask._tTitle);         // remove old version from UI
        editTaskFunc(editTask._tTitle);          // update taskArr entry
        displayTaskInMain(moddedTask);           // display updated task

        taskArr.splice(taskArr.length - 1, 1);   // remove temporary last entry
        localStorage.setItem('tasks', JSON.stringify(taskArr));

        taskEditButton = false;
        clearEvLis();
    } else {
        // Creating a new task
        const madeTask = extractDataForTask();
        if (madeTask) {
            displayTaskInMain(madeTask);
        }
        taskFormClear();
        clearEvLis();
    }
}


// Update an existing task in taskArr using the last-added task as the new data source.
function editTaskFunc(title) {
    for (let i = 0; i < taskArr.length; i++) {
        if (taskArr[i]._tTitle == title) {
            taskArr[i]._tTitle = taskArr[taskArr.length - 1]._tTitle;
            taskArr[i]._tDesc = taskArr[taskArr.length - 1]._tDesc;
            taskArr[i]._tDue = taskArr[taskArr.length - 1]._tDue;
            taskArr[i]._tPrio = taskArr[taskArr.length - 1]._tPrio;
            taskArr[i]._tProj = taskArr[taskArr.length - 1]._tProj;

            localStorage.setItem('tasks', JSON.stringify(taskArr));
        }
    }
}


// Remove submit listener and reset editTask reference.
function clearEvLis() {
    taskSubmit.removeEventListener('click', _taskSubmit);
    editTask = null;
}


// Extract task data from the form, validate it, create a Task object,
// and update taskArr/localStorage.
export function extractDataForTask() {
    const taskTitle = document.getElementById("tTitle").value;
    const taskDesc = document.getElementById("tDescription").value;
    const taskDueDate = document.getElementById("tDueDate").value;
    const taskPrio = document.getElementById("tTaskPrio").value;

    const temp = dqs(".projectNameMain");
    const taskProj = temp.textContent;

    const parseTaskDueDate = parse(taskDueDate, 'yyyy-MM-dd', new Date());

    if (taskTitle && taskDueDate) {
        // Prevent duplicate task names
        if (checkDupTaskName(taskTitle)) {
            displayNeedTitle();
            taskFormClear();
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
            return;
        }

        // Create and store the new task
        const taskMade = new Task(taskTitle, taskDesc, parseTaskDueDate, taskPrio, taskProj);
        taskArr.push(taskMade);
        localStorage.setItem('tasks', JSON.stringify(taskArr));

        taskFormClear();
        return taskMade;

    } else {
        // Missing required fields
        displayNeedTitle();
        taskFormClear();
        taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
        return;
    }
}


// Check if a task name already exists in taskArr.
function checkDupTaskName(taskName) {
    for (let i = 0; i < taskArr.length; i++) {
        if (taskArr[i]._tTitle == taskName) {
            return true;
        }
    }
    return false;
}


// Clear all inputs in the task form.
export function taskFormClear() {
    document.getElementById("tTitle").value = "";
    document.getElementById("tDescription").value = "";
    document.getElementById("tDueDate").value = "";
    document.getElementById("tTaskPrio").value = "Select One";
}

