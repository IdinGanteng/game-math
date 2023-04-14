let question = document.getElementById("question");
let answer = document.getElementById("answer");
let result = document.getElementById("result");
let next = document.getElementById("next");
let num1, num2, op, correctAnswer;
generateQuestion();
document.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (parseInt(answer.value) == correctAnswer) {
    result.innerHTML =  "yeyy,, jawaban kamu benarr!";
    next.style.display = "inline";
    // next.style.display = "none";
  } else {
    result.innerHTML = " Bodoh sekali anda!";
  }
});
document.addEventListener("click", function(event) {
  if (event.target.id == "next") {
    generateQuestion();
    answer.value = "";
    result.innerHTML = "";
    next.style.display = "none";
  }
});
function generateQuestion() {
  num1 = Math.floor(Math.random() * 100) + 1;
  num2 = Math.floor(Math.random() * 100) + 1;
  op = Math.floor(Math.random() * 2);
  
  if (op == 0) {
    question.innerHTML = num1 + " + " + num2 + " = ?";
    correctAnswer = num1 + num2;
  } else {
    question.innerHTML = num1 + " - " + num2 + " = ?";
    correctAnswer = num1 - num2;
  }
  
}