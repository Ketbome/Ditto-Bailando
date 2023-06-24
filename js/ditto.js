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
    clickme();
  });
});

function generateRandomDittos() {
  var numDittos = 5; // Número de ditos aleatorios
  var dittoContainer = document.getElementById('dance');

  for (var i = 0; i < numDittos; i++) {
    var randomSize = Math.floor(Math.random() * 30) + 5; // Tamaño aleatorio
    var randomSpeed = Math.floor(Math.random() * 15) + 7; // Velocidad aleatoria
    var top = Math.floor(Math.random() * 70); // Posición aleatoria
    var randomDitto = createRandomDitto(randomSize, randomSpeed, top, i);
    
    dittoContainer.appendChild(randomDitto);
  }

}

function createRandomDitto(size, speed, top, i) {
  var randomDitto = document.createElement('img');
  randomDitto.src = 'img/ditto.gif';
  randomDitto.alt = 'Random Ditto';
  randomDitto.style.height = size + '%';
  randomDitto.style.animationDuration = speed + 's';
  randomDitto.style.top = top + '%';
  if( i % 2 == 0){
    randomDitto.classList.add('random-ditto-right');
  }else{
    randomDitto.classList.add('random-ditto-left');
  }

  return randomDitto;
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

// Agregar el evento click para generar un nuevo Ditto
document.addEventListener('click', function() {
  generateNewDitto();
});

function generateNewDitto() {
  var dittoContainer = document.getElementById('dance');

  var randomSize = Math.floor(Math.random() * 30) + 5; // Tamaño aleatorio entre 50 y 300 pixels
  var randomSpeed = Math.floor(Math.random() * 8) + 5; // Velocidad aleatoria entre 5 y 20 segundos
  var top = Math.floor(Math.random() * 70); // Posición aleatoria entre 0 y 70%

  var randomDitto = createRandomDitto(randomSize, randomSpeed, top);

  dittoContainer.appendChild(randomDitto);
}

function clickme() {
  // Crear la imagen
  var cornerImage = document.createElement('img');
  cornerImage.src = "img/click.gif"; // Reemplaza 'ruta-de-la-imagen' con la ruta real de la imagen
  cornerImage.classList.add('corner-image');

  // Agregar la imagen al contenedor
  cornerImageContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar la imagen
  cornerImageContainer.appendChild(cornerImage);

  // Establecer un temporizador para eliminar la imagen después de 5 segundos
  setTimeout(function() {
    cornerImageContainer.innerHTML = ''; // Eliminar la imagen del contenedor
  }, 5000);
}