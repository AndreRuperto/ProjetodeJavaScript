//1
function mudar1(){
    location.replace("./media.html", "_self")
}

function media(){
    var nota1 = Number(window.document.getElementById('numero').value)
    var nota2 = Number(window.document.getElementById('numero1').value)
    var nota3 = Number(window.document.getElementById('numero2').value)
    var nota4 = Number(window.document.getElementById('numero3').value)
    var texto = window.document.getElementById('texto')
    var texto1 = window.document.getElementById('texto1')
    var media = (nota1 + nota2 + nota3 + nota4) / 4
    texto.innerHTML = `O média foi ${media}`
    if(media >= 6){
        texto1.innerHTML = 'Aprovado!'
    }else{
        texto1.innerHTML = 'Reprovado!'
    }
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//2
function mudar2(){
    location.replace("./imc.html", "_self")
}

function imc(){
    var peso = window.document.getElementById('peso').value
    var altura = window.document.getElementById('altura').value
    var texto = window.document.getElementById('texto')
    var texto1 = window.document.getElementById('texto1')
    var imc = (peso / (altura ** 2))
    if (imc > 0){
        texto.innerHTML = `Seu IMC é igual a ${imc.toFixed(2)}`
    }else{
        texto.innerHTML = "Valor inválido"
    }
    if(imc < 20.7){
        texto1.innerHTML = "Você está abaixo do peso ideal"
    }else if(imc >= 20.7 && imc < 26.5){
        texto1.innerHTML = "Você está no peso ideal"
    }else if(imc >= 26.5 && imc < 27.8){
        texto1.innerHTML = "Você está um pouco acima do peso"
    }else if(imc >= 27.8 && imc < 31.2){
        texto1.innerHTML = "Você está acima do peso"
    }else if(imc >= 31.2){
        texto1.innerHTML = "Você está obeso"
    }
}

function voltar(){
    location.replace("./projeto.html", "_self")
}


//3

function mudar3(){
    location.replace("./testemaioridade.html", "_self")
}

function testemaioridade(){
    var anoNasc = window.document.getElementById('idade').value
    var texto = window.document.getElementById('texto')
    var texto1 = window.document.getElementById('texto1')
    var anoAtual = 2022
    var idade = (anoAtual - anoNasc);
    texto.innerHTML = `Sua idade é ${idade} anos`
    if(idade>=18){
        texto1.innerHTML = "Você é maior de idade"
    }else{
        texto1.innerHTML = "Você é menor de idade"
    }
}
    
function voltar(){
    location.replace("./projeto.html", "_self")
}

//4
function mudar4(){
    location.replace("./parouimpar.html", "_self")
}

function parouimpar(){
    var numero = window.document.getElementById('numero').value
    var texto = window.document.getElementById('texto')
    var verificacao = numero % 2
        if (verificacao === 0){
            var P = numero
            texto.innerHTML = `O número ${P} foi inserido na váriavel P, logo ${P} é par`
        }else{
            var I = numero
            texto.innerHTML = `O número ${I} foi inserido na váriavel I, logo ${I} é ímpar`
        }

}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//5

function mudar5(){
    location.replace("./valorden.html", "_self")
}

function verifican(){
    var numero = window.document.getElementById('numero').value
    var texto = window.document.getElementById('texto')
        if (numero > 100){
            texto.innerHTML = `Já que ${numero} é maior que 100, o valor de N é ${numero}`
        }else if (numero == 100){
            texto.innerHTML = `Já que o numero é ${numero}, o valor de N é 0`
        }else{
            texto.innerHTML = `Já que ${numero} é menor que 100, o valor de N é 0`
        }

}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//6

function mudar6(){
    location.replace("./pesoideal.html", "_self")
}

function ps(){
    var sexo = window.document.getElementById('sexo').value
    var altura = window.document.getElementById('altura').value
    var texto = window.document.getElementById('texto')
        if (sexo == "Feminino" || sexo == "feminino" || sexo == "FEMININO"){
            var pesoFem = (62.1 * altura) - 44.7
            texto.innerHTML = `Seu peso ideal é ${pesoFem.toFixed(2)} kg`
        }else if(sexo == "Masculino" || sexo == "masculino" || sexo == "MASCULINO"){
            var pesoMas = (72.7 * altura) - 58
            texto.innerHTML = `Seu peso ideal é ${pesoMas.toFixed(2)} kg`
        }else{
            texto.innerHTML = 'Valor inválido'
        }
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//7

function mudar7(){
    location.replace("./area.html", "_self")
}

function area(){
    var base = window.document.getElementById('base').value
    var altura = window.document.getElementById('altura').value
    var texto = window.document.getElementById('texto')
    var area = base * altura
    texto.innerHTML = `A área desse retângulo é ${area} cm²`
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//8

function mudar8(){
    location.replace("./salarionovo.html", "_self")
}

function salarionovo(){
    var salarioAtual = Number(window.document.getElementById('salatual').value)
    var percReajust =  Number(window.document.getElementById('perrea').value)
    var texto = window.document.getElementById('texto')
    var novoSalario = salarioAtual + ((salarioAtual * percReajust) / 100)
    texto.innerHTML = `Com o reajuste de ${percReajust}%, o valor do seu novo salário será R$ ${novoSalario.toFixed(2)}`
}

function voltar(){
    location.replace("./projeto.html", "_self")
}


//9

function mudar9(){
    location.replace("./cstcarro.html", "_self")
}

function custocarro(){
    var custFrab = Number(window.document.getElementById('custofab').value)
    var texto = window.document.getElementById('texto')
    var soma = custFrab + ((custFrab * 28) / 100) + ((custFrab * 45) / 100)
    texto.innerHTML = `O custo final do veículo foi R$ ${soma}`
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//10
function mudar10(){
    location.replace("./votos.html", "_self")
}


function votos(){
    var totalDeEleitores = window.document.getElementById('eleitores').value
    var votosValidos = window.document.getElementById('votvalidos').value
    var votosBrancos = window.document.getElementById('votbrancos').value
    var votosNulos = window.document.getElementById('votnulos').value
    var texto = window.document.getElementById('texto')
    var porcValidos = (100 * votosValidos) / totalDeEleitores
    var porcBrancos = (100 * votosBrancos) / totalDeEleitores
    var porcNulos = (100 * votosNulos) / totalDeEleitores
    if (votosValidos >= totalDeEleitores){
        texto.innerHTML = `Valor inválido`
    }else if (votosBrancos >= totalDeEleitores){
        texto.innerHTML = `Valor inválido`
    }else if(votosNulos >= totalDeEleitores){
        texto.innerHTML = `Valor inválido`
    }else{
        texto.innerHTML = `Dos ${totalDeEleitores}, ${porcValidos.toFixed(2)}% votaram em algum candidato, ${porcBrancos.toFixed(2)}% votaram branco e ${porcNulos.toFixed(2)}% votaram nulo.`
    }
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//11
function mudar11(){
    location.replace("./salvendedor.html", "_self")
}

function salariovendedor(){
    var carrosVendidos = Number(window.document.getElementById('carros').value)
    var valorTotalVendas = Number(window.document.getElementById('vendas').value)
    var salarioFixo = Number(window.document.getElementById('salariofixo').value)
    var comissãoFixa = Number(window.document.getElementById('comissao').value)
    var texto = window.document.getElementById('texto')
    var salarioFinal = salarioFixo + comissãoFixa * carrosVendidos + valorTotalVendas * 5 / 100
    texto.innerHTML = `O salário final do vendedor é ${salarioFinal}`
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//12
function mudar12(){
    location.replace("./antecessor.html", "_self")
}

function antecessor(){
    var valor = window.document.getElementById('numero').value
    var texto = window.document.getElementById('texto')
    antecessor = valor - 1 
    texto.innerHTML = `O antecessor de ${valor} é o ${antecessor}`
}

function voltar(){
    location.replace("./projeto.html", "_self")
}


//13
function mudar13(){
    location.replace("./idadeemdias.html", "_self")
}

function idadeemdias(){
    var anos = Number(window.document.getElementById('anos').value)
    var meses = Number(window.document.getElementById('meses').value)
    var dias = Number(window.document.getElementById('anos').value)
    var texto = window.document.getElementById('texto')
    var idadeDias = (anos * 365) + (meses * 30) + dias
    texto.innerHTML = `Sua idade em dias é ${idadeDias} dias!`
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//14
function mudar14(){
    location.replace("./ordenando.html", "_self")
}

function vetor() {
    var numeros = [];
    var lista = document.getElementById("lista").value;
    var lista1 = document.getElementById("lista1").value;
    var lista2 = document.getElementById("lista2").value;
    var lista3 = document.getElementById("lista3").value;
    var lista4 = document.getElementById("lista4").value;
    var texto = window.document.getElementById('texto')
    numeros.unshift(lista4);
    numeros.unshift(lista3);
    numeros.unshift(lista2);
    numeros.unshift(lista1);
    numeros.unshift(lista);
    numeros.sort(function(a,b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    })

    texto.innerHTML = `O números em ordem crescentes são: ${numeros}`
    
}

function voltar(){
    location.replace("./projeto.html", "_self")
}

//15

function mudar15(){
    location.replace("./tabuada.html", "_self")
}

function tabuada(){
    var tabuada = window.document.getElementById("tabuada").value;
    var num = window.document.getElementById("num")
    num.innerHTML = `Tabuada de ${tabuada} <br>`
    for (i = 0; i <= 10; i++){
        num.innerHTML += `${tabuada} x ${i} = ${tabuada * i} <br>`
    }
}

function voltar(){
    location.replace("./projeto.html", "_self")
}
    