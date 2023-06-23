document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('konga-audio');
  audio.controls = false;
});

document.addEventListener('DOMContentLoaded', function() {
  var startButton = document.getElementById('startButton');
  var overlay = document.getElementById('overlay');
  var audio = document.getElementById('konga-audio');

  startButton.addEventListener('click', function() {
    overlay.classList.add('hidden');
    document.body.classList.add('animated-bg');
    audio.play();
    generateRandomDittos();
  });
});

function generateRandomDittos() {
  var numDittos = 10; // Número de ditos aleatorios a generar
  var dittoContainer = document.getElementById('dance-container');

  for (var i = 0; i < numDittos; i++) {
    var randomSize = Math.floor(Math.random() * 80) + 20; // Tamaño aleatorio entre 20 y 100 pixels
    var randomSpeed = Math.floor(Math.random() * 10) + 5; // Velocidad aleatoria entre 5 y 15 segundos

    var randomDitto = document.createElement('img');
    randomDitto.src = 'img/ditto.gif';
    randomDitto.alt = 'Random Ditto';
    randomDitto.classList.add('random-ditto');
    randomDitto.style.width = randomSize + 'px';
    randomDitto.style.height = randomSize + 'px';
    randomDitto.style.animationDuration = randomSpeed + 's';

    dittoContainer.appendChild(randomDitto);
  }
}
