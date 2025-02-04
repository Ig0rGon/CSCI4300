/* let person = {name: "igor", email: "igor@gmail.com"}

for (let prop in person) {
    console.log(prop + ":", person[prop]);
}

function Person1(name, email) {
    this.name = name;
    this.email = email;
}

let person1 = new Person1("egor", "egor@gmail.com");
console.log(person1);
*/

class person {
    constructor(firstName, lastName, email, age, isMarried) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.isMarried = isMarried;
    }
}

let me = person("Igor", "Sokolov", "igor@gmail.com", 20, false)

for (let prop in me) {
    console.log("prop" + ":", me[prop]
    )
}

