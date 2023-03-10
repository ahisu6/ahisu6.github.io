// I am grateful for the answer provided by the user "am2505": https://stackoverflow.com/questions/61302125/hiding-answers-to-questions-using-javascript

function reveal($event) {
  // console.log(event);
  var temp = event.target;
  var temp1 = event.target.nextElementSibling;
  // console.log(temp);
  // console.log(temp1);
if (temp1.className=="answerBlock") {
    temp1.classList.remove("answerBlock");
    // temp.innerHTML = 'Show Answer';
} else {
    temp1.classList.add("answerBlock");
    // temp.innerHTML = 'Hide Answer';
}
}
