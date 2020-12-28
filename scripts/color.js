const buttons = document.querySelectorAll('.submit');
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
    const brightness = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);
    const textColour = (brightness > 125) ? 'rgb(61, 46, 46)' : 'rgb(209, 203, 203)';
    document.querySelector('body').style.backgroundColor = rgb;
    document.querySelector('body').style.color = textColour;
    hex.textContent = ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
    span.textContent = rgb;
    displayStatus.style.display = 'none';

})

buttons[1].addEventListener('click', () => {
    const bgcolor = `rgb(255, 255, 255)`
    document.querySelector('body').style.backgroundColor = bgcolor;
    document.querySelector('body').style.color = 'rgb(61, 46, 46)';
    span.textContent = bgcolor;
    hex.textContent = '#FFFFFF';
    displayStatus.style.display = 'none';
})

span.addEventListener('click', () => {
    const clipboard = new ClipboardJS('span');
    clipboard.on('success', () => {
        displayStatus.style.display = 'block';
        displayStatus.textContent = 'Copying rgb color to clipboard was successful!';
    })
})

hex.addEventListener('click', () => {
    const clipboardHex = new ClipboardJS('#hex');
    clipboardHex.on('success', () => {
        displayStatus.style.display = 'block';
        displayStatus.textContent = 'Copying hex color to clipboard was successful!';
    })
})
