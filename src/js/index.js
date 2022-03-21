/*
 quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionaddo na linguagem
 
 pra isso vamos precisar trabalhar com dois elementos
 1- listagem
 2-cartão do pokémon

 preciso criar duas variaveis no JS para trabalhar com os elementos da tela
 
 vamos precisar trabalhar com um evento de clique feito pelo o usuaria na listagem do pokémons
 
 -remover a class aberto so do cartao cartao que esta aberto
 -ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar 
 - remover a classe ativa que marca o pokémon selecionado
 -adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variaveis no JS para trabalhar com os elementos da tela
const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo o usuaria na listagem do pokémons
    pokemon.addEventListener('click',() =>{
        //remover a class aberto so do cartao cartao que esta aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
        //ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativa que marca o pokémon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })

})
