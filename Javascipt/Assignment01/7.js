var Percentage = 90;
var Income = 250000;


if (Percentage >= 85 && Income < 300000) {
    
    console.log("Full Scholarship");
} 
else if (Percentage >= 70 && Income < 500000) {
    console.log("Half Scholarship");
} 
else {
    console.log("Not eligible for scholarship");
}
