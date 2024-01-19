import { dqs } from "./menuEventListeners";
import { projArr } from "./menuEventListeners";
import { clearMain } from "./projectDOM";
import { taskOverlay, taskOverlayListeners } from "./taskForm";
import { removeProjectFromSidebar } from "./projectDOM";

const projOverlay1 = document.querySelector(".newProjectOverlay");
export let editButtonClicked = false;
export let currTitle2 = null;//= dqs(".projectNameMain");

export function projectEListeners(){
    document.addEventListener('click', _testering)
};

export var _testering = function(e){
    //go throuhg array comparing title
        //when found fill projectForm and drop form down for user
        //if submit then replace info with new info
        //else if cancel then leave project as it was
        const editButton = e.target.matches(".projEdit");
        const removeButton = e.target.matches(".projRemove");
        const addTaskButton = e.target.matches(".projAdd");
        const currTitle = dqs(".projectNameMain");
        currTitle2 = currTitle;
        if(editButton){//this will be done once 'remove' is completed
            editForm(currTitle.textContent);
            editButtonClicked = true;
        }
        else if(removeButton){
            //const currTitle = dqs(".projectNameMain");
            removeProjectFromSidebar(currTitle.textContent);
            removeProjArr(currTitle.textContent);
            clearMain();
        }
        else if(addTaskButton){
            taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
            taskOverlayListeners();//add proj as param here!!! find proj on line before this
        }
}

function editForm(projectTitle){//param is current title it will fill the input title box
    projOverlay1.style.animation = 'projectSlideDown 1.5s forwards';
    const titleIn = dqs("#title");
    titleIn.value = projectTitle;
}

export function findProjectInArr(title){//MIGHT NOT NEED THIS MIGHT NOT NEED THIS MIGHT NOT NEED THIS
    let index = 0;
    for(let i = 0; i < projArr.length; i++){
        index = i;
        if(projArr[i].title == title){
            return projArr[i];
        }
    }
}