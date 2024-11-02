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
        return "Error: dividir per 0"; 
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


document.querySelectorAll(".btn.num").forEach(boton => {
    boton.addEventListener("click", () => {
        valorActual += boton.textContent;
        actualitzarPantalalla();
    });
});


document.querySelectorAll(".btn.oper").forEach(boton => {
    boton.addEventListener("click", () => {
        if (valorActual !== "") {
            valorAnterior = valorActual;
            operador = boton.dataset.operator; 
            valorActual = ""; 
            actualitzarPantalalla();
        }
    });
});

document.getElementById("igual").addEventListener("click", () => {
    if (valorAnterior === "" || valorActual === "" || operador === null) {
        return; 
    }

    let num1 = parseFloat(valorAnterior);
    let num2 = parseFloat(valorActual);
    let resultat;

    
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

    
    valorActual = typeof resultat === "number" ? resultat.toString() : resultat;
    valorAnterior = "";
    operador = null;
    actualitzarPantalalla();
});


document.getElementById("borrar").addEventListener("click", borrar);
