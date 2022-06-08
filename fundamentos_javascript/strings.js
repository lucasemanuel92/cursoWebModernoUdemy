const escola = 'Cod3r'

console.log(escola.charAt(4)) // Qual o caractere naquela posicão
console.log(escola.charAt(6)) // Quando está fora do range ele não aponta um erro

console.log(escola.charCodeAt(2)) // Valor do caractere na tabela unicode

console.log(escola.indexOf("d")) // Posição do caractere na string

console.log(escola.substring(1))  // Imprime a partir do caractere indicado
console.log(escola.substring(0, 3)) // Imprime os dados contidos entre os parâmetros

console.log('Escola '.concat(escola).concat('!')) // Concatenar 
console.log('Escola ' + escola)

console.log(escola.replace(3, 'e')) // Troca de caracteres

console.log("Ana, Maria, Pedro".split(',')) // Quebra o texto no caractere que marcamos