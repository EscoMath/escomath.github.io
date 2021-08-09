let sol = document.querySelector('#sol');
let mercurio = document.querySelector('#mercurio');
let venus = document.querySelector('#venus');
let marte = document.querySelector('#marte');
let jupiter = document.querySelector('#jupiter');
let saturno = document.querySelector('#saturno');
let urano = document.querySelector('#urano');
let neptuno = document.querySelector('#neptuno');
let operandoA;
let operandoB;
let operacion;


function init() {
    //-------------------- variables
    let resultado = document.getElementById("resultado");
    let reset = document.getElementById("reset");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cero = document.getElementById("cero");
    let punto = document.getElementById("punto");
    let igual = document.getElementById("igual");

    //Eventos
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    punto.onclick = function(e) {
        resultado.textContent = resultado.textContent + ".";
    }

    reset.onclick = function(e) {
        resetear();
    }


    igual.onclick = function(e) {
        resolver();
    }
}



function resetear() {
    resultado.textContent = "";


    sol.value = "";
    mercurio.value = "";
    venus.value = "";
    marte.value = "";
    jupiter.value = "";
    saturno.value = "";
    urano.value = "";
    neptuno.value = "";
}


function resolver() {
    let res = '';
    let gravedadSol = 274;
    let gravedadMercurio = 3.7;
    let gravedadVenus = 8.87;
    let gravedadMarte = 3.711;
    let gravedadJupiter = 24.79;
    let gravedadSaturno = 10.44;
    let gravedadUrano = 8.87;
    let gravedadNeptuno = 11.15;



    sol.value = calcularPeso(gravedadSol);
    mercurio.value = calcularPeso(gravedadMercurio);
    venus.value = calcularPeso(gravedadVenus);
    marte.value = calcularPeso(gravedadMarte);
    jupiter.value = calcularPeso(gravedadJupiter);
    saturno.value = calcularPeso(gravedadSaturno);
    urano.value = calcularPeso(gravedadUrano);
    neptuno.value = calcularPeso(gravedadNeptuno);

}

function calcularPeso(gravedad) {
    let gravedadTierra = 9.8;
    pesoTierra = resultado.innerHTML;
    peso = gravedad * pesoTierra / gravedadTierra;
    pesoResult = `${peso.toFixed(2) } kg`;
    return pesoResult;

}

// ======================================================== jQuery
$(document).ready(function() {
    $('.hidden-planet').fadeIn(3000)
});