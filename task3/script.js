const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
     trafficLightEl.removeEventListener('click', makeGreen);
     trafficLight2.addEventListener('click', makeYellow); 
}
trafficLightEl.addEventListener('click', makeGreen);

trafficLightEl.addEventListener('click', () => {
    if (event.pointerId===1) {
        trafficLightEl.style.background = ('green');
    }
})
trafficLight2.addEventListener('click', () => {
    if (event.pointerId===1) {
        trafficLightEl.style.background = ''}})

trafficLight3.addEventListener('click', () => {
    if (event.pointerId===1) {
        trafficLightEl.style.background = ''}})



document.querySelector('#trafficLight2');

function makeYellow() {
    trafficLight2.style.background = ('yellow');
    trafficLight2.addEventListener('click', makeYellow); 
    trafficLight3.addEventListener('click', makeRed);
}

trafficLight2.addEventListener('click', makeYellow);

trafficLight2.addEventListener('click', () => {
    if (event.pointerId===1) {
        trafficLight2.style.background = ('yellow');
    }
})
trafficLightEl.addEventListener('click', () => {
    if (event.pointerId===1) {
        trafficLight2.style.background = '';
    }
})

trafficLight3.addEventListener('click', ()=> {
    if (event.pointerId === 1) {
        trafficLight2.style.background = '';
    }})


document.querySelector('#trafficLight3');

function makeRed() {
    trafficLight3.style.background = ('red');
    trafficLight3.removeEventListener('click', makeRed);
    trafficLight2.addEventListener('click', makeYellow);
}

trafficLight3.addEventListener('click', makeRed);

trafficLight3.addEventListener('click', () => {
if (event.pointerId===1) {
    trafficLight3.style.background = ('red');
}})

trafficLightEl.addEventListener('click', () => {
if (event.pointerId===1) {
    trafficLight3.style.background = '';
}})

trafficLight2.addEventListener('click', ()=>{
    if (event.pointerId===1) {
        trafficLight3.style.background = '';
    }})



