//Detecting Button Press

var noOfDrums = document.querySelectorAll(".drum").length;
function handle() {
  var buttonInnerHTML = this.innerHTML;
  MakeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handle);
}

//Detecting Key Press
document.addEventListener("keypress", function (event) {
  MakeSound(event.key);
  buttonAnimation(event.key);
});

function MakeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      alert("Please press the correct key");
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

// Constructor: function Factory(Name, Age, Mobileno, Hobbies) {
//   this.Name = Name;
//   this.Age = Age;
//   this.Mobileno = Mobileno;
//   this.Hobbies = Hobbies;
// }
// var Employee1 = new Factory("Kanishka", 23, 9368568272, ["Badminton", "Basketball"]);
