//Handles the open/close behavior for the task information overlay.
//This module only manages the closing interactions; opening the overlay
//is triggered from taskEventListeners.js when a task title is clicked.

import { dqs } from "./menuEventListeners";
import { infoOverlay, infoSection, titleDispClicked } from "./taskEventListeners";

//Attach the close button listener for the info overlay
export function infoOverlayListener(){
    const infoClose = dqs(".infoCloseButton");
    infoClose.addEventListener("click", _infoTestering);
}

//Close the infro overlay and reset its content.
function _infoTestering(){
    //Reset the flag used to track whether a title was clicked
    titleDispClicked = false;

    //trigger slide-up animation to hide the overlay
    infoOverlay.style.animation = "projectSlideUp 1.5s forwards";

    //After animation finishes, clear the displayed task info
    setTimeout(function(){
        infoSection.textContent = "";
    }, 1000);
}