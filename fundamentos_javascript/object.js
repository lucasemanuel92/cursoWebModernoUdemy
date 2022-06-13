const prod1 = {} // Coleção chave/valor

prod1.nome = "Celular Zica"
prod1.preco = 4798.00
prod1['Desconto Top'] = 0.40 // Evitar esse tipo de formato

console.log(prod1)

//Outra forma de escrever 
// Nessa forma os atributos precisam ser separados por ',' na quebra da linha

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

// Transformando para JSON
// '{"nome": 'Camisa Polo', "preco": 79.90}'

// O nome dentro do objeto precisa ser único