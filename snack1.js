// funzione dichiarativa
function sommaDichiarativa(a, b) {
    return a + b;
};

console.log(sommaDichiarativa(2, 3));

// funzione anonima assegnata ad una variabile
const sommaVariabile = function (a, b) {
    return a + b;
};

console.log(sommaVariabile(3, 3));

// arrow function
const sommaArrow = (a, b) => a + b;

console.log(sommaArrow(4, 3));