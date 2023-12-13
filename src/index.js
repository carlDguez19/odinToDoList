import { menuEventListen, projArr } from "./menuEventListeners";
import { addProjectToSidebar, displayProjectInMain } from "./projectDOM";
import { projectOverlayStuff } from "./projectForm";
import { taskOverlayListeners } from "./taskForm";
//import { projectEListeners } from "./projectEventListeners";
// import { Project } from "./projectClass";
// import { createProjectFromData } from "./projectForm";
menuEventListen();
projectOverlayStuff();
displayProjectInMain({title: "defaultProject", description: "This is a default project. You can also create your own :)"});
addProjectToSidebar("defaultProject");
projArr[0] = {title: "defaultProject", description: "This is a default project. You can also create your own :)"};
taskOverlayListeners();
//projectEListeners();
// let proj1 = new Project("carlosBruh", "apiuf");
// console.log(proj1.name);
// console.log(proj1.description);