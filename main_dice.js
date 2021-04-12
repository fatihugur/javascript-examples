
//to dice  - dubblesteen
//console.log(Math.random(0,6));

var random1 = Math.random();
var random2  = Math.random();
if(random1 < 1){
	//console.log("dice is smaller than 1");
	random1 = (random1+1) * 6; // no zero in random
	random2 = (random2+1) * 6;
	random1 = Math.floor(random1); // integer
	random2 = Math.floor(random2); 
	if(random1 > 6) {
		random1 = random1 % 6; // integer between 1, 2, 3, 4, 5, 6
	}
	if(random2 > 6) {
		random2 = random2 % 6;  // integer for random2
	}
}
console.log(random1);
console.log(random2);