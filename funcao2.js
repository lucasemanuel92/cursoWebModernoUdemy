// Armazenando a função em uma variável
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funçao tipo arrow em uma variável
const soma = (a, b) => {
    return a + b 
}
// Arrow é definido por =>
console.log(soma(2, 3))

// Retorno Implícito
const sub = (a, b) => a - b

// Forma super resumida, no entanto não se usa {} SOMENTE se só tiver uma linha
console.log(sub(3, 2))

const imprimir2 = a => console.log(a)
imprimir2("Único parâmetro")
// Caso só exista um parâmentro não precisa colocar parenteses.