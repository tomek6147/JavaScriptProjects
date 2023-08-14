// Global variable
var x=10;
function Add_numbers_1() {
    document.write(20+x+"<br>");
}
function Add_numbers_2() {
    document.write(x+100);
}
Add_numbers_1();
Add_numbers_2();

document.write("<br>");

//Local variable
function Add_numbers_1_local() {
    var x=10;
    document.write(20+x+"<br>");
}
function Add_numbers_2_local() {
    document.write(x+100);
}
Add_numbers_1_local();
Add_numbers_2_local();

document.write("<br>");

function Add_numbers_1_console() {
    var x=10;
    console.log(15+x);
}
function Add_numbers_2_console() {

// Using the global variable x will cause an error here
    console.log(x+100);
}
Add_numbers_1_console();
Add_numbers_2_console();

//Get date Function

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
// Call the function to display the greeting
get_Date();



// A functions that includes an if , else if and else statement
function checkWeather() {
    var temperature = parseFloat(document.getElementById("temperature").value);

    if (isNaN(temperature)) {
        document.getElementById("weatherMessage").innerHTML = "Please enter a valid temperature.";
    } else {
        if (temperature >= 30) {
            document.getElementById("weatherMessage").innerHTML = "It's a hot day! Remember to stay hydrated.";
        } else if (temperature < 30 && temperature >= 20) {
            document.getElementById("weatherMessage").innerHTML = "It's a pleasant day. Enjoy the weather!";
        } else {
            document.getElementById("weatherMessage").innerHTML = "It's a bit chilly. You might want to wear a jacket.";
        }
    }
}