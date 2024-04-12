import { dqs } from "./menuEventListeners";
import { infoOverlay, infoSection, titleDispClicked } from "./taskEventListeners";

export function infoOverlayListener(){//wrapper method for info overlay event listener close button
    const infoClose = dqs(".infoCloseButton");
    infoClose.addEventListener("click", _infoTestering);
}

function _infoTestering(){
    titleDispClicked = false;
    infoOverlay.style.animation = "projectSlideUp 1.5s forwards";//slide up info overlay...
    setTimeout(function(){
        infoSection.textContent = "";//...wait one second and clear the overlay
    }, 1000);
}