const pikachu = { nama: 'Pikachu 🐭' }
const stats = { hp: 40, attack: 60, defense: 45 }

// ! BAD CODE 

pikachu['hp'] = stats.hp;
pikachu['attack'] = stats.attack;
pikachu['defense'] = stats.defense;

// OR

const lvl0 = Object.assign(pikachu, stats);
const lvl1 = Object.assign(pikachu, { hp: 40 });

// * GOOD CODE

const level0 = { ...pikachu, ...stats };
const level1 = { ...pikachu, hp: 45 };


// ARRAY

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

// ! BAD CODE

pokemon.push('Bulbasour');
pokemon.push('Metapod');
pokemon.push('Weedle');

// * GOOD ARRAY CODE

// push

pokemon = [...pokemon, 'Bulbasour', 'Metapod', 'Weedle'];

// shift

pokemon = ['Bulbasour', 'Metapod', 'Weedle', ...pokemon];




