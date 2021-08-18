userClickedPattern=[];


var gamePattern=[];


var buttonColours=["red","blue", "green", "yellow"];

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    
    var clickAudio = new Audio('sounds/'+userChosenColour+'.mp3');
    clickAudio.play();
});


nextSequence()
{
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    var audio = new Audio('sounds/'+randomChosenColour+'.mp3');
    audio.play();
}


