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
    }, 1500);
}

//Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus consequat malesuada. Pellentesque id nibh et risus vulputate fringilla. Etiam nec dapibus magna. Maecenas auctor est ultricies lacus consectetur, eget tincidunt enim consectetur. Nam et ante a lorem feugiat mattis in in ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In et maximus libero, et mattis velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean et laoreet magna. Donec elit velit, hendrerit vitae pretium sed, posuere quis ex.