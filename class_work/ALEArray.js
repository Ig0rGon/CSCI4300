// Q1
function filterNumbers(numbers, callBack) {
    return numbers.filter(callBack);
}

const numbers = [1,2,3,4,5,6,7,8,9]

const oddNumbers = filterNumbers(numbers, n => n % 2 != 0)

console.log(oddNumbers)

// Q2
let students = ["Tran", "Brown", "Patel", "Johnson"];

heading_component = students.map(student => `<h1>${student}</h1>`);
console.log(heading_component);