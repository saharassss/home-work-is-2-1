
function create_animal_list() {
    let names = prompt("Введите имена животных через запятую:");
    let species = prompt("Введите виды животных через запятую:");

    if (names.length !== species.length) {
        console.log("Количество имен и видов должно быть одинаковым.");
        return [];
    }

    let animalList = [];

    for (let i = 0; i < names.length; i++) {
        let animal = {
            name: names[i].trim(),
            species: species[i].trim()
        };
        animalList.push(animal);
    }

    return animalList;
}


let animals = create_animal_list();
console.log(animals);