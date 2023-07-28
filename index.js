const buttons = document.querySelectorAll(".drum");
const numberOfButton = buttons.length;
for (let c = 0; c < numberOfButton; c++) {
  buttons[c].addEventListener("click", buttonClick);
}

function buttonClick() {
  let buttonName = this.innerHTML;
  playSound(buttonName);
  buttonAnimation(buttonName);
}
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(button) {
  document.querySelector("." + button).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + button).classList.remove("pressed"), 100;
  });
}
