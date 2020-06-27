const buttons = document.querySelectorAll('button');
const span = document.querySelector('span');
const hex = document.getElementById('hex');

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

buttons[0].addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('body').style.backgroundColor = rgb;
    hex.textContent = ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
    span.textContent = rgb;

})

buttons[1].addEventListener('click', () => {
    const white = `rgb(255, 255, 255)`
    document.querySelector('body').style.backgroundColor = white;
    span.textContent = white;
    hex.textContent = '#FFFFFF';
})
