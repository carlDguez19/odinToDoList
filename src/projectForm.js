import { Project } from "./projectClass";
import { projArr } from "./menuEventListeners";
import { addProjectToSidebar } from "./projectDOM";
import { displayProjectInMain } from "./projectDOM";
//import { projectEListeners } from "./projectEventListeners";
import { _testering } from "./projectEventListeners";

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
        //console.log("submit button clicked");
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        const projectParam = extractDataForProject();
        //createProjectDOM(projectParam);//this will be in projectDOM.js file
        if(projectParam){
            //console.log("project obj returned successfully");
            addProjectToSidebar(projectParam.title)//this will be in projectDOM.js file
            displayProjectInMain(projectParam);
            //projectEListeners();
            for(let a = 0; a < projArr.length; a++){
                console.log((a+1)+ " "+ projArr[a].title)
            }
        }
        projectFormClear();
    })
}

function extractDataForProject(){
    const titleInput = document.getElementById("title").value
    let descInput = document.getElementById("description").value;

    if(titleInput){
        //console.log("detected title");//debugging
        const projectMade = new Project(titleInput, descInput);
        projArr.push(projectMade);
        //console.log(projArr[(projArr.length)-1].title);
        //console.log(projArr[(projArr.length)-1].description);
        return projectMade;
    }else{
        //console.log("Need a title to create a project!");//debugging
        displayNeedTitle();// CAN INSERT DOM MANIPULATION TO SHIFT DOWN THE ERROR OVERLAY :)
        return;
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

export function projectFormClear(){
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}