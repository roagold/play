import {test} from "@playwright/test"

test('playground', async({ }) =>{

const myArray = ['a', 'b', 'c'];

const name = 'Oleg';


const myObj = {
    name: "Oleg",
    age: 35,
    isQA: true
}

// myArray.forEach(el => console.log(el + el))
// for(const el in myArray) {
//     console.log(myArray[el])
// }
// const newArray = myArray.map(el => (el + el + el)).forEach(el => console.log(el))

Object.values(myObj).filter(val => typeof val === "boolean").forEach(el => console.log(el));



})