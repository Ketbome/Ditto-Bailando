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
    setInterval(addCornerImage, 10000);
  });
});

function generateRandomDittos() {
  var numDittos = 14; // Número de ditos aleatorios a generar en cada dirección
  var dittoContainer = document.getElementById('dance');
  var isRightDirection = true;

  for (var i = 0; i < numDittos; i++) {
    var randomSize = Math.floor(Math.random() * 30) + 5; // Tamaño aleatorio entre 50 y 300 pixels
    var randomSpeed = Math.floor(Math.random() * 15) + 7; // Velocidad aleatoria entre 5 y 20 segundos
    var top = Math.floor(Math.random() * 70); // Posición aleatoria entre 0 y 70%

    if (i % 2 == 0){
      var randomDittoRight = createRandomDittoright(randomSize, randomSpeed, top);
      dittoContainer.appendChild(randomDittoRight);
    }else{
      var randomDittoLeft = createRandomDittoleft(randomSize, randomSpeed, top);
      dittoContainer.appendChild(randomDittoLeft);
    }

    
    isRightDirection = !isRightDirection;
  }

}

function createRandomDittoright(size, speed, top) {
  var randomDitto = document.createElement('img');
  randomDitto.src = 'img/ditto.gif';
  randomDitto.alt = 'Random Ditto';
  randomDitto.classList.add('random-ditto-right');
  randomDitto.style.height = size + '%';
  randomDitto.style.animationDuration = speed + 's';
  randomDitto.style.top = top + '%';

  randomDitto.addEventListener('animationend', function() {
    dittoContainer.removeChild(this);
    generateNewDittoright();
  });

  return randomDitto;
}

function createRandomDittoleft(size, speed, top) {
  var randomDitto = document.createElement('img');
  randomDitto.src = 'img/ditto.gif';
  randomDitto.alt = 'Random Ditto';
  randomDitto.classList.add('random-ditto-left');
  randomDitto.style.height = size + '%';
  randomDitto.style.animationDuration = speed + 's';
  randomDitto.style.top = top + '%';

  randomDitto.addEventListener('animationend', function() {
    dittoContainer.removeChild(this);
    generateNewDittoleft();
  });

  return randomDitto;
}

function generateNewDittoright() {
  var dittoContainer = document.getElementById('dance');

  var randomSize = Math.floor(Math.random() * 250) + 50; // Tamaño aleatorio entre 50 y 300 pixels
  var randomSpeed = Math.floor(Math.random() * 15) + 5; // Velocidad aleatoria entre 5 y 20 segundos
  var top = Math.floor(Math.random() * 70); // Posición aleatoria entre 0 y 70%

  var randomDitto = createRandomDitto(randomSize, randomSpeed, top);

  dittoContainer.appendChild(randomDitto);
}

function generateNewDittoleft() {
  var dittoContainer = document.getElementById('dance');

  var randomSize = Math.floor(Math.random() * 30) + 5; // Tamaño aleatorio entre 50 y 300 pixels
  var randomSpeed = Math.floor(Math.random() * 8) + 5; // Velocidad aleatoria entre 5 y 20 segundos
  var top = Math.floor(Math.random() * 70); // Posición aleatoria entre 0 y 70%

  var randomDitto = createRandomDittoleft(randomSize, randomSpeed, top);

  dittoContainer.appendChild(randomDitto);
}

function addCornerImage() {
  var cornerImageContainer = document.getElementById('cornerImageContainer');

  var imagePaths = [
    'img/pika.gif',
    'img/squirtle-bailando.gif',
    'img/pokemon-squirtle.gif',
    'img/drake.gif',
    'img/chari.gif',
    'img/ash.gif'
  ];

  var randomIndex = Math.floor(Math.random() * imagePaths.length);
  var selectedImagePath = imagePaths[randomIndex];

  // Crear la imagen
  var cornerImage = document.createElement('img');
  cornerImage.src = selectedImagePath; // Reemplaza 'ruta-de-la-imagen' con la ruta real de la imagen
  cornerImage.classList.add('corner-image');

  // Agregar la imagen al contenedor
  cornerImageContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la imagen
  cornerImageContainer.appendChild(cornerImage);

  // Establecer un temporizador para eliminar la imagen después de 5 segundos
  setTimeout(function() {
    cornerImageContainer.innerHTML = ''; // Eliminar la imagen del contenedor
  }, 5000);
}