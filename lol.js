function valueOfPicsels () {
    let element = document.querySelector('#razmer');
    let value = element.value;
    return value;
}

function showHowPicsels (valueOfPicsels) {
    let element = document.querySelector('#px');
    element.textContent = valueOfPicsels() +' пикселей';
    element.style.fontSize = 16 + 'px';
}

let polzunok = document.querySelector('#razmer');
polzunok.addEventListener('mousemove', function () {
    showHowPicsels (valueOfPicsels);
});







