console.log("1 задание")

let nums = [[3, 2, 5], [8, 0, 1], [6, 4, 7]];

for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; i++) {
        let result = nums[i][j];
        console.log(result);
    }
}

let sum = 0;

for (let i in nums) {
    for (let j in nums[i]) {
        sum += nums[i][j];
    }
}

console.log(`Сумма всех элементов = ${sum}`)


console.log("2 задание")

let people = [
    { name: "mark", age: 17, city: "London" },
    { name: "katy", age: 21, city: "New York" },
    { name: "john", age: 23, city: "New Jersey" }
];

for (let i = 0; i < people.length; i++); {
    console.log(`Имя: ${people[i].name}, Лет: ${people[i].age}, Город: ${people[i].city}`);
}

for (let i = 0; i < people.length; i++) {
    people[i].age *= 2;
}

console.log('\n')
for (let i = 0; i < people.length; i++) {
    console.log(`Имя: ${people[i].name}, Лет: ${people[i].age}, Город: ${people[i].city}`);
}

console.log("3 задание")

const animes = {
    "Tokyo Ghoul": {
        characters: ["Ken Kaneki", "Rize Kamishiro", "Juuzou Suzuya"]
    },
    "Attack on Titan": {
        characters: ["Mikasa Ackermann", "Levi Ackermann", "Eren Yeager"]
    },
    "Naruto": {
        characters: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno"]
    }
};

for (let anime in animes) {
    console.log(`Персонажи из аниме ${anime}:`);
    for (let i = 0; i < animes[anime].characters.length; i++) {
        console.log(animes[anime.characters[i]]);
    }
}