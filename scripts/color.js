const buttons = document.querySelectorAll('button');
const span = document.querySelector('span');
const hex = document.getElementById('hex');
const displayStatus = document.getElementById('displayMessage');

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

buttons[0].addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let rgb = `rgb(${r}, ${g}, ${b})`;
    document.querySelector('body').style.backgroundColor = rgb;
    hex.textContent = ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
    span.textContent = rgb;
    displayStatus.style.display = 'none';

})

buttons[1].addEventListener('click', () => {
    const white = `rgb(255, 255, 255)`
    document.querySelector('body').style.backgroundColor = white;
    span.textContent = white;
    hex.textContent = '#FFFFFF';
    displayStatus.style.display = 'none';
})

span.addEventListener('click', () => {
    let clipboard = new ClipboardJS('span');
    clipboard.on('success', () => {
        displayStatus.style.display = 'block';
        displayStatus.textContent = 'Copying rgb color to clipboard was successful!';
    })
})

hex.addEventListener('click', () => {
    let clipboardHex = new ClipboardJS('#hex');
    clipboardHex.on('success', () => {
        displayStatus.style.display = 'block';
        displayStatus.textContent = 'Copying hex color to clipboard was successful!';
    })
})
