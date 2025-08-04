'use strict'

const botaoMostrarImagem = document.getElementById('imagem')
const botaoMostrarImagemAuto = document.getElementById('auto')

function mostrarImagem() {
    document.documentElement.style.setProperty('--bg-animation', 'none')
    const imagem = document.getElementById('cidade').value
    document.documentElement.style.setProperty('--bg-image', ('url(./img/' + imagem + '.jpg)'))
}

function mostrarImagemAuto() {
    document.documentElement.style.setProperty('--bg-animation', 'slider 20s infinite, fade 4s')
}

botaoMostrarImagem.addEventListener('click', mostrarImagem)
botaoMostrarImagemAuto.addEventListener('click', mostrarImagemAuto)