// Função sem retorno

function imprirmirSoma(a, b) {
    console.log(a + b)
}

imprirmirSoma (2, 3)
imprirmirSoma(2) // quando se passa a quantidade exata de valores ele retorna Not a Number NaN
imprirmirSoma(2, 3, 45, 5 ) // se passar mais valores ele ignora os valores extras
imprirmirSoma() // sem valores ele também retorna NaN

// Função com retorno
function soma (a, b = 0) {
    return a + b
}

console.log(soma (2, 3))
console.log(soma(1)) // Como só um parâmetro foi definido ele assume o outro b = 0

/* 
No segundo caso.
 
É preciso colocar o console.log porque ele retorna alguma coisa
Se estabelece os parâmetros e no return se define o que fazer com eles.

Quando se escreveu b = 0 no function, caso não seja passado nenhum valor naquele parâmetro,
o sistema assume ele igual ao valor passado.
*/