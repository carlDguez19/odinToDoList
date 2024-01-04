import { Task } from "./taskClass";

export class Project{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.toDos = [];
    }
    newTask(Ttitle, Tdesc, Tdue, Tprio, Tproj){
        let t = new Task(Ttitle, Tdesc, Tdue, Tprio, Tproj);
        this.toDos.push(t);//placed underscore
        return t;
    }

    get numOfTasks(){
        return this._toDos.length;//placed underscore
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