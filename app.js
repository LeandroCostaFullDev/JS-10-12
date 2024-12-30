// https://dontpad.com/fs20/ifelse

// OPERADORES
// > >=
// <  <=
// === (COMPARA VALOR E TIPO)
// == (COMPARA SOMENTE VALOR)
//!==(Estritamente diferente)
//!= (Diferente)
//%(Resto da divisao)

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Diga qual o maior time do estado: O sistema receberá quantos anos o ceara e o fortaleza passaram na serie C e dirá quem é o maior.

// let anosCeara = Number(prompt("digite quantos anos o ceara passou na serie C"))

// let anosFortaleza = Number(prompt("digite quantos anos o fortaleza passou na serie C"))

// if (anosCeara<anosFortaleza){
//     alert("O ceara maior que fortaleza")
// }else{
//     alert("O fortaleza maior que Ceara")
// }


// 10. Verificar se é letra A
// Peça ao usuario para inserir uma letra e diga se ela é a letra A ou não.

// let letra = prompt("Digite a")
// if(letra == "a") {
//     alert("Digitou a")
// } else{
//     alert("Digitou errado!")
// }


// 1. Verificar se é positivo ou negativo
// Peça ao usuário para inserir um número e diga se ele é positivo ou negativo.

// let numero = Number(prompt("Digite o numero:"))

// if ( numero >=0){
//     alert("O numero é positivo")
// } else{
//     alert("O numero é negativo")
// }

// 1. Verificar se é positivo ou negativo
// Peça ao usuário para inserir um número e diga se ele é positivo ou negativo.

// let numero = Number(prompt("Digite um numero:"))

// if ( numero >=0){
//     alert("O numero é positivo")
// } else{
//     alert("O numero é negativo")
// }

// 2. Verificar se é maior ou menor
// Peça ao usuário para inserir dois números e diga qual é maior ou se são iguais.

// let usuario = Number(prompt("Digite um numero:"))

// 3. Verificar se é múltiplo de 3
// Peça ao usuário para inserir um número e diga se ele é múltiplo de 3.

// 4. Verificar se é maior de 10
// Peça ao usuário para inserir um número e diga se ele é maior que 10 ou menor ou igual a 10.

// 5. Verificar se é maior que 100
// Peça ao usuário para inserir um número e diga se ele é maior que 100 ou menor ou igual a 100.

// 6. Escolha entre "Sim" e "Não"
// Peça ao usuário para responder "Sim" ou "Não". Se ele responder "Sim", imprima "Você escolheu sim". Caso contrário, imprima "Você escolheu não".

// 7. Verificar se é divisível por 5
// Peça ao usuário para inserir um número e diga se ele é divisível por 5.

// 8. Verificar idade de entrada
// Peça ao usuário para inserir a idade e diga se ele pode votar (idade >= 16) ou não pode votar (idade < 16).

// 9. Determinar se é um número par
// Peça ao usuário para inserir um número e diga se ele é par ou ímpar.

// 10. Verificar se é letra A
// Peça ao usuário para inserir uma letra e diga se ela é a letra A ou não.

////////////////////////////////////////////////////////////////////////////////////////

// Exercício 1: Verificar a maioridade de João
// Crie uma verificação para saber se o João é maior de idade. Se ele tiver 18 anos ou mais, a mensagem será "João é maior de idade", caso contrário, "João é menor de idade".

// let idade = Number(prompt("Digite a idade:"))
// if(idade >=18){
//     alert("João é maior de idade.")
// } else{
//     alert("João é menos de idade.")
// }

// Exercício 2: Verificar profissão de Maria
// Crie uma verificação para saber se a Maria é "Médica". Se for, a mensagem será "Maria é profissional de saúde", caso contrário, "Maria tem outra profissão".

// Exercício 3: Verificar se Carlos pode dirigir
// Crie uma verificação para saber se Carlos tem idade suficiente para dirigir (considerando que a idade mínima é 18 anos). Se ele tiver 18 ou mais anos, a mensagem será "Carlos pode dirigir", caso contrário, "Carlos não pode dirigir".

// Exercício 4: Verificar categoria etária de Ana
// Crie uma verificação para classificar Ana em uma categoria etária. Se ela tiver 18 anos ou mais, será "Adulto". Se for menor de 18, será "Jovem".

// Exercício 5: Verificar idade de Pedro para um benefício
// Crie uma verificação para saber se Pedro tem 60 anos ou mais para receber um benefício. Se ele tiver 60 ou mais, a mensagem será "Pedro recebe o benefício", caso contrário, "Pedro não recebe o benefício".

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 6. Tendo	 como	 entrada	 a	 altura	 e	 o	 sexo	 (codificado	 da	 seguinte	 forma:	
//     1:feminino	 	 2:masculino)	 de	 uma	 pessoa,	 construa	 um	 programa	 que	
//     calcule	e	imprima	seu	peso	ideal,	utilizando	as	seguintes	
//     Fórmulas:	
//     - para	homens:	(72.7	*	Altura)	– 58	
//     - para	mulheres:	(62.1	*	Altura)	– 44.7

// let sexo = prompt("Digite o seu sexo")
// let altura = Number(prompt("Digite sua altura"))

// if(sexo === "feminino"){
//     let pesoIdeal = ((62.1 * altura) - 44.7 ).toFixed(2)
//     alert(`O peso ideal é de : ${pesoIdeal}`);
    
// }
// else if( sexo === "masculino"){
//     let pesoIdeal = ((72.7 * altura) - 58 ).toFixed(2)
// alert(`O peso ideal é de : ${pesoIdeal}`);
// }
// else{
// alert("Digite um valor válido!");
// }

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 10. Escreva	 um	 programa que	 leia	 as	 medidas	 dos	 lados	 de	 um	 triângulo	 e	
// escreva	se	ele	é	Equilátero,	Isósceles	ou	Escaleno.	Sendo	que:	
// − Triângulo	Equilátero:	possui	os	3	lados	iguais.	
// − Triângulo	Isóscele:	possui	2	lados	iguais.	
// − Triângulo	Escaleno:	possui	3	lados	diferentes.

// let lado1 = "12"
// let lado2 = "14"
// let lado3 = "15"

// if(lado1 === lado2 && lado1 === lado3 && lado2 === lado3){
//     console.log("Tringulo Escaleno");   
// } else if(lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3){
//     console.log("Triangulo Escaleno");   
// } else{
//     console.log("Triangulo Isóscele");  
// }

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// a. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
// b. Salários até R$ 280,00 (incluindo): aumento de 20%;
// c. Salários entre R$ 280,00 e R$700,00: aumento de 15%;
// d. Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%;
// e. Salários de R$ 1500,00 em diante: aumento de 5%
// Após o aumento ser realizado; informe na tela;


// let salario = Number(prompt("Digite seu salario"))
// if(salario<=280){
//     let percentualAumento = 0.2
//     let novoSalario = salario *( percentualAumento +1)
//     let aumento = salario * percentualAumento
//     alert(`
//         Valor do salário : ${salario}
//         Valor do percentual : ${percentualAumento}
//         Valor do aumento : ${aumento}
//         Valor do novo salário: ${novoSalario}
//         `);
// } else if (salario > 280 && salario<=700){
//     let percentualAumento = 0.15
//     let novoSalario = salario *( percentualAumento +1)
//     let aumento = salario * percentualAumento
//     alert(`
//         Valor do salário : ${salario}
//         Valor do percentual : ${percentualAumento}
//         Valor do aumento : ${aumento}
//         Valor do novo salário: ${novoSalario}
//         `);
// } else if (salario>700 && salario <=1500){
//     let percentualAumento = 0.10
//     let novoSalario = salario *( percentualAumento +1)
//     let aumento = salario * percentualAumento
//     alert(`
//         Valor do salário : ${salario}
//         Valor do percentual : ${percentualAumento}
//         Valor do aumento : ${aumento}
//         Valor do novo salário: ${novoSalario}
//         `);
// } else {
//     let percentualAumento = 0.05
//     let novoSalario = salario *( percentualAumento +1)
//     let aumento = salario * percentualAumento
//     alert(`
//         Valor do salário : ${salario}
//         Valor do percentual : ${percentualAumento}
//         Valor do aumento : ${aumento}
//         Valor do novo salário: ${novoSalario}
//         `);
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 1. Verificar se é positivo ou negativo
// Peça ao usuário para inserir um número e diga se ele é positivo ou negativo.

// let positivo = Number(prompt("Digite um numero:"))

// if( positivo >= 0){
//     alert("O valor é positivo.")
// } else{
//     alert("O valor é negativo.")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 2. Verificar se é maior ou menor
// Peça ao usuário para inserir dois números e diga qual é maior ou se são iguais.

// let numero1 = Number(prompt("Digite o primeiro numero: "))
// let numero2 = Number(prompt("Digite o segundo numero: "))

// if( numero1 > numero2){
//     alert(`O maior numero é : ${numero1}`)

// } else if( numero2 > numero1) {
//     alert(`O maior numero é : ${numero2}`)
// }
//  else{
//     alert("Numeros iguais.")
// }

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// CALCULANDO

// let numero1 = Number(prompt("Digite o primeiro numero: "))
// let operador = prompt("Digite o operador desejado (+, -, *, /) :");
// let numero2 = Number(prompt("Digite o segundo numero: "))

// let resultado;

// if(operador === "+"){
//     resultado = numero1 + numero2;
// } else if (operador === "-"){
//     resultado = numero1 - numero2;
// } else if (operador === "*"){
//     resultado = numero1 * numero2;
// } else if (operador === "/"){
//     resultado = numero1 / numero2;
// } else {
//     resultado = "Erro: Divisão por 0 não é permitido.";
// } 
// alert(`O resultao da operação é: ${resultado}`);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 2. Verificar se é maior ou menor
// Peça ao usuário para inserir dois números e diga qual é maior ou se são iguais.

// let numero1 = Number(prompt("DIgite um número:"))
// let numero2 = Number(prompt("Digite um número:"))

// if(numero1 > numero2){
//     alert(`O número é o maior: ${numero1}`)
// }
// else if(numero1 < numero2){
//     alert(`O número é o maior: ${numero2}`)
// } else("Números iguais.")

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 3. Verificar se é múltiplo de 3
// Peça ao usuário para inserir um número e diga se ele é múltiplo de 3.

// let multiplo3 = Number(prompt(`Verifique se o número é multiplo de 3`))

// if(multiplo3 % 3 === 0){
//     alert(`O número ${multiplo3} é divisor de 3.`)
// } else{
//     alert(`O número ${multiplo3} não é divisor de 3.`)
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 4. Verificar se é maior de 10
// Peça ao usuário para inserir um número e diga se ele é maior que 10 ou menor ou igual a 10.

// let numero = Number(prompt("Digite um número:"))

// if( numero > 10 ){
//     alert(`O número ${numero} é maior que 10.`)
// }
// else if(numero === 10){
//     alert(`O número ${numero} é igual a 10.`)
// }
// else{
//     alert(`O número ${numero} não é maior que 10.`)
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 5. Verificar se é maior que 100
// Peça ao usuário para inserir um número e diga se ele é maior que 100 ou menor ou igual a 100.

// let numero = Number(prompt("Digite um número:"))

// if(numero > 100){
//     alert(`O número ${numero} é maior que 100.`)
// }
// else if(numero === 100){
//     alert(`O número ${numero} é igual a 100.`)
// } else{
//     alert(`O número ${numero} não é maior que 100.`)
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 6. Escolha entre "Sim" e "Não"
// Peça ao usuário para responder "Sim" ou "Não". Se ele responder "Sim", imprima "Você escolheu sim". Caso contrário, imprima "Você escolheu não".

// let confirmação = prompt("Responda SIM ou NÃO:")

// if(confirmação === "Sim"){
//     alert("Vc escolheu SIM.")
// }
// else if(confirmação === "Não"){
//     alert("Vc escolheu NÃO.")
// } else{
//     alert("ERRO!! Digite Sim ou Não")}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 7. Verificar se é divisível por 5
// Peça ao usuário para inserir um número e diga se ele é divisível por 5.

// let numero = Number(prompt("Digite um número:"))

// if(numero % 5 === 0){
//     alert(`${numero} é divisível por 5.`)
// } else{
//     alert(`${numero} não é divisível por 5.`)
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 8. Verificar idade de entrada.
// Peça ao usuário para inserir a idade e diga se ele pode votar (idade >= 16) ou não pode votar (idade < 16).

// let eleitor = Number(prompt("Digite dua idade:"))

// if(eleitor >= 16){
//    alert("Vc pode votar!")
// } else{
//    alert("Vc NÃO pode votar!")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 9. Determinar se é um número par
// Peça ao usuário para inserir um número e diga se ele é par ou ímpar.

// let numero = Number(prompt("Digite um numero:"))

// if( numero % 2 === 0){
//     alert(`O número ${numero} é PAR.`)
// } else{
//     alert(`O número ${numero} é IMPAR.`)
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 10. Verificar se é letra A
// Peça ao usuário para inserir uma letra e diga se ela é a letra A ou não.

// let letra = prompt("Digite uma letra:")

// if(letra === "A"){
//     alert("Vc digitou a letra A!")
// } else{
//     alert("Não é a letra A!")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//Diga qual é o maior time do estado: O sistema receberá quantos anos o ceara e o fortaleza passaram na serie C e dirá quem é o maior.

// let ceara = Number(prompt("Quantos anos o Ceará passou na Serie C ?"))
// let fortaleza = Number(prompt("Quantos anos o Fortaleza passou na Serie C ?"))

// if(ceara > fortaleza){
//     alert("Fortaleza é maior queo Ceará !")
// } else {
//     alert("Ceará é maior que o Fortaleza !")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 3. Escreva	 um	 programa	 que	 verifique	 a	 validade	 de	 uma	 senha	 fornecida	
// pelo	 usuário.	 A	 senha	 válida	 é	 o	 número	 1234.	Devem	 ser	impressas	 as	
// seguintes	mensagens:	
// ACESSO	PERMITIDO	caso	a	senha	seja	válida.	
// ACESSO	NEGADO	caso	a	senha	seja	inválida.

// let senhaInserida = Number(prompt("Digite sua senha:"))

// if(senhaInserida === 1234){
//     alert("ACESSO PERMITIDO!")
// } else{
//     alert("ACESSO NEGADO!")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 1. Escreva	 um	 programa	 para	 ler	 2	 valores	 (considere	 que não serão	
//     informados	valores	iguais)	e	escrever	o	maior	deles.

// let valor1 = Number(prompt("Digite o primeiro valor:"))
// let valor2 = Number(prompt("Digite o segundo valor:"))

// if(valor1 > valor2){
//     alert(`O valor ${valor1} é maior.`)
// }
// else if(valor1 < valor2){
//     alert(`O valor ${valor2} é maior.`)
// } else{
//     alert("Valores iguais. Digite novamente!")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// 2. Escreva	 um	 programa	 para	 ler	 o	 ano	 de	 nascimento	 de	 uma	 pessoa	 e	
// escrever	 uma	 mensagem	 que	 diga	 se	 ela	 poderá	 ou	 não	 votar	 este	 ano	
// (não	é	necessário	considerar	o	mês	em	que	ela	nasceu).

// let ano = Number(prompt("Digite seu ano de nascimento :"))

// if(ano <= 2008){
//     alert("Vc poderá votar esse ano.")
// } else{
//     alert("Vc não poderá votar esse ano.")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Exercício 1: Verificar a maioridade de João
// Crie uma verificação para saber se o João é maior de idade. 
// Se ele tiver 18 anos ou mais, a mensagem será "João é maior de idade", caso contrário, "João é menor de idade".

// let joão = Number(prompt("Digite a idade de João:"))

// if(joão >= 18){
//     alert("João é maior de idade")
// } else{
//     alert("João é menor de idade")}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Exercício 2: Verificar profissão de Maria
// Crie uma verificação para saber se a Maria é "Médica". 
// Se for, a mensagem será "Maria é profissional de saúde", caso contrário, "Maria tem outra profissão".

// let profissao = prompt("Qual a profissão de maria ?")

// if(profissao === "Médica"){
//     alert("Maria é profissional de saúde")
// } else{
//     alert("Maria tem outra profissão")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Exercício 4: Verificar categoria etária de Ana
// Crie uma verificação para classificar Ana em uma categoria etária. 
// Se ela tiver 18 anos ou mais, será "Adulto". Se for menor de 18, será "Jovem".

// let faixaEtaria = Number(prompt("Digite a idade de Ana:"))

// if(faixaEtaria >= 18){
//     alert("Ana é adulta.")
// } else {
//     alert("Ana é jovem ainda, jovem ainda.")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Exercício 5: Verificar idade de Pedro para um benefício
// Crie uma verificação para saber se Pedro tem 60 anos ou mais para receber um benefício. 
// Se ele tiver 60 ou mais, a mensagem será "Pedro recebe o benefício", caso contrário, "Pedro não recebe o benefício".

// let idade = Number(prompt("Digite a idade:"))

// if(idade >= 60){
//     alert("Pedro recebe o benefício")
// } else{
//     alert("Pedro não recebe o benefício")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numero1 = Number(prompt("Digite número 1:"))
// let operacao = prompt("Digite a operação")
// let numero2 = Number(prompt("Digite número 2:"))

// if(operacao === "+"){
//     let soma = numero1 + numero2
//     alert(`O resultado da soma é: ${soma}`)
// } else if(opreacao === "-"){
//     let sub = numero1 - numero2
//     alert(`O resultado da sub é: ${sub}`)
// } else if(opreacao === "*"){
//     let mult = numero1 * numero2
//     alert(`O resultado da sub é: ${mult}`)
// } else if(opreacao === "/"){
//     let div = numero1 / numero2
//     alert(`O resultado da sub é: ${div}`)
// } else {
//     alert("Digite um valor válido.")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||



// for (let index = 0; index <1000; index++){

// }


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Imprimir a tabuada de um número
// Dodo o número, imprima a sua tabuada de 1 a 10.

// let numero = 2

// for (let index = 1; index <= 10; index++){
//     let multiplicacao = numero*index
//     console.log(`${numero} * ${index} = ${multiplicacao}`);
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// for (let index = 0; index <=20; index++){
//     if(index % 2 === 0){
//         console.log(`${index} é par`); 
//     } else{
//         console.log(`${index} é impar`);
        
//     }
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Contagem Progressiva:
// Crie um loop que conta de 1 a 10 e imprima cada número no console.

// for (let index = 1; index <=10; index++) {
//     console.log(index);
    
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Contagem Regressiva

// for (let index = 10; index >=1; index--) {
//     console.log(index);   
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Contagem de Números Pares
// Utilize um loop para imprimir todos os números pares de 1 a 20 no console.

// for (let index = 1; index <=20; index++) {
//     if(index % 2 === 0){
//         console.log(index); 
//     }
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Contagem de Números Ímpares
// Utilize um loop para imprimir todos os números ímpares de 1 a 20 no console.

// for (let index = 1; index <=20; index++) {
//     if(index % 2 !== 0)
//         console.log(index);      
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// Tabuada de um Número Específico
// Crie um loop que imprime a tabuada do 5 (de 1 a 10) no console.

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// let numero1 = Number(prompt("Digite número 1:"))
// let operacao = prompt("Digite a operação")
// let numero2 = Number(prompt("Digite número 2:"))

// if(operacao === "+"){
//     let soma = numero1 + numero2
//     alert(`O resultado da soma é: ${soma}`)
// } else if(opreacao === "-"){
//     let sub = numero1 - numero2
//     alert(`O resultado da sub é: ${sub}`)
// } else if(opreacao === "*"){
//     let mult = numero1 * numero2
//     alert(`O resultado da sub é: ${mult}`)
// } else if(opreacao === "/"){
//     let div = numero1 / numero2
//     alert(`O resultado da sub é: ${div}`)
// } else {
//     alert("Digite um valor válido.")
// }

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

let cliente = prompt("Digite o cliente:")
let distaciaTotal = Number(prompt("Digite a distância de asfalto:"))
let distanciaCarrocal = Number(prompt("Digite a distância de carroçal:"))

let carrocalSouenergyFotus = 5.0
let asfaltoSouenergyFotus = 4.5
let carrocalSoollar = 6.0
let asfaltoSoollar = 5.5

if(cliente === "sou energy"){
    let distanciaSouEnergy = distaciaTotal * asfaltoSouenergyFotus
    let carrocalSouEnergy = distanciaCarrocal * carrocalSouenergyFotus
    let valorTotal = distanciaSouEnergy + carrocalSouEnergy
 
    alert(`
        Taxa de asfalto é: ${distanciaSouEnergy}
        Taxa de carroçal é: ${carrocalSouEnergy}

        Valor total é: ${valorTotal}
        `)
} else if (cliente === "fotus") {
    let DistanciaFotus = distaciaTotal * asfaltoSouenergyFotus
    let carroçalFotus = distanciaCarrocal * carrocalSouenergyFotus
    let valorTotalFotus = DistanciaFotus + carroçalFotus
    
    alert(`
        Taxa de asfalto é: ${DistanciaFotus}
        Taxa de carroçal é: ${carroçalFotus}

        Valor total é: ${valorTotalFotus}
        `)
} else if(cliente === "soollar"){
    let distanciaAsfaltosoollar = distaciaTotal * asfaltoSoollar
    let distanciaCarrocalSoollar = distanciaCarrocal * carrocalSoollar
    let valorTotalSoollar = distanciaAsfaltosoollar + distanciaCarrocalSoollar

    alert(`
        Taxa de asfalto é: ${distanciaAsfaltosoollar}
        Taxa de carroçal é: ${distanciaCarrocalSoollar}

        Valor total é: ${valorTotalSoollar}
        `)

} else if(cliente !== "sou energy" && "fotus" && "soollar" ){
    alert("Digite o nome do cliente corretamente!")
}

else {
    alert("Nome do cliente errado!")
}

