// I am grateful for the answer provided by the user "EndangeredMassa" on Stack Overflow: https://stackoverflow.com/questions/688196/how-to-use-a-link-to-call-javascript/688228#688228


// Wait for the page to load first
window.onload = function() {

  //Get a reference to the link on the page
  // with an id of "revealAnswer"
  var a = document.getElementById("revealAnswer");

  //Set code to run when the link is clicked
  // by assigning a function to "onclick"
  a.onclick = function() {

    // Your code here...
    document.getElementById('view').style.display=document.getElementById('view').style.display=='none' ? 'block':'none';

    //If you don't want the link to actually
    // redirect the browser to another page,
    // "google.com" in our example here, then
    // return false at the end of this block.
    // Note that this also prevents event bubbling,
    // which is probably what we want here, but won't
    // always be the case.

    return false;
  }
}
