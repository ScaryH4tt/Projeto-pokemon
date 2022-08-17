const botaoAvancar = document.getElementById('botaoAvancar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}
function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
}

botaoAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length -1) return;
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});
const botaoVoltar = document.getElementById('botaoVoltar');
botaoVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});