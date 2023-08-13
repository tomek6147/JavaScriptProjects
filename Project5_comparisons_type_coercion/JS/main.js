function function1() {
    document.getElementById("Infinity").innerHTML=(2E310);
}

function function2() {
    document.getElementById("Infinity").innerHTML=(-2E310);
}
//Utilizing the ! operator
function not_Function1() {
    document.getElementById("Not").innerHTML = !(20>10);
}
    function not_Function2() {
        document.getElementById("Not").innerHTML = !(5>10);
        
}

//Variable with Boolean data type
var x = true;
//printing the data type of the variable x
document.write(typeof x);
document.write("<br>");
//an expression combining a string and a number
document.write("10"+10);
document.write("<br>");
//Utilizng the <,>
document.write(10>2);
document.write("<br>");
document.write(10<2);
document.write("<br>");
//Utilizing the== operator
document.write(10==10);
document.write("<br>");
document.write(3==11);
document.write("<br>");
//Utilizing the === operator
x=10;
y=10;
document.write(x===y);
document.write("<br>");
x=82;
y="82";
document.write(x===y);
document.write("<br>");
A="Magnus";
B="Magnus";
document.write(A===B);
document.write("<br>");
 //The && operator determines the logic between values or variables
document.write(5>10 && 10>4);
document.write(", ")
document.write(5>2 && 10>4); 
document.write("<br>");
//The || (or) operator works this way
document.write(5>10 || 10>4); 
document.write(", ")
document.write(5>10 || 10>20);
document.write("<br>");







console.log(5 + 3);     // Addition: 8
console.log(10 - 4);    // Subtraction: 6
console.log(6 * 2);     // Multiplication: 12
console.log(15 / 3);    // Division: 5
console.log(9 % 2);     // Modulus (remainder of division): 1
console.log(2 ** 3);    // Exponentiation: 8
console.log(10<2);      // False


