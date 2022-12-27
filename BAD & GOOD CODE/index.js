const foo = { name: 'tom', age: 30, nerveous: false }
const zoo = { name: 'dick', age: 40, nerveous: false }
const baz = { name: 'harry', age: 50, nerveous: false }

//! BAD CODE 

console.log(foo, zoo, baz);

//* GOOD CODE 

console.log({ foo, zoo, baz });

// console table

console.table([foo, zoo, baz]);

// console time

console.time('looper');
let i = 0;
while (i < 1000) { i++ };






