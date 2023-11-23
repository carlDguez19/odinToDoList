import { Project } from "./projectClass";
import { projArr } from "./menuEventListeners";

const projOverlay = document.querySelector(".newProjectOverlay");

export function projectOverlayStuff(){
    //const projOverlay = document.querySelector(".newProjectOverlay");

    //buttons
    const closeButton = document.querySelector(".closeButton");
    const submitButton = document.querySelector(".submitButton");

    closeButton.addEventListener('click', function(){
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        projectFormClear();
    })
    submitButton.addEventListener('click', function(){
        console.log("submit button clicked");
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        createProjectFromData();
        projectFormClear();
    })
}

function createProjectFromData(){
    const titleInput = document.getElementById("title").value
    let descInput = document.getElementById("description").value;

    if(titleInput){
        console.log("detected title");//debugging
        const projectMade = new Project(titleInput, descInput);
        projArr.push(projectMade);
        console.log(projArr[(projArr.length)-1].title);
        console.log(projArr[(projArr.length)-1].description);
    }else{
        displayNeedTitle();// CAN INSERT DOM MANIPULATION TO SHIFT DOWN THE ERROR OVERLAY :)
        console.log("Need a title to create a project!");//debugging
        
    }
}

function displayNeedTitle(){
    const errorOverlay = document.querySelector(".errorProjectOverlay");
    errorOverlay.style.animation = "projectSlideDown 1.5s forwards"
    setTimeout(function(){
        errorOverlay.style.animation = "projectSlideUp 1.5s forwards"
    }, 2500);
    projectFormClear();
    projOverlay.style.animation = "projectSlideDown 1.5s forwards";
}

function projectFormClear(){
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}