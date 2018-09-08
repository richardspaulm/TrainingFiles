"use strict";
console.log("hello");


//Query Selector to get a single object
var header1 = document.getElementById("mainHeader");

//Modify Content between the HTML tags
header1.innerHTML = "Now it's a variable";

//Modify the ID attribute. Can replace ID with any attribute
header1.id = "jsId";

//Query Selector for all Elements of HTML tag
var header2s = document.getElementsByTagName("h2");

//Iterate through HTML Collection. NOT AN ARRAY, BUT LIKE AN ARRAY
for(var i = 0; i < header2s.length; i++){
	header2s[i].innerHTML = "This is header: " + (i+1);
}

//Query Selector for all elements with classname
var smallHeads = document.getElementsByClassName("smallHead");

for(var j = 0; j < smallHeads.length; j++){
	smallHeads[j].style.fontSize = "20px";
}


//Query Selector for all Tags with the selected Class or ID name
var smallPs = document.querySelectorAll("p.smallHead");


var dateDiv = document.getElementById("dateContainer");

//Creates a P element and adds the current Date to it
function AddDate(){
	var dateP = document.createElement("p");
	dateP.append(Date());
	dateP.setAttribute("class", "dateP");
	dateDiv.append(dateP);
}

//Input Text Functions for focus, blur, and letter counting
var inputText = document.getElementById("inputText");
function InputFocus(){
	inputText.style.backgroundColor = "lightgrey";
}
function InputBlur(){
	inputText.style.backgroundColor = "white";
}

var letterCount = document.getElementById("letterCount");
function LetterCount(){
	letterCount.innerHTML = inputText.value.length;
}

function SetSize(){
	inputText.style.width = "400px";
	inputText.style.height = "100px";
}