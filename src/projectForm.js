import { Project } from "./projectClass";
import { projArr } from "./menuEventListeners";
import { addProjectToSidebar, editProjectInSidebar, displayProjectInMain, editProjectNameMain } from "./projectDOM";
//import { projectEListeners } from "./projectEventListeners";
import { _testering, findProjectInArr, removeProjArr, editButtonClicked, currTitle2 } from "./projectEventListeners";

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
        if(editButtonClicked){
            editProjectInArr(currTitle2.textContent);
            editProjectInSidebar(currTitle2.textContent);
            editProjectNameMain();
            console.log("BEFORE removeProjArr function we have the following projects: ")
            for(let a = 0; a < projArr.length; a++){
                console.log((a+1)+ " "+ projArr[a].title)
            }
            projArr.splice(projArr.length-1,1);//REMOVE THE LAST PROJECT IN ARRAY..NOW USELESS
            editButtonClicked = false;
            console.log("AFTER removeProjArr function we have the following projects: ")
            for(let b= 0; b < projArr.length; b++){
                console.log((b+1)+ " "+ projArr[b].title)
            }
        }else{
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
        }
    })
}

function editProjectInArr(replaceTitle){
    console.log("editTitle being replaced " + replaceTitle);
    for(let i = 0; i < projArr.length; i++){//for(let i = 0; i < projArr.length-1; i++){
        console.log("inside edit func arr " + projArr[i].title);
        if(projArr[i].title == replaceTitle){
            projArr[i].title = projArr[projArr.length-1].title;
            projArr[i].description = projArr[projArr.length-1].description;
        }
    }
    console.log("inside editProjectInArr all projects after edit: ");
    for(let a = 0; a < projArr.length; a++){
        console.log(projArr[a].title);
    }
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
        projectFormClear();
        projOverlay.style.animation = "projectSlideDown 1.5s forwards";
        return;
    }
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