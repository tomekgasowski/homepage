var firstName = "Tomek";
const age = 28;

console.log(firstName);

console.log('elo mordo!');
console.log(`Elo melo, jestem ${firstName} i mam ${age} lat`);

function greeting(name, age) {
    console.log(`Elo melo jestę ${name} i mam ${age} lat.`);
}

greeting('Dupa', 666);

testing = (htmlClass, content) => {
    const duppa = document.querySelector(htmlClass);
    duppa.innerHTML = content;
}

testing('.js-something', "salty balls 🧆");

const dupnaTablica = {
    klucz: "klucznik",
    kluczyc: 3,
    tunczyk: (bleBla) => {
        console.log(`jakieś coś przyjmie czy nie? ${bleBla}`);
    }
};

dupnaTablica.tunczyk("naajak!");