// LESSON 1: STUDENT SCORE
// This program analyzes student scores, grades, and passing status.

let scores = [85, 72, 91, 64, 78];
let total = 0;
let passed = 0;
let failed = 0;
let highest = scores[0];
let lowest = scores[0]; 

console.log("Student Score: ");

for (let score of scores) {
    console.log(score);
}

console.log("");

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let grade;
    let status;

    
    if (score >= 90 && score <= 100) {
        grade = "Excellent";
    }
    else if (score >= 80) {
        grade = "Very Good";
    }
    else if (score >= 75) {
        grade = "Good";
    }
    else {
        grade = "Failed";
    }

    if(score >= 75) {
        status = "Passed";
        passed++
    } 
    else {
        status = "Failed";
        failed++;
    }

    total += score;

    if (score > highest) {
       highest = score;
    }
    if (score < lowest) {
       lowest = score;
    }

    console.log(
        "Student" + (i + 1) + ": " + 
        score + " - " + grade + " - " + status
    );
}


let average = total / scores.length;

console.log("");

console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score:" + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);