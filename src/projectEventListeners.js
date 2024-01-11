import { dqs } from "./menuEventListeners";
import { projArr } from "./menuEventListeners";
import { clearMain } from "./projectDOM";
import { taskOverlay, taskOverlayListeners } from "./taskForm";
import { removeProjectFromSidebar } from "./projectDOM";
//import { projOverlay } from "./menuEventListeners";

//const projTaskAdd = dqs(".projAdd");
//const projRemButton = dqs(".projRemove");
const projOverlay1 = document.querySelector(".newProjectOverlay");

export function projectEListeners(){
    document.addEventListener('click', _testering)
};

export var _testering = function(e){
    //go throuhg array comparing title
        //when found fill projectForm and drop form down for user
        //if submit then replace info with new info
        //else if cancel then leave project as it was
        //console.log("in projEditButton eventListener");
        const editButton = e.target.matches(".projEdit");
        const removeButton = e.target.matches(".projRemove");
        const addTaskButton = e.target.matches(".projAdd");
        const currTitle = dqs(".projectNameMain");
        if(editButton){//this will be done once 'remove' is completed
            console.log("editButton clicked");
            editForm(currTitle.textContent);
            //const foundProj = findProjectInArr(currTitle);//this will be left till the end
            for(let a = 0; a < projArr.length; a++){
                console.log((a+1)+ " "+ projArr[a].title)
            }
        }else if(removeButton){
            //const currTitle = dqs(".projectNameMain");
            console.log("removeButton clicked");
            removeProjectFromSidebar(currTitle.textContent);
            removeProjArr(currTitle.textContent);
            clearMain();
            //const sideBar = dqs(".sidebar-menu");
            //sideBar.style.animation = 'menuSlideOn 1.5s forwards';
            for(let a = 0; a < projArr.length; a++){
                console.log((a+1)+ " "+ projArr[a].title)
            }
        }
        else if(addTaskButton){
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
            //const foundProj = findProjectInArr(currTitle.textContent);
            //console.log("foundProjectInArr: " + foundProj.title);
            taskOverlayListeners();//add proj as param here!!! find proj on line before this
        }
}

function removeProjArr(projName){
    for(let i = 0; i < projArr.length; i++){
        if(projArr[i].title == projName){
            projArr.splice(i, 1);
        }
    }
}

function editForm(projectTitle){
    projOverlay1.style.animation = 'projectSlideDown 1.5s forwards';
    const titleIn = dqs("#title");
    titleIn.value = projectTitle;

    //add eventListener for submit and cancel buttons on project form
    //hopefully they will do something different???
}
export function findProjectInArr(title){//MIGHT NOT NEED THIS MIGHT NOT NEED THIS MIGHT NOT NEED THIS
    //console.log("looking for project in arr")
    let index = 0;
    for(let i = 0; i < projArr.length; i++){
        index = i;
        if(projArr[i].title == title){
            return projArr[i];
        }
    }
}