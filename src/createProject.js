//create logic side of project and create dom manipulation side project
class Project{
    constructor(title, description){//add a default parameter for an array of todo's here that will get updated each time the user adds or removes or completes a todo
        this.title = title;
        this.description = description;
    }

    get title(){
        return this.title;
    }
    get description(){
        return this.description;
    }

    set title(newTitle){
        this.title = newTitle;
    }
    set description(newDescription){
        this.description = newDescription;
    }
}//end class Project

export function projectInit(){
    const createProjButton = document.querySelector(".createProj");
    createProjButton.addEventListener("click", createProject);

    function createProject(){
        const project1 = new Project()
    }
}

export function projectLogic(){

}

export function projectDOM(){

}