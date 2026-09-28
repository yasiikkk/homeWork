// GMAIL BLOCK

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const gmailRegExp = /^[\w\d]{3,30}@gmail\.com$/;

if (gmailButton) {
  gmailButton.onclick = () => {
    if (gmailRegExp.test(gmailInput.value.trim())) {
      gmailResult.innerText = "OK";
      gmailResult.style.color = "green";
    } else {
      gmailResult.innerText = "ERROR";
      gmailResult.style.color = "red";
    }
  };
}
//MOWE BLOCK
const parentBlock = document.querySelector('.parent_block'); // Родительский блок
const childBlock = document.querySelector('.child_block');     // Маленький квадрат

let positionX = 0; 
let positionY = 0;

const maxX = parentBlock.clientWidth - childBlock.clientWidth;
const maxY = parentBlock.clientHeight - childBlock.clientHeight;
function moveSquare() {
    if (positionX < maxX && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
    } 

    else if (positionX >= maxX && positionY < maxY) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
    } 
 
    else if (positionX > 0 && positionY >= maxY) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
    } 

    else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
    }

    setTimeout(moveSquare, 5);
}

moveSquare();

//SECOND

const secondsDisplay = document.querySelector('#seconds');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let interval = null;

//START
startBtn.onclick = () => {
    if (interval) return; 

    interval = setInterval(() => {
        seconds++;
        secondsDisplay.innerHTML = seconds;
    }, 1000);
};

//STOP
stopBtn.onclick = () => {
    clearInterval(interval);
    interval = null;
};

//PAUSE
resetBtn.onclick = () => {
    clearInterval(interval);
    interval = null;
    seconds = 0;
    secondsDisplay.innerHTML = seconds;
};

//MODAL
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');
const btnGet = document.querySelector('#btn-get');

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
};

btnGet.onclick = () => openModal();

modalClose.onclick = () => closeModal();

modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};

setTimeout(openModal, 10000);

window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        openModal();
        window.onscroll = null;
    }
};