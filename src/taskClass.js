export class Task{
    constructor(tTitle, tDesc, tDue, tPrio, tProj){
        this.tTitle = tTitle;
        this.tDesc = tDesc;
        this.tDue = tDue;
        this.tPrio = tPrio;
        this.tProj = tProj;
    }

    set tTitle(newtTitle){
        this._tTitle = newtTitle;
    }
    set tDesc(newtDesc){
        this._tDesc = newtDesc;
    }
    set tDue(newtDue){
        this._tDue = newtDue;
    }
    set tPrio(newtPrio){
        this._tPrio = newtPrio;
    }
    set tProj(newtProj){
        this._tProj = newtProj;
    }

    get tTitle(){
        return this._tTitle;
    }
    get tDesc(){
        return this._tDesc;
    }
    get tDue(){
        return this._tDue;
    }
    get tPrio(){
        return this._tPrio;
    }
    get tProj(){
        return this._tProj;
    }
}