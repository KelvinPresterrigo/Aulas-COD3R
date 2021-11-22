const peso1  = 1.0
const peso2 = Number ("2.0")
//declaração
console.log(peso1, peso2) //resultado
console.log(Number.isInteger(peso1)) // isInterger seerve para verificar se o numero é inteiro
console.log(Number.isInteger(peso2))
const avaliacao1 = 9.971 //declaração
const avaliacao2 = 6.5500

const total = avaliacao1 * peso1 + avaliacao2 *peso2 
const media = total / (peso1+peso2)

console.log(total)
console.log(media)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
console.log(typeof Number)