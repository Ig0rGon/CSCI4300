// Q1
const acct1 = {
    name: "Rich",
    email: "goofy@gmail.com",
    age: 20,
    plan: "basic",
    isRecurring: false
};

const acct2 = {...acct1, name: "Cindi"};

console.log(acct2);

// Q2
function processNumbers(numbers, callback) {
    return numbers.map(callback);
}

const numbers = [2, 4, 6, 8];

const squaredNumbers = processNumbers(numbers, (num) => num * num);

console.log(squaredNumbers);