// countdown
const contoAllaRovescia = (n) => {
    let counter = n;

    const interval = setInterval(() => {
        if(counter > 0) {
            console.log(counter);
            counter--;
        } else {
            console.log('Tempo scaduto!')
            clearInterval(interval)
        }
    }, 1000)
}

contoAllaRovescia(5)