const statusMessage = document.querySelector('.status-title');
const readyImg = document.querySelector('.status--ready');
const pendingImg = document.querySelector('.status--pending');
const successImg = document.querySelector('.status--success');
const block = document.querySelector('.status-img');
const container = document.querySelector('.container');
const pies = document.querySelectorAll('.pie')


const spinner = document.querySelector('.spinner'),
    filler = document.querySelector('.filler'),
    mask = document.querySelector('.mask');
let duration = 5;


startStatusAnimation();
createCircles()
setInterval(() => {
    createCircles()
}, 1500)

let delay = (duration / 2) * 1000;


setTimeout(() => {
    //show second img, hide first img
    statusMessage.textContent = "Payment processing";
    readyImg.classList.add('hide');
    showImg(pendingImg)


    setTimeout(() => {
        //show third img, hide second img, delete first img
        hideImg(readyImg);
        pendingImg.classList.add('hide');
        statusMessage.textContent = "Complete";
        showImg(successImg);
        block.style.border = "2px solid #fff"
        pies.forEach(item => {
            item.style.display = "none";
        })

        setTimeout(() => {
            //scale block & delete second img
            hideImg(pendingImg);
            block.style.animation = `scale .5s linear normal forwards`;
        }, 0)
    }, delay);

}, delay)

function showImg(img) {
    img.classList.add('active');
    img.classList.add('show');
}

function hideImg(img) {
    img.style.display = "none";
}

function startStatusAnimation() {
    spinner.style.animation = `rota ${duration}s linear normal forwards`;
    filler.style.animation = `fill ${duration}s steps(1, end) normal forwards`;
    mask.style.animation = `mask ${duration}s steps(1, end) normal forwards`;
    readyImg.classList.add('active');
}

function createCircles() {
    let elem = document.createElement('div');
    elem.classList.add('shadow');
    container.append(elem)
    setTimeout(() => {
        elem.remove();
    }, 7000)
}