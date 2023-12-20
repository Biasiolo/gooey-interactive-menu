$(document).ready(function () {
    // Crie os pontos luminosos com ícones de formigas
    createAntDots();

    // Animação constante dos pontos
    animateBubbles();
});

function createAntDots() {
    // Crie um contêiner para os pontos
    var dotsContainer = $("<div>").addClass("dots-container").appendTo(".div-container");

    // Número de pontos
    var numberOfDots = 50;

    for (var i = 0; i < numberOfDots; i++) {
        var dot = $("<div>").addClass("dot").appendTo(dotsContainer);

        // Inicie cada ponto com posição centralizada e opacidade aleatórias
        dot.css({
            left: window.innerWidth * 0.25 + Math.random() * window.innerWidth * 0.5,
            top: window.innerHeight * 0.1 + Math.random() * (window.innerHeight * 0.6),
            opacity: Math.random(),
        });
    }
}

function animateBubbles() {
    var allowedAreaX = {
        min: window.innerWidth * 0.25,
        max: window.innerWidth * 0.75,
    };
    var allowedAreaY = {
        min: window.innerHeight * 0.1,
        max: window.innerHeight * 0.7,
    };

    $(".dot").each(function (index) {
        var dot = $(this);

        // Animação de movimento aleatório dentro da área central
        var randomX = allowedAreaX.min + Math.random() * (allowedAreaX.max - allowedAreaX.min);
        var randomY = allowedAreaY.min + Math.random() * (allowedAreaY.max - allowedAreaY.min);

        dot.animate(
            {
                left: randomX,
                top: randomY,
                opacity: Math.random(),
            },
            Math.random() * 8000 + 2000, // Tempo de animação entre 1 e 4 segundos
            function () {
                // Chama a animação novamente
                animateBubbles();
            }
        );
    });
}
