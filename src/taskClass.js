//Represents a single task within a project
//each task stores a title, description, due date, priority level,
// and the project it belongs to. Tasks are created, edited, and 
//rendered through the task form and DOM modules.

export class Task{
    constructor(tTitle, tDesc, tDue, tPrio, tProj){
        //Initialize a new task with its core properties.
        //Values are assigned through setters to allow validation or formatting later
        this.tTitle = tTitle;
        this.tDesc = tDesc;
        this.tDue = tDue;
        this.tPrio = tPrio;
        this.tProj = tProj;
    }

    //Update the task's title
    set tTitle(newtTitle){
        this._tTitle = newtTitle;
    }

    //Update task's description
    set tDesc(newtDesc){
        this._tDesc = newtDesc;
    }

    //Update task's due date
    set tDue(newtDue){
        this._tDue = newtDue;
    }

    //Update task's priority level
    set tPrio(newtPrio){
        this._tPrio = newtPrio;
    }

    //Update task's parent project
    set tProj(newtProj){
        this._tProj = newtProj;
    }

    //Return task title
    get tTitle(){
        return this._tTitle;
    }

    //Return task description
    get tDesc(){
        return this._tDesc;
    }

    //Return task due date
    get tDue(){
        return this._tDue;
    }

    //Return task priority level
    get tPrio(){
        return this._tPrio;
    }

    //Return task parent project
    get tProj(){
        return this._tProj;
    }
}