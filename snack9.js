function sequenzaOperazioni(operazioni, intervallo) {
    operazioni.forEach((operazione, index) => {
        setTimeout(() => {
            operazione()
        }, intervallo * index);
    });
}

sequenzaOperazioni([
    () => console.log('Operazione 1'),
    () => console.log('Operazione 2'),
    () => console.log('Operazione 3')
], 2000)