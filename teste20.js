const x = [1,3,7]
const y = [2,4,6]

function dois (teste) {
    return  teste.every(verif => typeof verif === 'string')              
     
}

console.log(dois(x))
console.log(dois(y))

