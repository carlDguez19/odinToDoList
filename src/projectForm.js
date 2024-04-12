import { Project } from "./projectClass";
import { projArr } from "./menuEventListeners";
import { addProjectToSidebar, editProjectInSidebar, displayProjectInMain, editProjectNameMain, editTasksToNewProj } from "./projectDOM";
import { _testering, editButtonClicked, currTitle2 } from "./projectEventListeners";

const projOverlay = document.querySelector(".newProjectOverlay");//select project form overlay

export function projectOverlayStuff(){
    //buttons on form
    const closeButton = document.querySelector(".closeButton");
    const submitButton = document.querySelector(".submitButton");

    closeButton.addEventListener('click', function(){
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        projectFormClear();
    })
    submitButton.addEventListener('click', function(){
        projOverlay.style.animation = 'projectSlideUp 1.5s forwards';
        const projectParam = extractDataForProject();//get info from form
        if(editButtonClicked){//if edit button on project is pressed
            editProjectInArr(currTitle2.textContent);//go through array and update to edited info
            editProjectInSidebar(currTitle2.textContent);//update sidebar info
            editTasksToNewProj(currTitle2.textContent);//change ._tProj to new info
            editProjectNameMain();//change main proj display to new info
            projArr.splice(projArr.length-1,1);//remove the last proj added that contains the updated info
            localStorage.setItem('projects', JSON.stringify(projArr));//set the local storage
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
        if(projArr[i]._title == replaceTitle){//find project with replaceTitle title and update info to last project in arr
            projArr[i]._title = projArr[projArr.length-1]._title;//replace with last entry in arr
            projArr[i]._description = projArr[projArr.length-1]._description;//''
            localStorage.setItem('projects', JSON.stringify(projArr));//set localStorage
        }
    }
}

function extractDataForProject(){
    //get values of title and description from form
    const titleInput = document.getElementById("title").value
    let descInput = document.getElementById("description").value;

    if(titleInput){//check if title was entered
        if(checkDupProjName(titleInput)){//if title already exists display error
            displayNeedTitle();//display error
            projectFormClear();//clear form
            projOverlay.style.animation = "projectSlideDown 1.5s forwards";//bring down project form
            return;
        }
        const projectMade = new Project(titleInput, descInput);//if original
        projArr.push(projectMade);//...push project into arr
        localStorage.setItem('projects', JSON.stringify(projArr));//set localStorage
        return projectMade;
    }else{
        displayNeedTitle();//if form filled out without title display error
        projectFormClear();//clear form
        projOverlay.style.animation = "projectSlideDown 1.5s forwards";//slide form away
        return;
    }
}

function checkDupProjName(projName){
    for(let i = 0; i < projArr.length; i++){//go through array looking if name already exists
        if(projArr[i]._title == projName){
            return true;//is so return true
        }
    }
    return false;//if gone through entire array then return false
}

export function displayNeedTitle(){//bring down error overlay
    const errorOverlay = document.querySelector(".errorProjectOverlay");//error overlay in html
    errorOverlay.style.animation = "projectSlideDown 1.5s forwards"//slide down
    setTimeout(function(){//wait 2.5 seconds and slide back up
        errorOverlay.style.animation = "projectSlideUp 1.5s forwards"
    }, 2500);
}

export function projectFormClear(){//clear new project form
    document.getElementById("title").value = "";//inputs become empty
    document.getElementById("description").value = "";
}