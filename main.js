let Jonah = {
    firstName: "Jonah",
    lastName: "Engelund",
    age: "24",
    parents: [],
    siblings: [],
    goodbye: "PEACE!",
}

let Tobi = {
    firstName: "Tobi",
    lastName: "Adame",
    age: "50",
}
let Jon = {
    firstName: "Jon",
    lastName: "Engelund",
    age: "51",
}
let Joplin = {
    firstName: "Joplin",
    lastName: "Engelund",
    age: "24",
    parents: [],
    siblings: [],
}


Jonah.parents.push(Tobi);
Jonah.parents.push(Jon);
Jonah.siblings.push(Joplin);

let greeting = `Hello world. My name is ${Jonah.firstName}. Let me tell you a little about me.`
let story = `My mom's name is ${Jonah.parents[0].firstName}. She is ${Jonah.parents[0].age} years old. My dad's name is ${Jonah.parents[1].firstName}. He is ${Jonah.parents[1].age} years old. 
Together, they had two children, ${Jonah.siblings[0].firstName} and ${Jonah.firstName}. Twins! And of course, both their ages are ${Jonah.siblings[0].age}.`
let conclusion = `And they lived happily till the end of their days. ${Jonah.goodbye}`

console.log(greeting);
console.log(story);
console.log(conclusion);
