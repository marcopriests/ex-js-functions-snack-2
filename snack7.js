// funzione fermaTimer
const eseguiEferma = (messaggio, avvio, stop) => {
    const interval = setInterval(() => {
        console.log(messaggio)
    }, avvio)

    setTimeout(() => {
        clearInterval(interval)
        console.log('fine!')
    }, stop);
}

eseguiEferma('è passato un secondo', 1000, 10000)