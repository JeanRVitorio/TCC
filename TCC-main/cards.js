//onde vai ser inserido os cartoes
let cards = document.querySelector('.cards');

// fetch(buscar) faz a busca no arquivo json
fetch('roupas.json')
// entao (then), com a resposta do fetch com a arrow function 
.then(resposta => resposta.json())
.then(dados => dados.forEach((elemento, indice) => {
    //console.log(elemento)

    // criar card padrao
    let card = document.createElement('div')
    card.classList.add('card')
    console.log('card')

    //colocar cada card da div cartoes
    cards.appendChild(card)

    //preencher os dados dos produtos
    card.innerHTML = `
    <img src="" alt="" class="card_img" />
    <h3 class="card nome">${clothes}</h3>
    <h2 class="descricao">${roupas.description}</h2>
    <span class="tamanho">${roupas.size}</span>
    <h3 class="valor">${roupas.value}</h3>
    `

}))





/*
card
card_img
card-title
card-text
card_tam
card_valor */