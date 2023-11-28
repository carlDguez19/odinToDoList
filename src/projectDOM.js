import Close from '../src/imgs/close.png';
import Create from '../src/imgs/add.png';
import Edit from '../src/imgs/edit.png';

function dqs(c){
    return document.querySelector(c);
}

export function addProjectToSidebar(projectTitle){
    let newProjTitle = projectTitle.slice(0,7);
    const projSide = dqs(".sidebarProject");
    let projTitle = document.createElement('span');
    if(projectTitle.length > 6){
        projTitle.textContent = newProjTitle + "...";
    }else{
        projTitle.textContent = projectTitle;
    }
    projTitle.classList.add('projectNameSidebar');
    projSide.appendChild(projTitle);
}

