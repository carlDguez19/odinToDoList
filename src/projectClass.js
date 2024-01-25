import { Task } from "./taskClass";

export class Project{
    constructor(title, description){
        this.title = title;
        this.description = description;
        this.toDos = [];
    }

    getLastTask(){
        return this.toDos[this.toDos.length-1];
    }

    editTask(taskName){
        for(let i = 0; i < this.toDos.length; i++){
            if(this.toDos[i].tTitle == taskName){
                this.toDos[i].tTitle = this.toDos[this.toDos.length-1].tTitle;
                this.toDos[i].tDesc = this.toDos[this.toDos.length-1].tDesc;
                this.toDos[i].tDue = this.toDos[this.toDos.length-1].tDue;
                this.toDos[i].tPrio = this.toDos[this.toDos.length-1].tPrio;
                this.toDos[i].tProj = this.toDos[this.toDos.length-1].tProj;
            }
        }
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