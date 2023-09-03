// main.js

// This function uses a while loop to increment a variable 'X' from 1 to 10.
// The resulting sequence is then displayed in the HTML element with ID "Loop".
function Call_loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Define a string and calculate its length.
// Display the length in the HTML element with ID "String".
let text = "Hello World!";
let lenght = text.length;

document.getElementById("String").innerHTML = lenght;


// This function lists each instrument from the 'Instruments' array
// and displays them in the HTML element with ID "List_of_Instruments".
var Instruments = ["Guitar", "Drums", "Piano", "Bass","Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


// This function describes a cat's action using an array of possible actions.
// The description is then displayed in the HTML element with ID "Cat".
function cat_pics() {
    var Cat_Picture=[];
    Cat_Picture[0]= "sleeping";
    Cat_Picture[1]= "playing";
    Cat_Picture[2]= "eating";
    Cat_Picture[3]= "purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is "+
    Cat_Picture[2]+ "."
}


// This function defines an array of fruits and displays a preference
// for one of the fruits in the HTML element with ID "Fruit".
function fruits(){
    var Fruit=[];
    Fruit[0]="Apple";
    Fruit[1]="Banana";
    Fruit[2]="Cherry";
    Fruit[3]="Date";
    Fruit[4]="Mango";
    document.getElementById("Fruit").innerHTML="I like "+
    Fruit[0]+"."
}


// This function creates an object representing a musical instrument, modifies its properties,
// and then displays details about the instrument in the HTML element with ID "Constant".
function constant_function() {
    const Musical_Instrument= {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color="blue";
    Musical_Instrument.price="$900";
    document.getElementById("Constant").innerHTML="The cost of the "+
        Musical_Instrument.type+" was "+Musical_Instrument.price;
}

var X = 82;
document.getElementById("output1").textContent = X; // This will display 82 in the first <p> tag

{
    let X = 33;
    document.getElementById("output2").textContent = X; // This will display 33 in the second <p> tag
}
document.getElementById("output3").textContent = X;

// Define a function named 'myFunction'
function myFunction() {
    // The function returns the mathematical constant Pi (π) using Math.PI
    return Math.PI;
}
document.getElementById("PI").innerHTML=myFunction();

// Define an object named 'car' with various properties and a method
let car = {
    make: "Dodge ",  // The 'make' property stores the brand of the car
    model: "Viper ", // The 'model' property stores the model of the car
    year: "2021 ",   // The 'year' property stores the year of the car
    color: "red ",   // The 'color' property stores the color of the car

    // Define a method named 'description' for the 'car' object
    description: function() {
        // The method returns a string concatenating the object's properties
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};

// Use 'document.getElementById' to target an HTML element with the id 'Car_Object'
// Set its 'innerHTML' to the result of calling 'car.description()'
document.getElementById("Car_Object").innerHTML = car.description();


function runLoop() {
    // Initialize string to hold the output
    let outputStringt = "";

    // Run a loop from 0 to 9
    for (let i = 0; i < 10; i++) {
        // If i equals 3, break out of the loop
        if (i === 3) { 
            break; 
        }

        // Append a string indicating the current value of i to outputStringt
        outputStringt += "The number is " + i + "<br>";
    }

    document.getElementById("break_loop").innerHTML = outputStringt;
}

function continue_loop() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue_loop").innerHTML = text;
}
