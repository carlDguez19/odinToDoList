import { Project } from "./projectClass";
import { projArr } from "./menuEventListeners";
import { addProjectToSidebar, editProjectInSidebar, displayProjectInMain, editProjectNameMain, editTasksToNewProj } from "./projectDOM";
import { _testering, editButtonClicked, currTitle2 } from "./projectEventListeners";

const projOverlay = document.querySelector(".newProjectOverlay");

export function projectOverlayStuff(){
    const closeButton = document.querySelector(".closeButton");
    const submitButton = document.querySelector(".submitButton");

    closeButton.addEventListener('click', function(){
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        projectFormClear();
    })
    submitButton.addEventListener('click', function(){
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        const projectParam = extractDataForProject();
        if(editButtonClicked){
            editProjectInArr(currTitle2.textContent);
            editProjectInSidebar(currTitle2.textContent);
            editTasksToNewProj(currTitle2.textContent);
            editProjectNameMain();
            projArr.splice(projArr.length-1,1);
            localStorage.setItem('projects', JSON.stringify(projArr));
            editButtonClicked = false;
        }else{
            if(projectParam){
                addProjectToSidebar(projectParam.title)
                displayProjectInMain(projectParam);
            }
            projectFormClear();
        }
    })
}

function editProjectInArr(replaceTitle){
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == replaceTitle){
            projArr[i]._title = projArr[projArr.length-1]._title;
            projArr[i]._description = projArr[projArr.length-1]._description;
            localStorage.setItem('projects', JSON.stringify(projArr));
        }
    }
}

function extractDataForProject(){
    const titleInput = document.getElementById("title").value
    let descInput = document.getElementById("description").value;

    if(titleInput){
        if(checkDupProjName(titleInput)){
            displayNeedTitle();
            projectFormClear();
            projOverlay.style.animation = "projectSlideDown 1.5s forwards";
            return;
        }
        const projectMade = new Project(titleInput, descInput);
        projArr.push(projectMade);
        localStorage.setItem('projects', JSON.stringify(projArr));
        return projectMade;
    }else{
        displayNeedTitle();
        projectFormClear();
        projOverlay.style.animation = "projectSlideDown 1.5s forwards";
        return;
    }
}

function checkDupProjName(projName){
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i]._title == projName){
            return true;
        }
    }
    return false;
}

export function displayNeedTitle(){
    const errorOverlay = document.querySelector(".errorProjectOverlay");
    errorOverlay.style.animation = "projectSlideDown 1.5s forwards"
    setTimeout(function(){
        errorOverlay.style.animation = "projectSlideUp 1.5s forwards"
    }, 2500);
}

export function projectFormClear(){
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}