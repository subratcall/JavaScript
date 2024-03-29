/*
  - A partir deste exercício, você está livre para escolher os nomes das suas  
    variáveis e constantes!

  - Após resolver cada exercício, tente reescrever partes do seu código para  
    deixá-lo mais legível.
    
    Por exemplo, uma expressão typeof crazyArray[i] === 'boolean' pode ser  
    armazenada em uma constante "isItemABoolean".

    Falaremos mais sobre legibilidade na revisão destes exercícios =)
*/

/*
  01

  - Abaixo do array "fruits", verifique se "abacaxi" existe no array. Se  
    existir, exiba no console a mensagem "A string "abacaxi" existe no array  
    fruits.";
  - Se "abacaxi" não existir, verifique se "pera" existe no array. Se existir,  
    exiba no console a mensagem "A string "pera" existe no array fruits.";
  - Se nenhuma das duas frutas existirem no array, exiba no console a mensagem  
    "Nem pera nem abacaxi existem no array "fruits".".
*/
console.info("## Exercise >> 01")

const fruits = ['morango', 'banana', 'mamão']

let message = ``
const hasPineapple = fruits.includes('abacaxi')
const hasPear = fruits.includes('pera')

if(hasPineapple){
  message = "A string \"abacaxi\" existe no array fruits."
}else if(hasPear){
  message = "A string \"pera\" existe no array fruits."
}else {
  message = "Nem pera nem abacaxi existem no array \"fruits\""
}

console.log(message)

  /*
  02

  - Armazene em uma constante apenas a hora atual na qual você está fazendo este  
    exercício. Ex.: 18;
  - À partir das 6, exiba "Bom dia!" no console;
  - À partir das 12, exiba "Boa tarde!";
  - À partir das 18, exiba "Boa noite!".

  Obs.: tanto a expressão do lado esquerdo quanto a do lado direito do operador  
  lógico precisam ter a constante especificada. Exemplo: hour > x && hour < y.
*/
console.info("## Exercise >> 02")

const currentHour = 22.50 

if (currentHour >= 0.00 && currentHour <= 11.59) {
  console.log("Bom dia!")
}else if (currentHour >= 12.00 && currentHour <= 18.00) {
  console.log("Boa tarde!")
}else if (currentHour) {
  console.log("Boa noite!")
}

/*
  03

  - Armazene sua idade em uma constante;
  - Escreva uma estrutura condicional em que, se a idade é 7 anos ou menos, ou  
    se a idade é 65 anos ou mais, a frase "Para você, a entrada é grátis!" é  
    armazenada em uma variável;
  - Se a idade não atende às condições acima, a variável deve armazenar a  
    mensagem "A entrada é R$ 30,00.";
  - Exiba a mensagem no console;
  - Agora, teste diferentes idades para se certificar que a condição do `if`  
    também está funcionando.
*/
console.info("## Exercise >> 03")

const myAge = 42
const isChild = myAge <= 7
const isOlder = myAge >= 65

message = ""

if (isChild || isOlder) {
 message = "Para você, a entrada é grátis!"
}else {
  message = "A entrada é R$ 30,00."
}
console.log(message)

/*
  04

  - Utilize um for loop para gerar um novo array com apenas os números entre  
    11 e 90 presentes no array "numbers" (incluindo 11 e 90);
  - Exiba o novo array no console;
  - O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/
console.info("## Exercise >> 04")

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99]
const newArray = []

for (let iterator = 0; iterator < numbers.length; iterator++) {

  const element = numbers[iterator]
  const numbersBetween11and90 = element >= 11 && element <= 90

  if(numbersBetween11and90){
    newArray.push(element)
  }

}

console.log(newArray)

/*
  05

  - O array "crazyArray" (abaixo) possui 3 tipos de dados: numbers, booleans  
    e strings;
  - Considerando este array, substitua os "X" da frase abaixo pelas informações  
    corretas;
  - Gere essas informações à partir de um for loop;
  - Exiba a frase no console.

  "O crazyArray tem X booleans, X números e X strings."
*/
console.info("## Exercise >> 05")

const crazyArray = [true, 869, 'oi', 71, false, 83, '35', true, 397, 'js', false]

let booleans = null
let integers = null
let strings = null

for (let iterator = 0; iterator < crazyArray.length; iterator++) {

  const element = crazyArray[iterator]
  const isTypeOfBoolean = typeof element === typeof Boolean()
  const isTypeOfNumber = typeof element === typeof Number()
  const isTypeOfString = typeof element === typeof String()

  if(isTypeOfBoolean){
    booleans += 1
  }

  if(isTypeOfNumber) {
    integers += 1
  }

  if(isTypeOfString) {
    strings += 1
  }
  
  message = `"O crazyArray tem ${booleans} booleans, ${integers} números e ${strings} strings."`

}

console.log(message)
/*
  06

  - Abaixo do array "randomNumbers", utilize um for loop para gerar 2 novos  
    arrays: um array com apenas os números ímpares do "randomNumbers" e um outro  
    array com apenas os números pares;
  - Após isso, utilizando os dois arrays que você criou, exiba a frase abaixo  
    no console, substituindo "XX, XX e XX" pelos números corretos. Os números  
    da frase não devem ser inseridos com a notação "item[index]" e os "e" antes  
    do último número ímpar e do último número par devem constar na frase;
  
  - Dica: para saber se um número é par, o restante da divisão dele por 2 deve  
    ser 0.

  "Numeros ímpares: XX, XX e XX. Números pares: XX, XX e XX."
*/
console.info("## Exercise >> 06")

const randomNumbers = [73, 4, 67, 10, 31, 58]
const evenNumbers = []
const oddNumbers = []

for (let i = 0; i < randomNumbers.length; i++) {
  const number = randomNumbers[i]
  const isEvenNumber = number % 2 === 0

  if(isEvenNumber){
    evenNumbers.push(number)
  }else{
    oddNumbers.push(number)
  }
}

const oddNumbersString = oddNumbers.join(', ').replace(', 3', ' e 3')
const evenNumbersString = evenNumbers.join(', ').replace(' 5', ' e 5')

console.log(`"Numeros ímpares: ${oddNumbersString}. Números pares: ${evenNumbersString}."`)