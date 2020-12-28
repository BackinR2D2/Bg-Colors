const buttons = document.querySelectorAll('.submit');
const hex = document.getElementById('hex');
const span = document.querySelector('span');
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
    span.setAttribute("data-clipboard-text", rgb);
    const brightness = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);
    const textColour = (brightness > 125) ? 'rgb(61, 46, 46)' : 'rgb(209, 203, 203)';
    document.querySelector('body').style.backgroundColor = rgb;
    document.querySelector('body').style.color = textColour;
    hex.textContent = ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
    hex.setAttribute("data-clipboard-text", ("#" + componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase());
    span.textContent = rgb;
    displayStatus.style.display = 'none';

})

buttons[1].addEventListener('click', () => {
    const bgcolor = `rgb(255, 255, 255)`
    document.querySelector('body').style.backgroundColor = bgcolor;
    document.querySelector('body').style.color = 'rgb(61, 46, 46)';
    span.textContent = bgcolor;
    hex.textContent = '#FFFFFF';
    span.setAttribute("data-clipboard-text", bgcolor);
    hex.setAttribute("data-clipboard-text", "#FFFFFF");
    displayStatus.style.display = 'none';
})

const clipboardRgb = new ClipboardJS(span);
clipboardRgb.on('success', function (e) {
    M.toast({
        html: 'Rgb color has been copied to the clipboard.',
        displayLength: 1500,
        outDuration: 300,
    })
});

clipboardRgb.on('error', function (e) {
    M.toast({
        html: 'Some error occured... Try again',
        displayLength: 1500,
        outDuration: 300,
    })
});

const clipboardHex = new ClipboardJS(hex);
clipboardHex.on('success', function (e) {
    M.toast({
        html: 'Hex color has been copied to the clipboard.',
        displayLength: 1500,
        outDuration: 300,
    })
});

clipboardHex.on('error', function (e) {
    M.toast({
        html: 'Some error occured... Try again',
        displayLength: 1500,
        outDuration: 300,
    })
});

