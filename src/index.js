import { menuEventListen } from "./menuEventListeners";
import { Project } from "./projectClass";
menuEventListen();
let proj1 = new Project("carlosBruh", "apiuf");
console.log(proj1.name);
console.log(proj1.description);