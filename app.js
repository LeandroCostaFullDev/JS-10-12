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

// 3. Verificar se é múltiplo de 3
// Peça ao usuário para inserir um número e diga se ele é múltiplo de 3.

let numero1 = Number(prompt("Digite um numero:"))
