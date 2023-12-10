import Remove from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import Edit from '../src/imgs/edit.png';
import { dqs } from './menuEventListeners';
import { projectEListeners } from './projectEventListeners';
import { _testering } from './projectEventListeners';

const mainSec = dqs(".projectSection");

export function addProjectToSidebar(projectTitle){
    let newProjTitle = projectTitle.slice(0,7);
    const projSide = dqs(".sidebarProject");
    let projTitle = document.createElement('span');
    projTitle.textContent = projectTitle;
    projTitle.classList.add('projectNameSidebar');
    projSide.appendChild(projTitle);
}

export function displayProjectInMain(project){
    clearMain();
    const projDiv = document.createElement('div');

    
    const projCheckbox = document.createElement('input');
    projCheckbox.type = "checkbox";
    projCheckbox.classList.add("projectCheckbox");

    
    const projNameSpan = document.createElement('span');
    if(project.title.length > 30){
        let mainModProjTitle = project.title.slice(0,31);
        projNameSpan.textContent = mainModProjTitle + "...";
    }else{
        projNameSpan.textContent = project.title;
    }
    projNameSpan.classList.add("projectNameMain");

    
    const buttonCont = document.createElement('div');
    
    const addDiv = document.createElement('div');
    const editDiv = document.createElement('div');
    const removeDiv = document.createElement('div');

    const addIcon = new Image();
    addIcon.src = Create;
    addIcon.classList.add('projAdd');

    const editIcon = new Image();
    editIcon.src = Edit;
    editIcon.classList.add('projEdit');

    const remIcon = new Image();
    remIcon.src = Remove;
    remIcon.classList.add('projRemove');

    addDiv.appendChild(addIcon);
    editDiv.appendChild(editIcon);
    removeDiv.appendChild(remIcon);
    
    buttonCont.appendChild(addDiv);
    buttonCont.appendChild(editDiv);
    buttonCont.appendChild(removeDiv);
    buttonCont.classList.add("projectOptions");

    projDiv.appendChild(projCheckbox);
    projDiv.appendChild(projNameSpan);
    projDiv.appendChild(buttonCont);
    projDiv.classList.add("project");

    mainSec.appendChild(projDiv);
    
    //call eventListener here
    projectEListeners();
}

export function clearMain(){
    document.removeEventListener('click', _testering);
    while(mainSec.firstChild){
        mainSec.removeChild(mainSec.firstChild)
    }
}