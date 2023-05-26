// function consoleWrite(hudConsoleObj, msg) {
//     let text = hudConsoleObj.getAttribute('text');
//     text.value = msg;
//     hudConsoleObj.setAttribute('text',text);
// }

function consoleWrite(hudConsoleObj, msg, color = 'white') {
    let text = hudConsoleObj.getAttribute('text');
    text.value = msg;
    text.color = color;
    
    hudConsoleObj.setAttribute('text',text);
}

function changeAttribute(id, attribute, value){
    id.setAttribute(`${attribute}`, `${value}`);
}

function changePosition(id, new_position){
    id.setAttribute('position', new_position);
}

function changeVisibility(id, status = false){
    id.setAttribute('visible', `${status}`)
}

function changeColor(id, color){
    let material = id.getAttribute('material');
    material.color = color;
    id.setAttribute('material',material);
}

function performAnim(objId, dir) {
    obj = document.getElementById(objId);
    obj.removeAttribute('animation-mixer');
    obj.setAttribute('animation-mixer','loop: repeat; repetitions: 1; timeScale: '+dir+'; clampWhenFinished: true');
}