/** Problem 06 :  (Current Salary )  */
var experience = 3;
var startingSalary = 15000;
//write your code here

for (var i = 1; i <= experience; i++) {
    startingSalary = startingSalary + (startingSalary * (5 / 100))
}

console.log(startingSalary.toFixed(2))