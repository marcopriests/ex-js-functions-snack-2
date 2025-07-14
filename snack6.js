// contatore automatico
const creaContatoreAutomatico = (time) => {
    let counter = 0
    return () => {
        setInterval(()=>{
            counter++
            console.log(counter)
        }, time)
    }
}

const counter = creaContatoreAutomatico(2000)
counter()