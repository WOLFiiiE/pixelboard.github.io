alert("⚠ Please use PC or Tablet for the best experince ⚠");

var feeling=prompt("♡ Hi, How are you feeling today? ♡");

var colour="pink";

function change(name) {
    var x = document.getElementById(name);
    x.style.backgroundColor = colour;
};

function clearColour()
{
	colour="white";
};

function makeBunnyActive()
{
	var bunny=document.querySelector("#bunny");
	bunny.src="activeBunny.gif";
};

function makeBunnySleep()
{
	var bunny=document.querySelector("#bunny");
	bunny.src="lazyBunny.gif";	
};

function clearAllPixels(){
	var pixels=document.getElementsByTagName('button');

	for(var i=0; i<pixels.length ; i++)
	{
		pixels[i].style.backgroundColor="white";
	}
}

function fillAllPixels(){
	var pixels=document.getElementsByTagName('button');

	for(var i=0; i<pixels.length ; i++)
	{
		pixels[i].style.backgroundColor=colour;
	}
};

function changeColourVar(){
	colour=document.getElementById('colourPicker').value;
};