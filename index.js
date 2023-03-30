const logos = [
    { image: "https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg", answer: "Apple" },
    { image: "https://pentagram-production.imgix.net/ea053844-c063-4130-9425-4a193f82e1e3/ps_windows_01.jpg?rect=67%2C364%2C1665%2C1040&w=880&fit=crop&fm=jpg&q=70&auto=format&h=548", answer: "Microsoft" },
    { image: "https://1000logos.net/wp-content/uploads/2016/11/google-logo.jpg", answer: "Google" }
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
      resultElement.innerHTML = "Correct!";
      currentLogoIndex++; // Move to the next logo
      score++;
      document.getElementById("score").innerHTML = score;
      if (currentLogoIndex >= logos.length) {
        currentLogoIndex = 0; // Reset to the first logo
      }
      loadNextLogo(); // Load the next logo
    } else {
      resultElement.innerHTML = "Wrong, try again.";
      score--;
      document.getElementById("score").innerHTML = score;
      if(score <=0){
        resultElement.innerHTML = "GAME OVER BITCH"
      }
    }
  }
  
  
  loadNextLogo();
  