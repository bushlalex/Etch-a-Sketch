function valueOfPicsels () {
    let element = document.querySelector('#razmer');
    let value = element.value;
    return value;
}

function showHowPicsels (valueOfPicsels) {
    let element = document.querySelector('#px');
    element.textContent = valueOfPicsels() +' пикселей';
    element.style.fontSize = 16 + 'px';
    return valueOfPicsels();
}

let polzunok = document.querySelector('#razmer');
polzunok.addEventListener('mousemove', function () {
    showHowPicsels (valueOfPicsels);
});

function getColor () {
    return document.querySelector('#color').value
}

function changeColor () {
    let element = document.querySelector('#color');
    element.style.backgroundColor = getColor();
}

let colorChange = document.querySelector('#color');

colorChange.addEventListener('click', changeColor);

function reload () {
    location.reload();
}

let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");
context.fillStyle = getColor ();

let ispressed = false;

canvas.addEventListener('mouseup', function() {
    ispressed = false;
});

canvas.addEventListener('mousedown', function() {
    ispressed = true;    
});



canvas.addEventListener('mousemove', function() {

    if (ispressed==true) {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;
    context.fillStyle = getColor ();
    context.fillRect(x, y, showHowPicsels (valueOfPicsels), showHowPicsels (valueOfPicsels))}
    else nothing;
})





















