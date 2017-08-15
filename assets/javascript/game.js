var wins=0;
var rounds=0;
var playArea= document.getElementById("Play-Area");
playArea.innerHTML ='<img class = "image" src="assets/images/Blank.jpg">';
var blaziken= document.getElementById("Blaziken");
var charizard= document.getElementById("Charizard");
var eevee= document.getElementById("eevee");
var poliwhirl= document.getElementById("Poliwhirl");
var zapdos= document.getElementById("Zapdos");
var response= document.getElementById("Response");
var correct= document.getElementById("Correct");
var plays= document.getElementById("Rounds");
var endGame= document.getElementById("Win-Card");
endGame.innerHTML='<img class = "image" src="assets/images/Back.png">';
response.innerHTML="-";
correct.innerHTML="You have collected " + wins + " psychic energy cards";
plays.innerHTML= "rounds of cards played: "+ rounds;
function Game (button)
{
	rounds++;
	var random=Math.ceil(Math.random()*5);
	if (random===button) 
	{
		wins++;
		response.innerHTML="correct";
	}
	else
	{
		response.innerHTML="incorrect";
	}
	switch (random)
	{
		case 1:
		playArea.innerHTML = '<img src="assets/images/Blaziken.jpg">';
		break;
		case 2:
		playArea.innerHTML = '<img src="assets/images/Charizard.jpg">';
		break;
		case 3:
		playArea.innerHTML = '<img src="assets/images/eevee.jpg">';
		break;
		case 4:
		playArea.innerHTML = '<img src="assets/images/Poliwhirl.jpg">';
		break;
		case 5:
		playArea.innerHTML = '<img src="assets/images/Zapdos.jpg">';
		break;
		default:
		alert("how?");
		break;
	}
	correct.innerHTML="You have collected " + wins + " psychic energy cards";
	plays.innerHTML= "rounds of cards played: "+ rounds;
	if(wins>24)
	{
		endGame.innerHTML='<img class = "image" src="assets/images/Alakazam.jpg">'
	}
}
blaziken.onclick = function(){
	Game(1);
};
charizard.onclick = function(){
	Game(2);
};
eevee.onclick = function(){
	Game(3);
};
poliwhirl.onclick = function(){
	Game(4);
};
zapdos.onclick = function(){
	Game(5);
};