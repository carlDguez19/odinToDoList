import Remove from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import Edit from '../src/imgs/edit.png';
import { dqs } from './menuEventListeners';
import { projectEListeners } from './projectEventListeners';
import { _testering } from './projectEventListeners';
import { displayTaskInMain } from './taskDOM';

const mainSec = dqs(".projectSection");

export function addProjectToSidebar(projectTitle){
    const projSide = dqs(".sidebarProject");
    let projTitle = document.createElement('span');
    projTitle.textContent = projectTitle;
    projTitle.classList.add('projectNameSidebar');
    projSide.appendChild(projTitle);
}

export function displayProjectInMain(project){
    clearMain();
    const projDiv = document.createElement('div');

    const taskSecUL = document.createElement('ul');
    taskSecUL.classList.add("todoUL")
    
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
    mainSec.appendChild(taskSecUL);
    
    //check for tasks with a loop and display each
    checkForTasks(project);

    //call eventListener here
    projectEListeners();//WILL HAVE TO ADD EVENT LISTENERS FOR TASKS HERE???
    console.log("this console log is after the projectElisteners it looks like its working??");
}

function checkForTasks(proj){
    //given proj as param we will check if it contains any tasks that need to be created
    const taskArr = proj.toDoList;
    if(taskArr){
        for(var i = 0; i < taskArr.length; i++){
            displayTaskInMain(taskArr[i]);
        }
    }
    // const i = 0;
    // while(proj.toDoList){
    //     displayTaskInMain(proj.toDoList[i]);
    //     i++;
    // }
}

export function clearMain(){
    document.removeEventListener('click', _testering);
    while(mainSec.firstChild){
        mainSec.removeChild(mainSec.firstChild)
    }
}