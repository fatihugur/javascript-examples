
//to dice  - dubblesteen
//console.log(Math.random(0,6));

var random1 = Math.random();
if(random1 < 1){
	//console.log("dice is smaller than 1");
	random1 = (random1+1) * 6; // no zero in random
	random1 = Math.floor(random1); // integer
	if(random1 > 6) {
		random1 = random1 % 6; // integer between 1, 2, 3, 4, 5, 6

	}
}
console.log(random1);