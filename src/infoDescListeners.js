import { dqs } from "./menuEventListeners";
import { infoOverlay, infoSection, titleDispClicked } from "./taskEventListeners";

export function infoOverlayListener(){
    const infoClose = dqs(".infoCloseButton");
    infoClose.addEventListener("click", _infoTestering);
}

function _infoTestering(){
    titleDispClicked = false;
    infoOverlay.style.animation = "projectSlideUp 1.5s forwards";
    setTimeout(function(){
        infoSection.textContent = "";
    }, 1000);
}