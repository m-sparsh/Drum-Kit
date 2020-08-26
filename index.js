// making sound using click
for( var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (event){

var buttonInnerHTML = this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
});
}



 // making sound using keypress
document.addEventListener("keypress", function(event){          //this is call back being done!

 makeSound(event.key);            //event.key will return the value of that key pressed on keyboard.
 buttonAnimation(event.key);
});



function makeSound(keywepressedorclick){
  switch (keywepressedorclick) {
    case 'w':
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;
    case 'a':
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
    case 's':
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
    case 'd':
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
    case 'j':
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;
    case 'k':
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;
    case 'l':
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
      break;
    default:


  }
}
function buttonAnimation(currentkey){
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },200);
}
