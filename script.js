let valorActual = "";
let valorAnterior = "";
let operador = null;

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;       
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: dividir per 0"; // Retorna un missatge d'error com a string
    }   
    return a / b;           
}

function borrar() { 
    valorActual = "";
    actualitzarPantalalla();
}

function borrarTot() {
    valorActual = "";
    valorAnterior = "";
    operador = null;
    actualitzarPantalalla();
}

function actualitzarPantalalla(){
    document.getElementById("input").value = valorActual;
} 

// Event per als botons numèrics
document.querySelectorAll(".btn.num").forEach(boton => {
    boton.addEventListener("click", () => {
        valorActual += boton.textContent;
        actualitzarPantalalla();
    });
});

// Event per als botons d'operació
document.querySelectorAll(".btn.oper").forEach(boton => {
    boton.addEventListener("click", () => {
        if (valorActual !== "") {
            valorAnterior = valorActual;
            operador = boton.dataset.operator; // Utilitza 'operator' per accedir correctament a l'atribut
            valorActual = ""; // Reiniciem valorActual per començar un nou número
            actualitzarPantalalla();
        }
    });
});

// Event per al botó igual
document.getElementById("igual").addEventListener("click", () => {
    if (valorAnterior === "" || valorActual === "" || operador === null) {
        return; // Evita executar si falten valors
    }

    let num1 = parseFloat(valorAnterior);
    let num2 = parseFloat(valorActual);
    let resultat;

    // Selecció de l'operació
    if (operador === "+") {
        resultat = sumar(num1, num2);
    } else if (operador === "-") {
        resultat = restar(num1, num2);
    } else if (operador === "*") {
        resultat = multiplicar(num1, num2);
    } else if (operador === "/") {
        resultat = dividir(num1, num2);
    } else {
        resultat = "Error";
    }

    // Convertim a string només si és un número per evitar errors d'afegir `null` o missatge de dividir per zero
    valorActual = typeof resultat === "number" ? resultat.toString() : resultat;
    valorAnterior = "";
    operador = null;
    actualitzarPantalalla();
});

// Event per al botó de "borrar"
document.getElementById("borrar").addEventListener("click", borrar);
