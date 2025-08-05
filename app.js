'use strict'

const botaoMostrarImagem = document.getElementById('imagem')
const botaoMostrarImagemAuto = document.getElementById('auto')

function mostrarImagem() {
    document.documentElement.style.setProperty('--bg-animation', 'none')
    const imagem = document.getElementById('cidade').value
    
    if(!isNaN(imagem)){
        const cidades = [
            'url(./img/barueri.jpg)',
            'url(./img/carapicuiba.jpg)',
            'url(./img/cotia.jpg)',
            'url(./img/itapevi.jpg)',
            'url(./img/jandira.jpg)'
        ]

        document.documentElement.style.setProperty('--bg-image', (cidades[imagem - 1]))

    }else{
        document.documentElement.style.setProperty('--bg-image', ('url(./img/' + imagem + '.jpg)'))
    }

}

function mostrarImagemAuto() {
    document.documentElement.style.setProperty('--bg-animation', 'slider 20s infinite, fade 4s')
}

botaoMostrarImagem.addEventListener('click', mostrarImagem)
botaoMostrarImagemAuto.addEventListener('click', mostrarImagemAuto)