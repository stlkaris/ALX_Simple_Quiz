function checkAnswer () {
   const correctAnswer = "4";

   const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    
   const userAnswer = selectedAnswer ? selectedAnswer.value : null;
   
   if(userAnswer === correctAnswer) {
      document.getElementById('feedback').textContent = 'Correct! well done.';
   } else {
      document.getElementById('feedback').textContent = "That's incorrect. Try again!";
   }

}

document.getElementById("submit-answer").addEventListener('click', checkAnswer)
