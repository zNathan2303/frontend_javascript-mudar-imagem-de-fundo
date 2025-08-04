'use strict'

const botaoMostrarImagem = document.getElementById('imagem')
const botaoGerarImagemAuto = document.getElementById('auto')

function mostrarImagem() {
    const imagem = document.getElementById('cidade').value
    document.documentElement.style.setProperty('--bg-image', ('url(./img/' + imagem + '.jpg)'))
}

function gerarImagemAuto() {
    const cidades = [
        'url(./img/barueri.jpg)',
        'url(./img/carapicuiba.jpg)',
        'url(./img/cotia.jpg)',
        'url(./img/itapevi.jpg)',
        'url(./img/jandira.jpg)'
    ]

    const randomIndex = Math.floor(Math.random() * cidades.length)
    document.documentElement.style.setProperty('--bg-image', cidades[randomIndex])
}

botaoMostrarImagem.addEventListener('click', mostrarImagem)
botaoGerarImagemAuto.addEventListener('click', gerarImagemAuto)