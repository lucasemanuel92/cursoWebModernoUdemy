const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // .isInterger determina se o valor é inteiro
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.874
const avaliacao2 = 8.965

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // .toFixed determina a quantidade de casas decimais
console.log(media.toString()) // .toString altera o valor para string
console.log(typeof media);
console.log(typeof Number) // Number (M maiúsculo) é uma função e n (minúsculo) é tipo