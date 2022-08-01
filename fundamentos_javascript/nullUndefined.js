let valor // Não incializada
console.log(valor) // como não foi dado um valor ela é determinada como undefined (não definida)

/*
console.log(valor2) 

se a variável não tiver sido nem declara o erro aparece como "is not definide" ou seja, não foi definida.

*/

valor = null // ausência de valor, não aponta para nenhum endereço de memória "vazia"
console.log(valor)

// Usar o null para zerar o valor de uma variável, NÃO USAR UNDEFINED

/*
console.log(valor.toString()) 

não pode gerar uma string uma vez que o valor é null
*/

const produto = {}
console.log(produto.preco) // o produto está declarado, mas o preço não, logo undefined
console.log(produto) // aparece como vazio.

produto.preco = 3.50
console.log(produto)

produto.preco = undefined; // evitar esse atritudo
console.log(!!produto.preco)
// delete produto.preco exclui o valor
console.log(produto)

produto.preco = null // sem preço, nesse caso o 0 é um valor real
console.log(produto) // o valor se torna null e não 0.