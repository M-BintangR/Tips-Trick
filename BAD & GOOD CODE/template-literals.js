const hourse = {
    nama: 'Thoper 🐎',
    size: 'Large',
    skills: ['jousting', 'racing'],
    age: 7,
};

// ! BAD CODE

let bio = hourse.nama + ' is a ' + hourse.size + ' hourse skills ' + hourse.skills.join('&');

//* GOOD CODE

const { nama, size, skills } = hourse;

bio = `${nama} is a ${size} hourse skills ${skills.join('&')}`;

function hourseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = hourseAge`This hourse is ${hourse.age}`;

