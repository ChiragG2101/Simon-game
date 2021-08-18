nextSequence()
{
    var randomNumber=Math.floor(Math.random()*4);
}
var buttonColours=["red","blue", "green", "yellow"];

var randomChosenColour = buttonColours[randomNumber];
var gamePattern=[];
gamePattern.push(randomChosenColour);