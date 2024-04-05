import { Project } from "./projectClass";
import { projArr } from "./menuEventListeners";
import { addProjectToSidebar, editProjectInSidebar, displayProjectInMain, editProjectNameMain, editTasksToNewProj } from "./projectDOM";
import { _testering, editButtonClicked, currTitle2 } from "./projectEventListeners";

const projOverlay = document.querySelector(".newProjectOverlay");

export function projectOverlayStuff(){
    //buttons
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
            editProjectInArr(currTitle2.textContent);//this method needs localStorage DONEDONEDONEDONEDONEDONE
            editProjectInSidebar(currTitle2.textContent);//NO localStorage here
            editTasksToNewProj(currTitle2.textContent);
            editProjectNameMain();//this method needs localStorage MAYBE...but probably not
            projArr.splice(projArr.length-1,1);//REMOVE THE LAST PROJECT IN ARRAY..NOW USELESS
            localStorage.setItem('projects', JSON.stringify(projArr));//this might not work without getItem again ??? not sure will have to test again by editing and refreshing a project
            editButtonClicked = false;//localStorage call first remove last entry then set for prev line
        }else{
            if(projectParam){
                addProjectToSidebar(projectParam.title)//this will be in projectDOM.js file
                displayProjectInMain(projectParam);
            }
            projectFormClear();
        }
    })
}

function editProjectInArr(replaceTitle){
    for(let i = 0; i < projArr.length; i++){//for(let i = 0; i < projArr.length-1; i++){
        if(projArr[i]._title == replaceTitle){
            projArr[i]._title = projArr[projArr.length-1]._title;
            projArr[i]._description = projArr[projArr.length-1]._description;
            localStorage.setItem('projects', JSON.stringify(projArr));
            //now go through taskArr and change ._tProj to this new name
        }
    }
}

function extractDataForProject(){//this will need localStorage aswell
    const titleInput = document.getElementById("title").value
    let descInput = document.getElementById("description").value;

    if(titleInput){
        //console.log("detected title");//debugging
        const projectMade = new Project(titleInput, descInput);
        projArr.push(projectMade);
        localStorage.setItem('projects', JSON.stringify(projArr));
        //localStorage.clear();
        return projectMade;
    }else{
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