/*
 OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartão da lista.
 * passo 1 - pegar o elemento HTML da seta avançar.
 * passo 2 - identificar o cliente do usuário na seta avançar.
 * passo 3 - fazer aparecer o próximo cartão da lista.
 * passo 4 - buscar o cartão que está selecionado e esconder
 * 
 OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o proximo cartão da lista.
 * passo 1 - pegar o elemento HTML da seta voltar.
 * passo 2 - identificar o cliente do usuário na seta voltar.
 * passo 3 - fazer aparecer o próximo cartão da lista.
 * passo 4 - buscar o cartão que está selecionado e esconder
*/

//* passo 1 - pegar o elemento HTML da seta avançar.
const btnAvancar = document.getElementById('btn-avancar') 
const btnVoltar = document.getElementById('btn-voltar') 
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0

function esconderCartaoSelecionado(){
//* passo 4 - buscar o cartão que está selecionado e esconder  
const cartaoSelecionado = document.querySelector('.selecionado')
cartaoSelecionado.classList.remove('selecionado')
}


//* passo 2 - identificar o cliente do usuário na seta avançar.
btnAvancar.addEventListener('click', function (){
    if(cartaoAtual === cartoes.length - 1) return

esconderCartaoSelecionado()

//* passo 3 - fazer aparecer o próximo cartão da lista.
    cartaoAtual++
    cartoes[cartaoAtual].classList.add('selecionado')
})

//* passo 2 - identificar o cliente do usuário na seta avançar.
btnVoltar.addEventListener('click', function (){
    if(cartaoAtual === 0) return
    
//* passo 4 - buscar o cartão que está selecionado e esconder  
esconderCartaoSelecionado()

//* passo 3 - fazer aparecer o próximo cartão da lista.
    cartaoAtual--
    cartoes[cartaoAtual].classList.add('selecionado')


})
