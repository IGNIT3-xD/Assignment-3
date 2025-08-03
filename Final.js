/** Problem -01 ( Divide the Asset ) */
var area = 100;
//write your code here

var result = area / 2;
console.log(result)

/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (money >= 25000) {
    console.log('Laptop')
}
else if (money >= 10000) {
    console.log('Cycle')
}
else {
    console.log('Chocolate')
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here

for (var i = 1; i <= lastDay; i++) {
    if (i % 3 === 0) {
        console.log(i + ' - ' + 'medicine')
    }
    else {
        console.log(i + ' - ' + 'rest')
    }
}

/** Problem 04 - (Delete / Store) */
var fileName = "pdfData.jpg";
//write your code here

if (fileName[0].includes('#') || fileName.endsWith('.pdf') || fileName.endsWith('.docx')) {
    console.log('Store')
}
else {
    console.log('Delete')
}

/** Problem 05 - ( PH Email Generator )  */
var student = { name: "mewo", roll: 96, department: "cse" };
//write your code here

var email = student.name + student.roll + '.' + student.department + '@ph.ac.bd'
console.log(email)

/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

for (var i = 1; i <= experience; i++) {
    startingSalary = startingSalary + (startingSalary * (5 / 100))
}

console.log(startingSalary.toFixed(2))