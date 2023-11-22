export class Project{
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.toDos = [];
    }
    get name(){
        return this._name;
    }
    get description(){
        return this._description;
    }
    get toDoList(){
        return this._toDos;
    }

    set name(newName){
        this._name = newName;
    }
    set description(newDesc){
        this._description = newDesc;
    }
    set toDos(newToDo){
        this._toDos = newToDo;
    }
}