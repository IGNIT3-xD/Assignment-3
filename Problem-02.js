/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (0 < money && money <= Math.pow(10, 9)) {
    if (money >= 25000) {
        console.log('Laptop')
    }
    else if (money >= 10000) {
        console.log('Cycle')
    }
    else {
        console.log('Chocolate')
    }
}