const person = {
    name: 'Max',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

// OBJECT DESTRUCTURING
const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

// person.greet();

//ARRAY DESTRUCTURING
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1);

// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);
// hobbies.push('Programming');

//SPREAD OPERATOR
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// REST OPERATOR
// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4));