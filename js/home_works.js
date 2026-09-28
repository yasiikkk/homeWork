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

function moveBlock() {
    if (positionX < 440) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        
        setTimeout(moveBlock, 10); 
    }
}

moveBlock();