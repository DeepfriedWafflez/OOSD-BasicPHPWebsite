//Sticky Navigation bar
window.onscroll = function() {myFunction()};
var topNav = document.getElementById("topNav");
var sticky = topNav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    topNav.classList.add("sticky")
  } else {
    topNav.classList.remove("sticky");
  }
}

//Submit Button Confirmation
var submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event)
{
  var choice = confirm("Are you   sure you want to submit the form?");
  if(choice=true)
  {
    console.log("Data Submitted")
  }else{
    console.log("Data declined");
  }
});

//Reset Button Confirmation
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function(event)
{
  var choice = confirm("Are you sure you want to reset the form?");
  if(choice=true)
  {
    console.log("Data Reset")
  }else{
    console.log("Data not Reset");
  }
});


