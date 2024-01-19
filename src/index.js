import { menuEventListen, projArr } from "./menuEventListeners";
import { addProjectToSidebar, displayProjectInMain } from "./projectDOM";
import { projectOverlayStuff } from "./projectForm";
import { taskOverlayListeners, _taskSubmit } from "./taskForm";
import { projectEListeners } from "./projectEventListeners";
import { Project } from "./projectClass";

menuEventListen();
projectOverlayStuff();
const defProj = new Project("defaultProject", "This is a default project. You can also create your own :)");
projArr[0] = defProj;
displayProjectInMain(defProj);
addProjectToSidebar("defaultProject");
//projectEListeners();//THIS WAS COMMENTED OUT
//taskOverlayListeners();//THIS WAS COMMENTED OUT