

const random = () => {
    return Promise.resolve(Math.random());
}


// ! BAD CODE

const sumAsyncNums = () => {
    let first;
    let secound;
    let thrid;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            secound = v;
            return random();
        })
        .then(v => {
            thrid = v;
            return random();
        })
        .then(v => {
            console.log(`Result ${v}`);
        });
}

const SumAsyncNums = async () => {
    const one = await random();
    const two = await random();
    const tri = await random();

    console.log(`result ${one + two + tri}`);

}