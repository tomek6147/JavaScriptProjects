
//A function with HTML and JS using a ternary operation with input from the browser
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short ":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride+"to ride";
}

function Age_Function() {
    var Age = document.getElementById("Age").value;
    var Can_vote = (Age < 18) ? "We are soryy but you are not old enough to " : "You can ";
    document.getElementById("Result").innerHTML = Can_vote + "  vote.";
}

//A constructor function utilizing "new" and "this" keywords
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");


function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function displayInfo() {
    var info = "Jack drives a " + Jack.Vehicle_Color + "-colored " + Jack.Vehicle_Model + " manufactured in " + Jack.Vehicle_Year;
    document.getElementById("New_and_This").innerHTML = info;
}

// Object constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

// Creating instances of the Person constructor
var person1 = new Person("John", "Doe", 30);
var person2 = new Person("Jane", "Smith", 25);

// Displaying information about the persons
console.log(person1.firstName + " " + person1.lastName + " is " + person1.age + " years old.");
console.log(person2.firstName + " " + person2.lastName + " is " + person2.age + " years old.");

//A nested function
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 8;
        function Plus_one() {Starting_point +=1;}
        Plus_one();
        return Starting_point;
    }
}




