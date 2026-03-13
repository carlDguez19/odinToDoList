//Entry point for the entire application
//This file initializes all global UI listeners and sets up the overlays
//needed for creating projects and tasks

import { menuEventListen } from "./menuEventListeners";//handles sidebar/menu interactions
import { projectOverlayStuff } from "./projectForm";   //sets up project creation/edit overlay
import { _taskSubmit } from "./taskForm";              //(imported for side effects) initializes task form listeners

//Initialize global menu and navigation event listeners.
//Controls opening/closing of the sidebar and project/task panels.
menuEventListen();

//Initialize the project creation overla and its event listeners.
//Handles showing the form, submitting new projects, and updating UI
projectOverlayStuff();

//task form listeners are initialized on import (taskForm.js).
//No direct call needed here.