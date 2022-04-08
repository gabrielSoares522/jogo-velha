var vez_do_x = true;
var ganhou = false;

mudarJogador();

function selecionarPosicao(element){
    if(element.innerHTML == "-" && ganhou == false){
        element.style.color = "black";
        if(vez_do_x){
            element.innerHTML = "X";
            mudarJogador();
        } else {
            element.innerHTML = "O";
            mudarJogador();
        }
        checarSeGanhou();
    }
}

function mudarJogador(){
    let mensagem = document.getElementById("mensagem");
    if(!vez_do_x){
        vez_do_x = true;
        mensagem.innerHTML = "Jogador: X";
    } else {
        mensagem.innerHTML = "Jogador: O";
        vez_do_x = false;
    }
}

function recomecar(){
    ganhou = false;
    let posicoes = document.getElementsByClassName("posicao");
    for(let i = 0; i < posicoes.length; i++){
        posicoes[i].innerHTML = "-";
        posicoes[i].style.color = "#cfc0c0";
        posicoes[i].style.backgroundColor = "#cfc0c0";
    }
    let vencedor = document.getElementById("vencedor");
    vencedor.innerHTML = "Vencedor: ";
    mudarJogador();
}

function checarSeGanhou(){
    let posicoes = document.getElementsByClassName("posicao");
    const retas = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

    for(let i = 0; i < retas.length; i++){
       let figura = (!vez_do_x) ? "X" : "O"; 
        if(posicoes[retas[i][0]].innerHTML == figura && posicoes[retas[i][1]].innerHTML == figura && posicoes[retas[i][2]].innerHTML == figura){
            ganhou = true;
            posicoes[retas[i][0]].style.backgroundColor = "#00fd43";
            posicoes[retas[i][1]].style.backgroundColor = "#00fd43";
            posicoes[retas[i][2]].style.backgroundColor = "#00fd43";
            let vencedor = document.getElementById("vencedor");
            vencedor.innerHTML = "Vencedor: " + figura;
        }
    }
}