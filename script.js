//ELEMENTS
//Buttons
const newGame = document.querySelector("#newgame");
const rollDice = document.querySelector("#rolldice");
const hold = document.querySelector("#hold");
//Others
const p1Total = document.querySelector("#p1total");
const p2Total = document.querySelector("#p2total");
const img = document.querySelector("#dice");
const p1Current = document.querySelector("#p1current");
const p2Current = document.querySelector("#p2current");
const p1Box = document.querySelector("#p1box");
const p2Box = document.querySelector("#p2box");
let value = 0;
p1Total.value = 0;
p1Current.value = 0;
p2Total.value = 0;
p2Current.value = 0;
//Random Dice

//Events and functions for effects
document
  .querySelector(".allbuttons")
  .addEventListener("mousedown", buttonEffect);
document
  .querySelector(".allbuttons")
  .addEventListener("mouseup", clearButtonEffect);

function buttonEffect(e) {
  if (e.target.className.includes("btn")) {
    e.target.classList.remove("shadowout");
    e.target.classList.add("shadowin");
  }
}
function clearButtonEffect(e) {
  if (e.target.className.includes("btn")) {
    e.target.classList.remove("shadowin");
    e.target.classList.add("shadowout");
  }
}

//Events and functions for Game Rules
rollDice.addEventListener("click", rolling);
hold.addEventListener("click", holding);
newGame.addEventListener("click", resetGame);

function rolling() {
  if (p1Total.value < 100 && p2Total.value < 100) {
    const dice = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `img/dice-${dice}.png`);
    if (dice !== 1) {
      if (p1Box.getAttribute("class").includes("lightpink")) {
        value += dice;
        p1Current.value = value;
        p1Current.innerHTML = value;
      } else if (p2Box.getAttribute("class").includes("lightpink")) {
        value += dice;
        p2Current.value = value;
        p2Current.innerHTML = value;
      }
    } else {
      value = 0;
      p1Current.innerHTML = value;
      p2Current.innerHTML = value;
      if (p1Box.getAttribute("class").includes("lightpink")) {
        p1Box.className = "container-right darkpink";
        p2Box.className = "container-left lightpink fade";
      } else if (p2Box.getAttribute("class").includes("lightpink")) {
        p1Box.className = "container-right lightpink fade";
        p2Box.className = "container-left darkpink";
      }
    }
  } else {
    if (p1Total.value >= 100) {
      document.getElementById("winnerp1").innerHTML = "WINNER";
    } else if (p2Total.value >= 100) {
      document.getElementById("winnerp2").innerHTML = "WINNER";
    }
  }
}
function holding() {
  if (p1Total.value < 100 && p2Total.value < 100) {
    if (p1Box.getAttribute("class").includes("lightpink")) {
      if (p1Current.value !== "0") {
        p1Total.value += p1Current.value;
        p1Current.value = 0;
        p1Current.innerHTML = p1Current.value;
        p1Total.innerHTML = p1Total.value;
      }
      p1Box.className = "container-right darkpink";
      p2Box.className = "container-left lightpink fade";
      value = 0;
    } else if (p2Box.getAttribute("class").includes("lightpink")) {
      if (p2Current.value !== "0") {
        p2Total.value += p2Current.value;
        p2Current.value = 0;
        p2Current.innerHTML = p2Current.value;
        p2Total.innerHTML = p2Total.value;
      }
      p1Box.className = "container-right lightpink fade";
      p2Box.className = "container-left darkpink";
      value = 0;
    }
  } else {
    if (p1Total.value >= 100) {
      document.getElementById("winnerp1").innerHTML = "WINNER";
    } else if (p2Total.value >= 100) {
      document.getElementById("winnerp2").innerHTML = "WINNER";
    }
  }
}
function resetGame() {
  value = 0;
  p1Total.value = 0;
  p1Total.innerHTML = p1Total.value;
  p1Current.value = 0;
  p1Current.innerHTML = p1Current.value;
  p2Total.value = 0;
  p2Total.innerHTML = p2Total.value;
  p2Current.value = 0;
  p2Current.innerHTML = p2Current.value;
  p1Box.className = "container-right lightpink";
  p2Box.className = "container-left darkpink";
  document.getElementById("winnerp1").innerHTML = "PLAYER 1";
  document.getElementById("winnerp2").innerHTML = "PLAYER 2";
  p1Box.className = "container-right lightpink fade";
  p2Box.className = "container-left darkpink fade";
}
