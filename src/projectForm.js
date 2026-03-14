// Handles the project creation/editing form overlay.
// This module extracts form data, validates it, updates projArr/localStorage,
// and syncs changes to the sidebar and main project display.

import { Project } from "./projectClass";
import { projArr } from "./menuEventListeners";
import {
    addProjectToSidebar,
    editProjectInSidebar,
    displayProjectInMain,
    editProjectNameMain,
    editTasksToNewProj
} from "./projectDOM";

import { _testering, editButtonClicked, currTitle2 } from "./projectEventListeners";

const projOverlay = document.querySelector(".newProjectOverlay");


// Initialize listeners for the project form overlay (open, close, submit).
export function projectOverlayStuff() {
    const closeButton = document.querySelector(".closeButton");
    const submitButton = document.querySelector(".submitButton");

    // Close the overlay and clear the form
    closeButton.addEventListener('click', function () {
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        projectFormClear();
    });

    // Submit handler for creating or editing a project
    submitButton.addEventListener('click', function () {
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';

        const projectParam = extractDataForProject(); // new or edited project data

        if (editButtonClicked) {
            // Editing an existing project
            editProjectInArr(currTitle2.textContent);       // update project in projArr
            editProjectInSidebar(currTitle2.textContent);   // update sidebar display
            editTasksToNewProj(currTitle2.textContent);     // update tasks referencing this project
            editProjectNameMain();                          // update main project display

            // Remove the temporary "new" project object created during editing
            projArr.splice(projArr.length - 1, 1);
            localStorage.setItem('projects', JSON.stringify(projArr));

            editButtonClicked = false;
        } else {
            // Creating a new project
            if (projectParam) {
                addProjectToSidebar(projectParam.title);
                displayProjectInMain(projectParam);
            }
            projectFormClear();
        }
    });
}


// Update an existing project in projArr using the last-added project as the new data source.
function editProjectInArr(replaceTitle) {
    for (let i = 0; i < projArr.length; i++) {
        if (projArr[i]._title == replaceTitle) {
            projArr[i]._title = projArr[projArr.length - 1]._title;
            projArr[i]._description = projArr[projArr.length - 1]._description;
            localStorage.setItem('projects', JSON.stringify(projArr));
        }
    }
}


// Extract form data, validate it, create a Project object, and update projArr/localStorage.
function extractDataForProject() {
    const titleInput = document.getElementById("title").value;
    let descInput = document.getElementById("description").value;

    if (titleInput) {
        // Prevent duplicate project names
        if (checkDupProjName(titleInput)) {
            displayNeedTitle();
            projectFormClear();
            projOverlay.style.animation = "projectSlideDown 1.5s forwards";
            return;
        }

        // Create and store the new project
        const projectMade = new Project(titleInput, descInput);
        projArr.push(projectMade);
        localStorage.setItem('projects', JSON.stringify(projArr));
        return projectMade;

    } else {
        // Title is required
        displayNeedTitle();
        projectFormClear();
        projOverlay.style.animation = "projectSlideDown 1.5s forwards";
        return;
    }
}


// Check if a project name already exists in projArr.
function checkDupProjName(projName) {
    for (let i = 0; i < projArr.length; i++) {
        if (projArr[i]._title == projName) {
            return true;
        }
    }
    return false;
}


// Display the "missing title" error overlay.
export function displayNeedTitle() {
    const errorOverlay = document.querySelector(".errorProjectOverlay");
    errorOverlay.style.animation = "projectSlideDown 1.5s forwards";

    setTimeout(function () {
        errorOverlay.style.animation = "projectSlideUp 1.5s forwards";
    }, 2500);
}


// Clear the project form inputs.
export function projectFormClear() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}
