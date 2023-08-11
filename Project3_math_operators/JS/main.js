function performAddition(num1, num2) {
    // Perform the addition operation
    var result = num1 + num2;
    return result;
}

// Call the function and update the "Math" element when the page loads
window.onload = function() {
    var num1 = 10;
    var num2 = 20;
    var result = performAddition(num1, num2);
    
    var mathElement = document.getElementById("Math");
    mathElement.innerHTML = "Result of addition: " + result;
};



function performSubtraction(num3, num4) {
    // Perform the Subtraction operation
    var result = num3 - num4;
    return result;
}

// Call the function and update the "Math subtraction" element when the page loads
window.onload = function() {
    var num3 = 40;
    var num4 = 20;
    var result = performSubtraction(num3, num4);
    
    var mathElement = document.getElementById("Math subtraction");
    mathElement.innerHTML = "Result of subtraction: " + result;
};