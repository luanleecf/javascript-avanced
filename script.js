// document.getElementById('')
// document.getElementsByClassName('')
// document.getElementsByTagName('')
// document.getElementsByName('')

function trocar() {
    if (document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');

    }
}


function trocarImagem(fileName, animalName) {
    document.querySelector('.imagem').setAttribute('src', 'imagens/' + fileName); //altera atributos
    document.querySelector('.imagem').setAttribute('data-animal', animalName);
}

function pegarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal'); //pega atributos

    alert('O animal é: ' + animal);
}

document.querySelector('.texto').offsetWidth //vai considerar tudo, scrol, padding, borda, largura...

document.querySelector('.texto').clientHeight // exclui o scrolbar e pega apenas a dimensão do conteúdo e o padding

document.querySelector('.texto').scrollHeight // pega o conteudo total 

function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function decidirBotaoScroll() {
    if (window.scrollY === 0) {
        document.querySelector('.scrollbutton').style.display = 'none'
    } else {
        document.querySelector('.scrollbutton').style.display = 'block'
    }
}

window.addEventListener('scroll', decidirBotaoScroll);