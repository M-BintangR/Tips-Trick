const orders = [500, 30, 99, 15, 235];

// ! BAD CODE

const total = 0;
const withTax = [];
const hightValue = [];

for (i = 0; i < orders.length; i++) {

    // reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.1);

    // filter

    if (orders[i] > 100) {
        hightValue.push(orders[i]);
    }
}

// * GOOD CODE

// reduce

const totalGood = orders.reduce((acc, cur) => acc + cur);

// map 

const withTaxGood = orders.map((data) => data * 1.1);

// filter

const hightValueGood = orders.filter(data => data > 100);