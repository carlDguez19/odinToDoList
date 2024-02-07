// import { dqs } from "./menuEventListeners";
// import { findProjectInArr } from "./projectEventListeners";
// import { Project } from "./projectClass";
// import { Task } from "./taskClass";
// import { clearTaskMain } from "./taskDOM";
// import { taskOverlay, taskOverlayListeners } from "./taskForm";

// // export function taskEListeners(){
// //     document.addEventListener('click', _taskTestering)
// //     //add the eventListener for the change of the date picker
// // };

// export let taskEditButton = false;
// //export let taskName= null;
// let taskRemButton = false;
// //const projNameRem = dqs(".projectNameMain");PLACEMENT OF THIS OUT HERE CAUSES MAJOR BUG
// //const projRemEd = findProjectInArr(projNameRem.textContent);WIPES THE ENTIRE DISPLAY AREA AND MENU(EVERYTHING BASICALLY O_o)

// // export function giveTaskName(taskName){
// //     return taskName;
// // }

// export function _taskTestering(e){//var _taskTestering = function(e){

//     //const taskName = getTaskNameLi();

//     taskName = e.target.parentElement.parentElement.parentElement;
//     //giveTaskName(taskName.textContent);
//     //const projNameRem = dqs(".projectNameMain");
//     //const projRemEd = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)

//     // // // // if(e.target.matches(".taskProjEdit")){//this will be done last first we will work on REMOVE
//     // // // //     //const taskName = e.target.parentElement.parentElement.textContent;
//     // // // //     //console.log("current task Name is2222: " + taskName);
//     // // // //     taskEditButton = true;
//     // // // //     console.log("morePestoPlease: " + taskName.textContent);
//     // // // //     //bring taskform down find task and prefill with taskName and date
//     // // // //     //set taskEditButton = true and on taskForm.js set 'if(taskEditButton)' on submit button
//     // // // //     //that will encapsulate edit algorithm
//     // // // //     const projNameEd = dqs(".projectNameMain");
//     // // // //     const projEd = findProjectInArr(projNameEd.textContent);
//     // // // //     const editTask = projEd.findTask(taskName.textContent);
//     // // // //     editTaskForm(editTask);
//     // // // //     //code here for edit on task
//     // // // // }
//     if(e.target.matches(".taskProjRemove")){//"else if" if all three buttons are in this section
//         taskRemButton = true;
//         console.log(taskName.textContent);
//         const projNameRem = dqs(".projectNameMain");
//         const projRem = findProjectInArr(projNameRem.textContent);//project class will have a func that can go through its task array and remove a specified task :)
//         projRem.removeTaskFromArr(taskName.textContent);
//         projRem.printTasks();
//         clearTaskMain(taskName.textContent);
//         //code here for removal of individual task
//     }
// }

// export function getTaskNameLi(){
//     return theThing.target.parentElement.parentElement.parentElement;
// }

// export function editTaskForm(task){
//     taskOverlay.style.animation = "projectSlideDown 1.5s forwards";
//     //get dqs(#title) and dqs(#date) and set value to task title and date as default
//     const taskTitleForm = dqs("#tTitle");
//     const taskDateForm = dqs("#tDueDate");
//     taskTitleForm.value = task.tTitle;
//     taskDateForm.value = task.tDue;
//     taskOverlayListeners();//last thing i added 1/27/2024 5:00pm
// }