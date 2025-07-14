// funzione somma
function somma(a, b) {
    return a + b;
};

// funzione sottrazione
function sottrazione(a, b) {
    return a - b;
};

// funzione moltiplicazione
function moltiplicazione(a, b) {
    return a * b;
};

// funzione divisione
function divisione(a, b) {
    return a / b;
};

// funzione eseguiOperazione
const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 4, somma))
console.log(eseguiOperazione(3, 4, sottrazione))
console.log(eseguiOperazione(3, 4, moltiplicazione))
console.log(eseguiOperazione(3, 4, divisione))