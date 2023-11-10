// //create logic side of project and create dom manipulation side project
// class Project{
//     constructor(title = 'testTitlepoop', description){//add a default parameter for an array of todo's here that will get updated each time the user adds or removes or completes a todo
//         this.title = title;
//         this.description = description;
//     }

//     get title(){
//         return this.title;
//     }
//     get description(){
//         return this.description;
//     }

//     set title(newTitle){
//         this.title = newTitle;
//     }
//     set description(newDescription){
//         this.description = newDescription;
//     }
// }//end class Project

export function projectInit(){
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

    let testProject23 = new Project('carlosRocks', 'this is a test of the emergency broadcast system');
    console.log(testProject23.title);
    console.log(testProject23.description);
    // const createProjButton = document.querySelector(".createProj");
    // createProjButton.addEventListener("click", createProject);

    // function createProject(){
    //     const project1 = new Project();
    //     console.log(project1.title);
    //     console.log(project1.description);
    // }
}

export function projectLogic(){

}

export function projectDOM(){

}