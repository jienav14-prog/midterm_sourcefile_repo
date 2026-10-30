'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

const activityScores = [
    [80, 85, 90],
    [70, 72, 74],
    [88, 92, 95],
    [60, 65, 67],
    [75, 78, 81]
];

const originalNames = Array.from(studentNames);


// PART A
console.log('\nPART A: ORIGINAL RECORDS');

for (let i = 0; i < studentNames.length; i++) {
    console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}


// PART B
console.log('\nPART B: ADD NEW STUDENTS');

studentNames.push('Faith');
studentScores.push(88);

studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);


// PART C
console.log('\nPART C: REMOVE AND REPLACE RECORDS');

studentNames.shift();
studentScores.shift();

studentNames.pop();
studentScores.pop();

let d = studentNames.indexOf('Daniel');

studentNames.splice(d, 1);
studentScores.splice(d, 1);

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log('Names:', studentNames);
console.log('Scores:', studentScores);


// PART D
console.log('\nPART D: CLASS STATISTICS');

let total = 0;

for (let score of studentScores) {
    total += score;
}

let average = total / studentScores.length;
let highest = Math.max(...studentScores);
let lowest = Math.min(...studentScores);

console.log('Total Score:', total);
console.log('Average Score:', average.toFixed(2));
console.log('Highest Score:', highest);
console.log('Lowest Score:', lowest);


// PART E
console.log('\nPART E: PASSING-SCORE ANALYSIS');

let passing = studentScores.filter(score => score >= 75);

let status = studentScores.map(score =>
    score >= 75 ? 'Passed' : 'Failed'
);

let failed = studentScores.some(score => score < 75);
let allPassed = studentScores.every(score => score >= 75);

console.log('Passing Scores:', passing);
console.log('Statuses:', status);
console.log('At Least One Failed:', failed);
console.log('All Students Passed:', allPassed);


// PART F
console.log('\nPART F: SORT AND SEARCH');

let sorted = Array.from(studentScores);

sorted.sort((a, b) => b - a);

console.log('Scores from Highest to Lowest:', sorted);
console.log('Contains 91:', studentScores.includes(91));
console.log('Index of 91:', studentScores.indexOf(91));


// PART G
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

let activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {

    let total = 0;

    for (let j = 0; j < activityScores[i].length; j++) {
        console.log(
            originalNames[i] + ' Activity ' + (j + 1) + ': ' +
            activityScores[i][j]
        );

        total += activityScores[i][j];
    }

    let average = total / activityScores[i].length;

    activityAverages.push(average);

    console.log(
        originalNames[i] + "'s activity average: " +
        average.toFixed(2)
    );
}

console.log('Activity Averages:', activityAverages);


// PART H
console.log('\nPART H: TEXT SUMMARY');

console.log('Students:', studentNames.join(' | '));