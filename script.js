// dado uma lista = [1,2,3,4,5,6]
// quero retornar somente os números pares dessa lista

// let pares = []
// for(let i=1;i<=lista.length;i++){
//    console.log(i)
//     if(i%2==0){
//         pares.push(i)
//     }

// }
// const listaNomes = ["anderson","Cleyton","Fernando"]
// let nomeProcurado = prompt("Digite um nome")
// let nomeEncontrado = ""
// let achouNome = 0
// for(let i =0;i<listaNomes.length;i++){
//     if(listaNomes[i]==nomeProcurado){
//         nomeEncontrado = `Nome encontrado! ${listaNomes[i]}`
//         achouNome++
//     }
//     if(achouNome==0){
//     nomeEncontrado = "Nome não encontrado! " +nomeProcurado
//     }
// }
// window.alert(nomeEncontrado)

function oddNumbers(lista=[],size){
    let pares = []
    for(let i=0;i<size;i++){
        // console.log(lista[i])
        if(lista[i]%2==0){
            pares.push(lista[i])
        }
    }
    return pares
}
const result = oddNumbers([1,2,3,4,5,62,3,7,8,6,800,999],200)
console.log(result)
function allOdds(number){
    let pares = []
    for(let i =1;i<=number;i++){
        if(i%2==0){
            pares.push(i)
        }
    }
    return pares
}
const result100 = allOdds(10)
console.log(result100)

//crie uma função que recebe um array de números como parametro,
//e tambem um número a ser buscado
//retorna o número se ele estiver no array
//retorna uma mensagem de erro se não estiver
function findNumber(array=[],number){
    let aux = "Número não encontrado"
    for(let i =0;i<array.length;i++){
        if(array[i]==number){
            aux = number
            return aux
        }
    }
    return aux

}
const res = findNumber([1,2,3],562)
console.log(res)
//crie uma função que recebe um numero como parametro
// retorne esse numero multiplicado por 2
function multiplica(number){
    return number*2
}
const returnMultiplica = multiplica(5)
console.log(returnMultiplica)
//calcauladora
//1 função que recebe 2 parametros, retorna a soma deles
//1 função que recebe 2 parametros, retorna a subtração deles
//1 função que recebe 2 parametros, retorna a multiplicação deles
//1 função que recebe 2 parametros, retorna a divisão
function mulplicacao(number1,number2){
    return number1*number2
}
const returnMultiplicacao = mulplicacao(5,5)
console.log(returnMultiplicacao)
