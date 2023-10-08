// Ejercicio 1: Cambio de borde en imagen al hacer clic
let imgElement = document.querySelector(".seccionuno");

imgElement.addEventListener("click", function() {
    let currentBorder = imgElement.style.border;
    if (currentBorder === "" || currentBorder === "none") {
        imgElement.style.border = "2px solid red";
    } else {
        imgElement.style.border = "none";
    }
});

// Ejercicio 2: Verificar total de stickers
let verifyButton = document.querySelector(".botonVerificar");
let resultStickers = document.querySelector(".cantidadStickers");

verifyButton.addEventListener("click", function() {
    let stickerOneCount = parseInt(document.getElementById("valorUno").value) || 0;
    let stickerTwoCount = parseInt(document.getElementById("valorDos").value) || 0;
    let stickerThreeCount = parseInt(document.getElementById("valorTres").value) || 0;

    let totalStickers = stickerOneCount + stickerTwoCount + stickerThreeCount;

    if (totalStickers <= 10) {
        resultStickers.textContent = "Llevas " + totalStickers + " stickers";
    } else {
        resultStickers.textContent = "Llevas demasiados stickers";
    }
});

// Ejercicio 3: Verificar contraseña con select
let submitButton = document.querySelector(".buttonIngresar");
let passwordResponse = document.querySelector(".respuestaPassword");

submitButton.addEventListener("click", function() {
    let firstDigit = document.querySelector(".primerNumero").value;
    let secondDigit = document.querySelector(".segundoNumero").value;
    let thirdDigit = document.querySelector(".tercerNumero").value;

    let enteredPassword = firstDigit + secondDigit + thirdDigit;

    if (enteredPassword === "911") {
        passwordResponse.textContent = "Password 1 correcto";
    } else if (enteredPassword === "714") {
        passwordResponse.textContent = "Password 2 correcto";
    } else {
        passwordResponse.textContent = "Password incorrecto";
    }
});
