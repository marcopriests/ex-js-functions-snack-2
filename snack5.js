// funzione stampaOgniSecondo
const stampaOgniSecondo = (message) => {
    setInterval(() => {
        console.log(message)
    }, 1000);
}

stampaOgniSecondo('è passato un secondo')