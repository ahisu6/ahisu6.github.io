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

// @@html:<div onclick="reveal()">Click this sentence to see the answers! <span class="jp">この文章をクリックすると、答えが表示されます！</span></div><div style="display: none;">@@
// 
// These can be in Org-mode text/list/etc.
// Answer goes here
// Blah, blah...
// 
// @@html:</div></div>@@
