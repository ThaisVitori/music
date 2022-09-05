var value;
var botao = document.getElementById("button");

botao.addEventListener("click",redirect,false);

function redirect(){
    var input = document.getElementById("busca").value;
    if(input=="Baby-Justin-Bieber"){
        window.location.href = "./musica1.html";
    }
    
}
