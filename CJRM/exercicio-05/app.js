/*
  Aviso: se você executar, acidentalmente, um loop infinito, faça o seguinte:
  
  - Feche o navegador;
  - Desconecte o servidor;
  - Modifique o seu código para que o looping infinito não aconteça;
  - E só então, levante o servidor novamente.
*/

/*
  01

  - Utilizando um while loop, exiba no console todos os números entre 0 e 5,  
    inclusive esses dois.
  - O resultado deve ser:
    0
    1
    2
    3
    4
    5
*/
console.info("## Exercise >> 01")
let i = 0

while(i <= 5) {
  console.log(i)
  i++
}

/*
  02 - Comente a declaração da let e o loop acima e:

  - Utilizando um for loop, faça o mesmo que foi pedido no exercício 01.
*/
console.info("## Exercise >> 02")

for(i = 0; i <= 5;){
  console.log(i)
  i++
}

/*
  03 - Comente o loop acima e:

  - Escreva um loop (for ou while) que exiba a frase abaixo no console;
  - Substitua o "X" pela informação correta;
  - "X" deve começar em 1 na 1ª exibição da frase e em 10 na última;
  - Exiba a frase 10x no console.

  "Esta é a Xª vez que esta frase é exibida no console."
*/
console.info("## Exercise >> 03")

for(i = 1; i <= 10;){
  console.log(`"Esta é a ${i}ª vez que esta frase é exibida no console."`)
  i++
}

/*
  04 - Comente o loop acima e:

  - Abaixo da constante "cities", declare uma let "upperCaseCities" e atribua à  
    ela um array vazio;
  - Adicione no array que a "upperCaseCities" armazena as cidades do array  
    cities com todas as letras maiúsculas, utilizando o for loop.
  - Para ver se deu certo, exiba o upperCaseCities no console.
*/
console.info("## Exercise >> 04")

const cities = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais']

let upperCaseCities = []

for(let iterator = 0; iterator < cities.length;){
  upperCaseCities.push(cities[iterator].toUpperCase())
  iterator++
}

console.log(upperCaseCities)

/*
  05 - Comente o console.log acima e:

  - Após a const names, utilize um for loop para gerar um template HTML;
  - Exiba no console o template HTML que você gerou;
  - O template deve ser exibido apenas uma vez no console e o resultado deve ser:
    <li>João Grilo</li><li>Chicó</li><li>Rosinha</li>
*/
console.info("## Exercise >> 05")

const names = ['João Grilo', 'Chicó', 'Rosinha']

let template = ``

for(let i = 0; i < names.length; i++){
  template += `<li>${names[i]}</li>`
}
console.log(template)

/*
  06 - Comente o console.log acima e:

  - Após a const numbers, utilize um for loop para somar todos os números do  
    array;
  - Exiba no console um boolean indicando se o total dessa soma é 337;
  - O console deve exibir true.
*/
console.info("## Exercise >> 06")

const numbers = ['91', '5', '30', '97', '83', '31']
let total = 0

for (let intetator = 0; intetator < numbers.length; intetator++) {
   total += Number(numbers[intetator])
}
  console.log(total === 337)

/*
  07 - Comente o console.log acima.

  Este exercício é um pouco mais complexo que os anteriores. Não se preocupe  
  muito caso você não acerte ele. Apenas tente resolvê-lo com o conhecimento  
  adquirido até aqui.

  - O JavaScript permite você criar arrays dentro de um outro array. Isso é  
    chamado de aninhamento de arrays, ou nested arrays em inglês. Por isso, o  
    array "arrays" abaixo é uma sintaxe válida. Cada array dentro do array  
    "arrays" é um item;
  - Abaixo do array "arrays", utilizando o for loop, some todos os números  
    destes arrays.
  - Após o for, exiba no console o resultado, que deve ser 218.

  Dica: você pode colocar um loop dentro do outro, ou seja, aninhá-los. =)
*/
console.info("## Exercise >> 07")

const arrays = [
  [4, 32, 8],
  [64, 8, 32],
  [8, 32, 16],
  [2, 8, 4]
]

let totals = 0
for(let iterator = 0; iterator < arrays.length; iterator++){
  for(let accumulator = 0; accumulator < arrays[iterator].length; accumulator++){
    totals += arrays[iterator][accumulator]
  }
}
console.log(totals)