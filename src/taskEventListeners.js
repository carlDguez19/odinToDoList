export function taskEListeners(){
    document.addEventListener('click', _taskTestering)
};
let taskEditButton = false;
let taskRemButton = false;
export var _taskTestering = function(e){
    if(e.target.matches(".taskProjEdit")){//this will be done last first we will work on REMOVE
        taskEditButton = true;
        const taskName = e.target.parentElement.textContent;
        console.log(taskName);

        //code here for edit on task
    }
    else if(e.target.matches(".taskProjRemove")){
        taskRemButton = true;
        const taskNameRem = e.target.parentElement.parentElement.parentElement.textContent;
        console.log(taskNameRem);
        //code here for removal of individual task
    }
}