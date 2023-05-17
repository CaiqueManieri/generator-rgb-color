var mudaCor = document.getElementById('mudaCor');
var texto = document.getElementById('corTexto');

// Gerador de cor aleatoria
function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

var cor = {
    n1:getRandomInt(),
    n2:getRandomInt(),
    n3:getRandomInt(),
}

mudaCor.style.backgroundColor = 'rgb(' + cor.n1 + ',' + cor.n2 + ',' + cor.n3 + ')';
texto.innerHTML = 'rgb(' + cor.n1 + ',' + cor.n2 + ',' + cor.n3 + ')';


function mudar() {
    var cor = {
        n1:getRandomInt(),
        n2:getRandomInt(),
        n3:getRandomInt(),
    }
    mudaCor.style.backgroundColor = 'rgb(' + cor.n1 + ',' + cor.n2 + ',' + cor.n3 + ')';
    texto.innerHTML = 'rgb(' + cor.n1 + ',' + cor.n2 + ',' + cor.n3 + ')';
}

