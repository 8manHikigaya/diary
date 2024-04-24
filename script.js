const slidercontainer =document.querySelector(".container");
const innerslider = document.querySelector(".slider");
const images =["1.jpg", "2.jpg", "3.jpg"];

const events = {
    mouse: {down: "mousedown", move: "mousemove", up: "mouseup"},
    touch: { down: "touchstart", move: "touchmove", up: "touchend"}
};

let devicetype = '';

function istouchdevice(){
    try{
        document.createEvent("TouchEvent");
        devicetype = "touch";
        return true;

    }catch (e){
        devicetype = "mouse";
        return false;
    }
}

function