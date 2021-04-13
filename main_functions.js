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