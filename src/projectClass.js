export class Project{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.toDos = [];
    }
    get title(){
        return this._title;
    }
    get description(){
        return this._description;
    }
    get toDoList(){//get array then push a toDo
        return this._toDos;
    }

    set title(newTitle){
        this._title = newTitle;
    }
    set description(newDesc){
        this._description = newDesc;
    }

}