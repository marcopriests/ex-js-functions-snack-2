// snack 1
// function sommaDichiarativa(a, b) {
//     return a + b;
// };

// const sommaAnonima = function (a, b) {
//     return a + b;
// };

// const sommaArrow = (a, b) => a + b;

// console.log(sommaDichiarativa(3, 4));
// console.log(sommaAnonima(4, 4));
// console.log(sommaArrow(2, 4));

// snack 2
// const quadrato = (num) => num ** 2;

// console.log(quadrato(4));

// snack 3
// const somma = (a, b) => a + b;
// const moltiplicazione = (a, b) => a * b;
// const sottrazione = (a, b) => a - b;
// const divisione = (a, b) => a / b;

// function eseguiOperazione(a, b, operazione) {
//     return operazione(a, b);
// };

// console.log(eseguiOperazione(3, 4, somma));
// console.log(eseguiOperazione(3, 4, moltiplicazione));
// console.log(eseguiOperazione(3, 4, sottrazione));
// console.log(eseguiOperazione(3, 4, divisione));

// snack 4
// function creaTimer(time) {
//     return setTimeout(() => {
//         console.log('Tempo scaduto!')
//     }, time);
// };

// creaTimer(2000);

// snack 5
// function stampaOgniSecondo(messaggio) {
//     setInterval(() => {
//         console.log(messaggio);
//     }, 1000);
// };

// stampaOgniSecondo('è passato un secondo');

// snack 6
// function creaContatoreAutomatico(interval) {
//     let counter = 0;
//     return setInterval(() => {
//         console.log(counter);
//         counter++;
//     }, interval);
// };

// creaContatoreAutomatico(1000)

// snack 7
// function eseguiEferma(messaggio, interval, stop) {
//     const intervalId = setInterval(() => {
//         console.log(messaggio);
//     }, interval);

//     setTimeout(() => {
//         clearInterval(intervalId)
//         console.log('fine!')
//     }, stop);
// };

// eseguiEferma('messaggio', 1000, 10000);

// snack 8
// function contoAllaRovescia(n) {
//     const intervalId = setInterval(() => {
//         if (n != 0) {
//             console.log(n);
//             n--
//         } else {
//             console.log('Fine!')
//             clearInterval(intervalId);
//         };
//     }, 1000);
// };

// contoAllaRovescia(10);

// snack 9
// function sequenzaOperazioni(arr, interval) {
//     let index = 0;

//     const intervalId = setInterval(() => {
//         if (index < arr.length) {
//             arr[index]();
//             index++;
//         } else {
//             console.log('Fine!')
//             clearInterval(intervalId)
//         }
//     }, interval);
// }

// sequenzaOperazioni([
//     () => console.log("Operazione 1"),
//     () => console.log("Operazione 2"),
//     () => console.log("Operazione 3")
// ], 2000);

// snack 10
function creaThrottler(callback, limite) {
    let ultimaEsecuzione = 0;

    return function (...args) {
        const ora = Date.now();

        if (ora - ultimaEsecuzione >= limite) {
            ultimaEsecuzione = ora;
            callback(...args)
        } else {
            console.log('Non posso eseguire!')
        }
    }
};

const throttledLog = creaThrottler(() => console.log('Eseguito!'), 2000);

throttledLog();
throttledLog();
setTimeout(throttledLog, 2500);