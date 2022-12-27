// DESTRUCTING

//! BAD CODE

const turtle = {
    name: 'Bob 🐢',
    lengs: 4,
    shell: true,
    type: 'amphibous',
    meal: 10,
    diet: 'barries',
}


const feed = (animal) => {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}


//* GOOD CODE 

// const feedGood = ({ name, meal, diet }) => {
//     return `Feed ${name} ${meal} kilos of ${diet}`;
// }

// OR

const feedGood = (animal) => {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}