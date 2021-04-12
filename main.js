var email = "fatihugur@gmail.com";
switch(email){
	case "fatihugur@gmail.com":
	console.log("Emailiniz fatihugur@gmail.com");
	break;

	case "fatihugur1@gmail.com":
	console.log("Emailiniz fatihugur1@gmail.com");
	break;
	default:
	console.log("Email adresiniz ayni degil!");
}

console.log("Merhaba Fatih");

//WHILE - önce kontrol edip sonra yazdırıyor
var counter = 0;
var value= 5;
var result = 0;
while( counter < 100){
//console.log("Fatih Ugur");
//counter = counter + 1 ;
result = result + value * counter;
document.write(value * counter + "<br>");
counter = counter + 1;
}
console.log(result);

//DO WHILE - önce yazdırıp sonra kontrol ediyor
var counter1 = 0;
do{
	counter1++;
	console.log(counter1 + ") Fatih Ugur");
	//counter1 = counter1;
	//counter1 += 1;

}while(counter1 < 10);


// FOR LOOP

for(var counter2 = 0; counter2 <= 100; counter2 += counter2 +10){
	console.log(counter2);

}