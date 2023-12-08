import { dqs } from "./menuEventListeners";
import { projArr } from "./menuEventListeners";
//import { projOverlay } from "./menuEventListeners";

const projTaskAdd = dqs(".projAdd");
const projEditButton = document.querySelector(".projEdit");
const projRemButton = dqs(".projRemove");
const projOverlay1 = document.querySelector(".newProjectOverlay");

export function projectEListeners(){
    document.addEventListener('click', function(e){
        //go throuhg array comparing title
        //when found fill projectForm and drop form down for user
        //if submit then replace info with new info
        //else if cancel then leave project as it was
        console.log("in projEditButton eventListener");
        const editButton = e.target.closest(".projEdit");
        if(editButton){
            const currTitle = dqs(".projectNameMain");
            editForm(currTitle.textContent);
            const foundProj = findProjectInArr(currTitle);//this will be left till the end
        }
    })
};

function editForm(projectTitle){
    projOverlay1.style.animation = 'projectSlideDown 1.5s forwards';
    const titleIn = dqs("#title");
    titleIn.value = projectTitle;
}
export function findProjectInArr(title){
    console.log("looking for project in arr")
    let index = 0;
    for(let i = 0; i < projArr.length; i++){
        index = i;
        if(projArr[i].title == title){
            return projArr[i];
        }
    }
}