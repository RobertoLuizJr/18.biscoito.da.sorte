

const fortunes = [
    'Não olhe para o que você não tem. Olhe, agradeça e faça alguma coisa - para as outras pessoas e para o reino - com o que Deus já te deu!!!',
    'Deus - por vezes - "faz" com que você fique sozinho para que não hajam interferências na comunicação Dele com você. Essa tempestade vai passar! Pra já, só se preocupe em ouvi-Lo e corresponder com Ele',
    'Não murmure!!! Apresente suas questões a Deus, CONFIE e tenha certeza que Ele pode fazer! O que for submetido a Ele e estiver de acordo com o que o nosso Pai quer de nós certamente se concretizará. Enquanto espera, abençoe outros, bendiga os seus projetos e declare sua vitória. E o fundamental: em todos os momentos valorize a Presença de Deus ao invés de apenas os Seus benefícios. ',
    'De tudo o que na vida eu ainda quero fazer, antes eu quero seguir a Deus!',
    'Façamos o que é certo, do jeito certo, com a motivação certa e com a mais profunda sinceridade de coração. Desta forma Deus se agradará de nós!',
    'Queiram se apresentar à Deus - através de seus procedimentos - como filhos e não como réus!',
    'Deus é um estrategista e tem a visão muito mais ampla que nós! Não o questione baseado no pouco que você vê!',
    'A língua tem poder sobre a vida e sobre a morte; os que gostam de usá-la comerão do seu fruto. As palavras NAO tem poder, MAS aquilo que se fala crendo no coração tem peso no mundo espiritual!',
    'Princípios quebrados te quebrarão ',
    'Esqueça o passado! Entenda que há um presente em Deus pra ser vivido hoje. E que o futuro está nas mãos Dele!',
    'Nossa felicidade não tem que estar condicionada à situações favoráveis, mas simplesmente a presença de Deus em nossas vida;',
    'Deus nao afasta os problemas de você. Ele te dá graça para passar por cima dos problemas e aprender com eles;',
    'Há um tempo em que é preciso abandonar as roupas usadas, que já tem a forma do nosso corpo, e esquecer os nossos caminhos, que nos levam sempre aos mesmos lugares. É o tempo da travessia: e, se não ousarmos fazê-la, teremos ficado, para sempre, à margem de nós mesmos.',
    'Nao saia do lugar onde deus te colocou!',
    'Deus não responde necessidade. Responde fé;',
    'Deus revela os seus planos a medida em que o obedecemos. Ele não promove ao próximo nível quem não está sendo fiel as instruções já repassadas!',
    'Mire a grandeza do Reino e não a mentalidade do mundo',
    'O poder e a grandeza de Deus vai se manifestar na vida dos que tem um coração que confia integralmente nele!',
    'Nosso compromisso com Deus tem que ser maior que nossa vontade'
];


let clickOnImage = document.querySelector("#closedCookie");
let clickOnButton = document.querySelector('#newTry');
let fortuneText = document.querySelector("#fortuneText");
let cookieContainer = document.querySelector(".fortune-cookie");
let messageContainer = document.querySelector(".fortune-message");

let randomIndex = Math.floor(Math.random() * fortunes.length);

function generateFortuneText () {
    cookieContainer.classList.add("hide");
    messageContainer.classList.remove("hide");

    // Define o texto da sorte no elemento fortuneText
    fortuneText.textContent = fortunes[randomIndex];
    //document.querySelector(`fortuneText`).innerText = `${fortunes[randomIndex]}`
}

// Função para reiniciar o biscoito da sorte
function resetFortuneCookie() {
    cookieContainer.classList.remove("hide");
    messageContainer.classList.add("hide");

    randomIndex = Math.floor(Math.random() * fortunes.length)
}

// Adiciona o ouvinte de evento click ao elemento closedCookie
if (clickOnImage) {
    clickOnImage.addEventListener('click', generateFortuneText);
}

// Adiciona o ouvinte de evento click ao botão para abrir outro biscoito
if (clickOnButton) {
    clickOnButton.addEventListener('click', resetFortuneCookie);


}

// Adiciona o ouvinte de evento keydown ao documento para detectar a tecla Enter
function pressEnterKey(event) {
    if (event.key === 'Enter') {
        // Verifica qual container está visível
        if (cookieContainer.classList.contains("hide")) {
            resetFortuneCookie();
        } else {
            generateFortuneText();
        }
    }
}

document.addEventListener('keydown', pressEnterKey);
