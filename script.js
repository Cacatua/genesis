let order = [];
let clickedOrder = [];
let score = 0;

/**
 * 0 - Green
 * 1 - Red
 * 2 - Yellow
 * 3 - Blue
 */

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

/**
 * Cria ordem aleatória de cores
 */
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

/**
 * Acende a próxima cor
 */
let lightColor = (elementColor, number) => {
    number = number * 500
    setTimeout(() => {
        elementColor.classList.add('selected');
    }, number - 250 );
    setTimeout(() => {
        elementColor.classList.remove('selected');
    })
}

/**
 * Checa se os botões clicados são os mesmos da ordem gerada no jogo
 */
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniando próximo nível`)
        nextLevel();
    }
}

/**
 * Função para o clique do usuário
 */
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    })

    checkOrder();
}

/**
 * Função que retorna a cor
 */
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}

/**
 * Função para próximo nivel do jogo
 */
let nextLevel = () => {
    score++;
    shuffleOrder();
}

/**
 * Função para game over
 */
let gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

/**
 * Função para iniciar o jogo
 */
let playGame = () => {
    alert('Bem vindo Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();