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

    findTask(titleName){
        for(var i = 0; i < this.toDos.length; i++){
            if(this.toDos[i].tTitle == titleName){
                return this.toDos[i];
            }
        }
    }

    removeTaskFromArr(titleName){
        for(var i = 0; i < this.toDos.length; i++){
            if(this.toDos[i].tTitle == titleName){
                this.toDos.splice(i,1);
            }
        }
    }

    printTasks(){
        console.log("current tasks in project: ");
        for(var i = 0; i < this.toDos.length; i++){
            console.log(this.toDos[i].tTitle);
        }
    }

    get numOfTasks(){
        return this.toDos.length;//placed underscore
    }

    get title(){
        return this._title;
    }
    get description(){
        return this._description;
    }
    get toDoList(){//get array then push a toDo
        return this.toDos;
    }

    set title(newTitle){
        this._title = newTitle;
    }
    set description(newDesc){
        this._description = newDesc;
    }

}