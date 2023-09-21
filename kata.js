let cor = prompt("Insira uma cor: ")
let sim1 = prompt("Insira o símbolo: ")

if (cor === "vermelho" && sim1 === "X"){

console.log("Cave um buraco no chão")

} else if (cor === "azul" && sim1 === "$"){

console.log("Siga em frente")

}

if (cor === "verde" && sim1 === "*"){

console.log("Suba em uma árvore")
    
} else if (cor === "amarelo" && sim1 === "#"){

console.log("Pare e descanse")

}

else{
    console.log("seu código não corresponde")
}