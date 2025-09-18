function aleatorio() {
    let numero1 = Math.floor(Math.random() * 60) + 1;
    let numero2 = Math.floor(Math.random() * 60) + 1;
    let numero3 = Math.floor(Math.random() * 60) + 1;
    let numero4 = Math.floor(Math.random() * 60) + 1;
    let numero5 = Math.floor(Math.random() * 60) + 1;
    let numero6 = Math.floor(Math.random() * 60) + 1;

    if (numero1 !== numero2 && numero1 !== numero3 && numero1 !== numero4 && numero1 !== numero5 && numero1 !== numero6 &&
        numero2 !== numero3 && numero2 !== numero4 && numero2 !== numero5 && numero2 !== numero6 &&
        numero3 !== numero4 && numero3 !== numero5 && numero3 !== numero6 &&
        numero4 !== numero5 && numero4 !== numero6 &&
        numero5 !== numero6) {

        const resultadoFinal = [numero1, numero2, numero3, numero4, numero5, numero6];

        let textoResultado = "Os números sorteados foram: " + resultadoFinal + ".";

        document.getElementById('resposta').textContent = textoResultado;
    } else {
        aleatorio();
    }
}
