

/*Função para inverter uma palavra */
// function reverseString(str){
//     return str.split('').reverse('').join('')
// }

// console.log(reverseString("hello"))



/*Função para comparar se uma palavra é um palindromo ( igual de traz pra frente) */

// function reverseString(str){
//     return str.split('').reverse('').join('')
// }

// function isPalindrome(str){
//         const isEqual = reverseString(str)
//         return str === isEqual
//     }

//     console.log(isPalindrome("eye"))


/*Função para achar o maior numero dentro de um array ( obs. sempre usar o spread operator "..." se não vai dar errado) */

// function findMax(nums){
//     return Math.max(...nums)
// }

// console.log(findMax([2,4]))


/*Função para criar um novo array sem duplicadas, pra isso usou o Set que cria um array de valores únicos */

// function removeDuplicates(num2){
//     return [ ...new Set(num2)]
// }

// console.log(removeDuplicates([2,2,2,4,6,6,6,8]))

/*Função para somar todos os numeros de um array, mas testei com string e ele juntou as palavras */

// function sumArray(num3){
//    return num3.reduce((x, y) => x + y, 0) // aqui nos parametros x e y poderia ser qualquer nome, q o zero é indicação para começar do primeiro elemento do array
// }

// console.log(sumArray([10,10,10]))


//Função para Encontrar a Frequência de Caracteres em uma string 

function charFrequency(str){

    const frequencia = {}
    
     for (let i=0; i < str.length; i++ ){
    
        const char = str[i] 

        if( frequencia[char]){
            frequencia[char] ++
        }else {
            frequencia [char]= 1
        }
    }

        return frequencia
}

console.log(charFrequency("batata"))


