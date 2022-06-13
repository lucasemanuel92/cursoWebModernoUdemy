let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // ! é negação, usado para verficar se é verdadeiro ou falso

console.log("os verdadeiros ...")
console.log(!!3)
console.log(!!-1)
console.log(!! ' ')
console.log(!![]) // [] é array
console.log(!!{}) // {} é objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos ...')
console.log(!!0)
console.log("") // String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar')
console.log('' || null || 0 || "epa")

let nome = 'Lucas'
console.log(nome || 'desconhecido') // Mostra o nome, caso o nome não seja uma string mostra desconhecido.