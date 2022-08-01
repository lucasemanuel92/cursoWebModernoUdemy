var numero = 1
{
    let numero = 2 
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

//No caso do let, o escopo determinado pelas {} é restritivo

var numero = 1
{
    let numero2 = 2 
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

// Nesse caso o let tem um nome diferente do requerido, então ele procura fora das {}