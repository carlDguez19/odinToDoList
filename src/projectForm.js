import { Project } from "./projectClass";

export function createProjectFromData(){
    const titleInput = document.getElementById("title").value;
    const descInput = document.getElementById("description").value;
    if(titleInput){
        const projectMade = new Project(titleInput, descInput);
        return projectMade;
    }else{
        // displayNeedTitle(); CAN INSERT DOM MANIPULATION TO SHIFT DOWN THE ERROR OVERLAY :)
        console.log("Need a title to create a project!");
    }
}