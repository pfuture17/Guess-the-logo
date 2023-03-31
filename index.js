const logos = [
  {
    image: "photos/adidas.png",
    answer: "adidas",
  },
  {
    image: "photos/jb.png",
    answer: "jolibee",
  },
  {
    image: "photos/lg.png",
    answer: "logitech",
  },
];

let currentLogoIndex = 0;
const logoElement = document.getElementById("logo");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");
let score = 3;
document.getElementById("score").innerHTML = score;

function loadNextLogo() {
  const logo = logos[currentLogoIndex];
  logoElement.src = logo.image;
  answerElement.value = "";
  resultElement.innerHTML = "";
}

function checkAnswer() {
  const logo = logos[currentLogoIndex];
  const answer = answerElement.value.toLowerCase();
  if (answer === logo.answer.toLowerCase()) {
    alert("Correct!");
    currentLogoIndex++;
    score++;
    document.getElementById("score").innerHTML = score;
    if (currentLogoIndex >= logos.length) {
      currentLogoIndex = 0;
    }
    loadNextLogo();
  } else {
    alert("Incorrect! Please Try Again");
    score--;
    document.getElementById("score").innerHTML = score;
    document.getElementById("answer").value = "";
    if (score <= 0) {
      resultElement.innerHTML = "GAME OVER BITCH, GAME WILL RESTART";
      setTimeout(function () {
        location.reload();
      }, 3000);
    }
  }
}

loadNextLogo();
