export class Project{
    constructor(title, description){//prject class with title and description with respective setters and getters
        this.title = title;
        this.description = description;
    }

    get title(){
        return this._title;
    }
    get description(){
        return this._description;
    }

    set title(newTitle){
        this._title = newTitle;
    }
    set description(newDesc){
        this._description = newDesc;
    }
}