document.addEventListener("DOMContentLoaded", () => {
  // Adding the variables that target our elements
  const board = document.querySelector(".container");
  const errorMsg = document.querySelector(".invalid-number");
  const selectBut = document.querySelector(".select-but");
  const buttonContainer = document.querySelector(".buttons-container");
  let buttonClicked="black-but"

  createPixels(16);

  // This event listener will activate the prompt whenever we click the select button and create the divs
  selectBut.addEventListener("click", () => {
    let getPixelsNum = getUserNumPixels();
    createPixels(getPixelsNum);
  });

  // This is the function that will create our divs in the board
  function createPixels(pixelsNum) {
    board.style.gridTemplateColumns = `repeat(${pixelsNum},1fr)`;
    board.style.gridTemplateRows = `repeat(${pixelsNum},1fr)`;

    let numOfDivs = pixelsNum * pixelsNum;

    for (let i = 0; i < numOfDivs; i++) {
      let newDiv = document.createElement("div");
      board.insertAdjacentElement("beforeend", newDiv);
      newDiv.addEventListener("mouseover",changeColor);
    }
  }

  // This function creates a prompt that ask the user for the number of divs in the board
  function getUserNumPixels() {
    inputPixels = prompt("How many pixels do you want for the board?");
    if (inputPixels == "") {
      errorMsg.innerHTML = "Please provide a number";
    } else if (inputPixels < 0 || inputPixels > 100) {
      errorMsg.innerHTML = "Please enter a number between 1 and 100";
    } else {
      errorMsg.innerHTML = "Have Fun!";
    }
    return inputPixels;
  };

  

  // get the button clicked by the user
    buttonContainer.addEventListener("click", function (event) {
      if (event.target.tagName === "BUTTON") {
       buttonClicked= event.target.classList.value;
      }
    });
 

// Makes the buttons work  
function changeColor(){

if(buttonClicked == "random-but"){ this.style.backgroundColor = `hsl(${Math.random() * 360},100%, 50%)`

}else if(buttonClicked =="erase-but"){this.style.backgroundColor="rgba(240, 248, 255, 0)"  } 
else {this.style.backgroundColor="black"}

}


});
