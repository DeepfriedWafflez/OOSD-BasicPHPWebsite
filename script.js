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
/*
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

*/

var photoAlbum = document.getElementsByTagName('section')[0];
var table = document.createElement('table');

var img1 = document.createElement('img');
img1.src = "Images/Travel1.jpg";
var img2 = document.createElement('img');
img2.src = "Images/Travel2.jpg";
var img3 = document.createElement('img');
img3.src = "Images/Travel3.jpg";
var img4 = document.createElement('img');
img4.src = "Images/Travel4.jpg";

var images = [img1, img2, img3, img4];
var descs = ['photo1', 'photo2', 'photo3', 'photo4'];

var x = descs.length;
//Adds image and matching desc to a tablerow, then adds the row to the table
for(var i = 0; i < x; i++) {
  var newRow = document.createElement('tr');
  newRow.appendChild(images[i]);
  var tdText = newRow.appendChild(document.createElement('td'));
  tdText.innerHTML = descs[i];
  table.appendChild(newRow);
}
console.log(table);
photoAlbum.appendChild(table);
