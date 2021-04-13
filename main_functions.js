
//https://www.udemy.com/course/javascript-temelden-profesyonele-kurs-1/learn/lecture/15865910#overview
//Function in Js

function sum(x,y){
	 console.log(x+y);
	 var addTo = x+y;
	 addTo *= 6;
	 addTo %=7;
	 console.log(addTo);
}
 sum(4,6);
 sum(5,8);

console.log("Function in Function");

 function doIets(a,b){
 	var addTo2 = a+b;
 	addTo2 *= 6;
 	addTo2 %= 7;
 	return addTo2;
 }

 var doIetsResult = doIets(8,10);
 var doIetsResult2 = doIets(doIets(9,11),10);
 console.log(doIetsResult);


//ADD NAME

 console.log("Function add");

 function addName(name, surname){
 	var addedName = name + " " + surname;
 	return addedName;
 }

  console.log(addName("Fatih", "Ugur"));

  // ARRAY ADD NAME SURNAME

  var names = ["Fatih ", "Yavuz ", "Ali ", "Emir "]; // text array
  var surnames = ["Ugur", "Demir", "Yildiz", "Oz"]; // text array
  for(var counter=0; counter <names.length; counter++){ //for loop
  	var random = Math.floor(Math.random()*4);  // random
  	var random1 =  Math.floor(Math.random()*4); // random1
  	console.log(addName(names[random],surnames[random1])); //addName function
  }


// RANDOMNAMESURNAME Function
console.log("Random name-surname");

function randomNameSurname(){

	var newnames = ["Fatih ", "Yavuz ", "Ali ", "Emir "]; 
  	var newsurnames = ["Ugur", "Demir", "Yildiz", "Oz"]; 
  	var random3, random4;
  	for(var counter=0; counter <newnames.length; counter++){ 
  	random3 = Math.floor(Math.random()*4);  // random
  	random4 =  Math.floor(Math.random()*4); // random1
  	console.log(addName(newnames[random3],newsurnames[random4]));

}

}
// randomNameSurname();
// randomNameSurname();
// randomNameSurname();
// randomNameSurname();

for(var counter= 0; counter <100; counter++){
	randomNameSurname();
}


//Recursive functions

var counter = 0;
var stop = 20;

function toDo1(stoppage){
	if(counter >= stop+1){
		return 0;
	} else{
		toDo2(counter++);
	}
	

}

function toDo2(counter){
	console.log(counter + ". Loop");
	toDo1(stop);
}

toDo1(stop);
