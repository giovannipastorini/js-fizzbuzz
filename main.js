/* 
1. Scrivi un programma che:
- stampi i numeri da 1 a 100,
-per i multipli di 3 stampi “Fizz” al posto del numero
-per i multipli di 5 stampi Buzz.
-Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Tools:
-Ciclo for
-Costrutto if

*/

//1. Creo ciclo FOR per stampare i numeri da 1 a 100
for (let i=1; i<=100; i++){

    //controllo se il numero è multiplo di 3 e di 5  
    if(i%3==0 && i%5==0){
        //stampo FizzBuzz
        console.log("FizzBuzz");  
    //controllo se il numero è multiplo di 3
    }else if (i%3 == 0){
        //stampo "Fizz"
        console.log("Fizz");  
    //controllo se il numero è multiplo di 5      
    }else if (i%5 == 0){
        //stampo "Buzz"
        console.log("Buzz"); 
    }else{
        //in tutti gli altri casi stampo il numero
        console.log(i);
    }    
}