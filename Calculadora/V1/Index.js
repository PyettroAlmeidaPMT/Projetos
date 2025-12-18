function soma(Racum, valor, valor1){
    let resultado;
   
   if(Racum > 0 ){
    resultado = Racum + valor1;
   }else{
    resultado = valor + valor1;
   }
   return resultado
}
function subtracao(Racum, valor, valor1){
    let resultado;
    if(Racum == 0){
        resultado = valor - valor1;
    }
    else{
        resultado = Racum - valor1;
    }
    return resultado
}
function mult(Racum, valor,valor1){
    let resultado
    if(Racum == 0){
        resultado = valor * valor1;
    }else{
        resultado = Racum * valor1;
    }
    return resultado
}
function div(Racum, valor, valor1){
    let resultado
    if(Racum == 0){
        resultado = valor / valor1;
    }else{
        resultado = Racum / valor1;
    }
    return resultado
}
function potenc(Racum, valor, valor1){
    let resultado
    let acumulativa = 1;
    let acumulativaR = Racum;
    if(Racum == 0){
        for (i = 0; i<valor1; i++){
         acumulativa *= valor
        
        }
        resultado = acumulativa;
    }else{
        for(i = 0; i<valor; i++){
            
            acumulativaR *= Racum;
        }
        resultado = acumulativaR;
    }
    return resultado
}
function porcent(Racum, valor, valor1){
    let resultado
    if(Racum == 0){
        resultado = valor / valor1 * 100
    }
    else{
        resultado = Racum / valor * 100
    }

    return resultado
}
function Rad(Racum, valor, valor1){
    let resultado
    let achouraiz = false;
    if(Racum == 0){
      for(i = 1; i<valor; i++){

         if (i * i == valor){
            resultado = i
            console.log(resultado)
            achouraiz = true;
            break
         }
      }
    }
    else{
       for( i = 0; i<Racum; i++){
        if(i * i == Racum){
            resultado = i
            achouraiz = true;
            break
        }
       }
    }
    if(achouraiz == true){
         return resultado
    }
    if(achouraiz == false){
        resultado ="0"
        return resultado
    }
}


 let Intro = document.getElementById("intro");

 setTimeout(() => {

    Intro.classList.add("fade-out");
    setTimeout(() => {
    if(Intro.parentNode){
        Intro.parentNode.removeChild(Intro);
    }
    },500);
    
 }, 6000);




let tela = document.getElementById("numb");
let U = document.getElementById("Um");
let D = document.getElementById("Dois");
let T = document.getElementById("Tres");
let Q = document.getElementById("Quatro");
let C = document.getElementById("Cinco");
let S = document.getElementById("Seis");
let Se = document.getElementById("Sete");
let O = document.getElementById("Oito");
let N = document.getElementById("Nove");
let Z = document.getElementById("Zero");
let Cl = document.getElementById("clear");
let Som = document.getElementById("soma");
let Sub = document.getElementById("Sub");
let Mult = document.getElementById("Mult");
let Div = document.getElementById("Div");
let Pot = document.getElementById("Pot");
let Porcent = document.getElementById("Porc")
let rad = document.getElementById("Rad");
let Ig = document.getElementById("Fim");


let seila = ""; //variavel acumulativa que é mostrada na tela
let Decdeopr;
let valor;
let valor1;
let Racum = 0;


function Escrev(valoresc){  //função que escreve os valores na tela.
    seila = seila + valoresc
    tela.innerHTML = seila
}
function Limpar(){  //função que limpa a tela.
    tela.innerText = '0'
    seila = "";
    

}

let Tog = document.getElementById("toogle");
let body = document.body;

let Islightning = true;
body.classList.remove('dark');

Tog.addEventListener("click", function(){
    if(Islightning == true){
        body.classList.add('dark');
        Islightning = false;
        this.textContent = "Dark";
    }
    else{
        body.classList.remove('dark');
        Islightning = true;
        this.textContent = "Light";

    }
});
Som.addEventListener("click",function(){
    valor = parseInt(seila); // Converte o valor mostrado na tela de int para inteiro
    Decdeopr = "S";
    Limpar()
});
Sub.addEventListener("click", function(){
     valor = parseInt(seila); // Converte o valor mostrado na tela de int para inteiro
    Decdeopr = "Sub";
    Limpar()
});
Mult.addEventListener("click", function(){
    valor = parseInt(seila);
    Decdeopr = "Mult"
    Limpar()
});
Div.addEventListener("click", function(){
    valor = parseInt(seila);
    Decdeopr = "Div"
    Limpar()
});
Pot.addEventListener("click", function(){
    valor = parseInt(seila)
    Decdeopr = "Pot"
    Limpar()

});
Porcent.addEventListener("click", function(){
    valor = parseInt(seila)
    Decdeopr = "Porc"
    Limpar()

});
rad.addEventListener("click", function(){
    Decdeopr = "Rad"
    if(Decdeopr == "Rad"){
        valor = parseInt(seila)
    Limpar()
 
    resultado = Rad(Racum, valor, valor1);
    Escrev(resultado); 
    }
   
});

Ig.addEventListener("click", function(){
   valor1 = parseInt(seila);
   console.log(Decdeopr);
    if(Racum == 0){  // Caso a variavel Racum (Resultado acumulado) seja igual a zero, ele fara essas instruções. Racum sera igual a zero sempre que o comando limpar for ativado.
        
        
        if(Decdeopr == "S"){

            Limpar();
            resultado = soma(Racum, valor, valor1);
            console.log(valor1, valor, Racum);
            Escrev(resultado);
            Racum = resultado;

        }
        
        if(Decdeopr == "Sub"){
            Limpar();
            resultado = subtracao(Racum, valor, valor1);

            Escrev(resultado);
            Racum = resultado;
        }
        if(Decdeopr == "Mult"){
            Limpar();
            resultado = mult(Racum, valor, valor1);
            Escrev(resultado);
            Racum = resultado;
        }
        if(Decdeopr == "Div"){
            Limpar();
            resultado = div(Racum, valor, valor1);
            Escrev(resultado);
            Racum = resultado;

        }
        if(Decdeopr == "Pot"){
            Limpar();
            resultado = potenc(Racum, valor, valor1);
            Escrev(resultado);
            Racum = resultado;

        }
        if(Decdeopr == "Porc"){
            Limpar();
            resultado = porcent(Racum, valor, valor1);
            Escrev(resultado + "%");
            Racum = resultado;
        }
        if(Decdeopr == "Cl"){
            Limpar()
            resultado = 0;
            Escrev(resultado);
        }

    }
    else{
        
        if(Decdeopr == "S"){

            Limpar();
            resultado = soma(Racum, valor, valor1);
            console.log(valor1, valor, Racum);
            Escrev(resultado);
            Racum = resultado;

        }
        
        if(Decdeopr == "Sub"){
            Limpar();
            resultado = subtracao(Racum, valor, valor1);

            Escrev(resultado);
            Racum = resultado;
        }
        if(Decdeopr == "Mult"){
            Limpar();
            resultado = mult(Racum, valor, valor1);
            Escrev(resultado);
            Racum = resultado;
        }
        if(Decdeopr == "Div"){
            Limpar();
            resultado = div(Racum, valor, valor1);
            Escrev(resultado);
            Racum = resultado;

        }
        if(Decdeopr == "Pot"){
            Limpar();
            resultado = potenc(Racum, valor, valor1);
            Escrev(resultado);
            Racum = resultado;

        }
        if(Decdeopr == "Porc"){
            Limpar();
            resultado = porcent(Racum, valor, valor1);
            Escrev(resultado + "%");
            Racum = resultado;
        }
        if(Decdeopr == "Cl"){
            Limpar()
            resultado = 0;
            Escrev(resultado);
        }
    }
});






U.addEventListener("click", function(){
   Escrev("1");
});
D.addEventListener("click", function(){
   Escrev("2");
});
T.addEventListener("click", function(){
   Escrev("3");
});
Q.addEventListener("click", function(){
   Escrev("4");
});
C.addEventListener("click", function(){
   Escrev("5");
});
S.addEventListener("click", function(){
   Escrev("6");
});
Se.addEventListener("click", function(){
   Escrev("7");
});
O.addEventListener("click", function(){
   Escrev("8");
});
N.addEventListener("click", function(){
   Escrev("9");
});
Z.addEventListener("click", function(){
   Escrev("0");
});
Cl.addEventListener("click", function(){
   Limpar();
   Racum = 0;
   Decdeopr = "Cl";
});

