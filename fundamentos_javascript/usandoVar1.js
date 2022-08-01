{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)
// No caso do var, a variável fica visível fora do bloco

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local)
// No caso de uma função o var só fica visível dentro do bloco

// Quando se cria uma variável fora da função ela é global, todos podem acessar.