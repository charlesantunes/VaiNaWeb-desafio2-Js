// Constantes
const nome = "Charles"; 
const idadeCharles = 17;
const maiorIdade = 17 >=18;
const mesNascimento = "Janeiro";
const nome2 = "Ralf"
const Ralf = 'R';

//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
if (idadeCharles >= 18) {
    console.log(`${nome}, com a idade de ${idadeCharles},\n Voce é maior de idade!`)
} else {
    console.log(`${nome}, com a idade de ${idadeCharles},\n Voce é menor de idade!`)
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
console.log(`Eu me chamo ${nome} e sou menor de idade!\n ${!maiorIdade}`)

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
if((mesNascimento === "Janeiro") || (mesNascimento === "Desembro")){
    console.log(`O mês de ${mesNascimento}, está entre Dezembro e Janeiro, dessa forma seu signo é Capricórnio`)
}else{
    console.log("Seu signo não está entre Dezembro e Janeiro, procure saber qual seu signo no Horóscopo");
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
if (Ralf === 'R') {
    console.log(`O nome ${nome2}, começa com a letra R`);
} else {
    console.log(`O nome ${nome2}, não começa com a letra R`);
}

//4 - outra forma de resolução, usando a função toUpperCase
if (Ralf.toUpperCase() == 'R') {
    console.log(`Usando a função toUpperCase \nVerifica-se que o nome ${nome2}, começa com a letra R`)
} else {
    console.log(`Usando a função toUpperCase \nVerifica-se que o nome ${nome2}, não começa com a letra R`)
}
