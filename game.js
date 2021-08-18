var userClickedPattern=[];

var started=false;
var level=0;

var gamePattern=[];


var buttonColours=["red","blue", "green", "yellow"];


$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    var clickAudio = new Audio('sounds/'+userChosenColour+'.mp3');
    clickAudio.play();
    
    $("#" + userChosenColour).addClass("pressed");
    
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);
    
    checkAnswer(userClickedPattern.length-1);
});

$(document).keypress(function() {
    if (!started) {
  
      //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  

function nextSequence()
{
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
   
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    audio.play();
    
}


// if (randomChosenColour===userChosenColour) {
//     started=false;
//     if (!started) {
  
//         nextSequence();
//         started = true;
//       }
// }
// else if (started) {
    
//     $("#level-title").text("You Loose");
// }



function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequence();
            }, 800);
    
          }
    
    }
    else {console.log("failed");
    
    }

}
