// funzione crea timer
const creaTimer = (time) => {
    return () => {
        setTimeout(() => {
            console.log('Tempo scaduto!')
        }, time)
    }
}

const timer5s = creaTimer(5000)
timer5s()