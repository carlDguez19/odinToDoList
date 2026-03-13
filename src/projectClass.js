//Represents a single project in the application.
//Each project stores a title and description, and acts as a container
//for the tasks associated with it (tasks are managed in taskClass.js)

export class Project{
    constructor(title, description){//prject class with title and description with respective setters and getters
        //Initialize a new project with a title and description.
        //Values are stored using setters to allow validation or formatting
        this.title = title;
        this.description = description;
    }

    //Return projects title
    get title(){
        return this._title;
    }

    //Return projects description
    get description(){
        return this._description;
    }

    //Update the project's title
    set title(newTitle){
        this._title = newTitle;
    }

    //Update the project's description
    set description(newDesc){
        this._description = newDesc;
    }
}