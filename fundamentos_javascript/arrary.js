const valores = [7, 7, 6, 6.8] // O array é um conjunto de valores em linha, indexada

console.log(valores[0], valores[3]) // Declarar a constante e [] a posição
console.log(valores[8]) // Caso não existe, ele declara indefinido

valores[20] = 5.7
console.log(valores[20])
console.log(valores) // É possível determinar elementos com buracos entre os valores

console.log(valores.length)

valores.push({id :3}, false, null, "teste") //.push é usado pra add elementos no array
console.log(valores)

console.log(valores.pop()) // Tira o ultimo elemento do array

delete valores[0] // Elmina o elemento na possição marcada
console.log(valores)

console.log(typeof valores)