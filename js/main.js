"use strict";

/*var a = 10;

if(a > 5 || 3 < 2)
{
	console.log('Ta da');
}*/

var camelCase;

//Object Constructor -- Use to create an object with these four properties
function Person(firstName, lastName, age, hobby, language){
	this.firstName = firstName,
	this.lastName = lastName,
	this.age = age,
	this.hobby = hobby,
	this.FullName = function(){
		console.log(this.firstName + " " + this.lastName);
	}
};
//Object Initialization -- Create Objects as variable, with the assigned four values for each
var Paul = new Person("Paul", "Richards", 25, "Coding");
var Sunny = new Person("Sunny", "Balmiki", 25, "Football");
var Dheeraj = new Person("Dheeraj", "Chettri", 25, "Reading");
var Ravi = new Person("Ravi", "Ranjan", 23, "Gaming");


//Array of objects. Arrays can be all the same type, or different types.
var friends = [Paul, Sunny, Dheeraj, Ravi];

//Function that returns the square of the input number
function FirstFunction(num){
	return num*num;
}



//Returns the first name, a message, and a hobby for every item inside the array
function NameAndHobby(arr){
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i].firstName + " likes to do " + arr[i].hobby);
	}
}

//Find all the even numbers from 0 until the input number
function FindEvenNumbers(num){
	for(var j = 0; j <= num; j++){
		if(j % 2 == 0){
			console.log(j);
		}
	}
}

//Takes in two numbers from the user. Makes sure they are numbers, and logs which one is larger, or if they are equal
function BiggerNumber(){

	//Sends a message asking the user for the number. if they hit cancel, null is returned and the function is exited.
	var a = window.prompt("Feed me the first number");
	if (a == null)
		return;

	//If they supply text other than a number, keep asking until they get it right
	while(isNaN(a) || a.length == 0)
	{
		a = window.prompt("Thats not a number. Please try again.")
	}
	a = parseInt(a);


	var b = window.prompt("Feed me the second number");
	if(b == null)
		return;
	while(isNaN(b) || b.length == 0)
	{
		b = window.prompt("Thats not a number. Please try again.")
	}
	b = parseInt(b);

	//Log the larger number, otherwise log that they are equal
	if(a > b){
		console.log(a + " is the bigger number");
	} else if(b > a){
		console.log(b + " is the bigger number");
	} else {
		console.log("They are the same");
	}
}

var animals = ["Tiger", "Monkey", "Bear", "Fish", "Hippo", "Horse", "Lion", "Paul", "hyena"];

var testString = "abcdefghijklmnopqrstuvwxyz";

//charAt ---- a function of the STRING object. Returns the character at the given index
var testChar = testString.charAt(1);


//Logs any item from the given array to the console that starts with H or h.
function FindTheH(arr){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].charAt(0) == "H" || arr[i].charAt(0) == "h"){
			console.log(arr[i]);
		}
	}
}

//Find the average age of our class
function AverageAge(arr){
	var TotalAge = 0;
	for(var i = 0; i < arr.length; i++){
		TotalAge += arr[i].age;
	}
	console.log(TotalAge / arr.length)
}

// Parameter - The variable that we are going to use inside the function.
// // Scope -- Local vs. Global
// // // Local - Only accessible in the block of code that it was created in.
// // // Global - Can be accessed anywhere inside of the program.


var emptyArray = [];
//Array Push -- Adds item to existing array
emptyArray.push()


//Push numbers from 1 - 100 into our empty array
function ArrayPush(){
	for(var i = 1; i <= 100; i++){
		emptyArray.push(i);
	}
}
ArrayPush();


//Math object function
var NewMath = {
	SquareIt : function(num){
		return num*num
	},
	SquareRoot: function(num){
		return Math.sqrt(num);
	},
	Power : function(base, power){
		var inputBase = base;
		for(var i = 0; i < power - 1; i++){
			base = base*inputBase;
		}
		return base;
	}
}

