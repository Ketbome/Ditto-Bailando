document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("konga-audio");
  audio.controls = false;
});

const audio = document.getElementById("konga-audio");
audio.volume = 0.3; // Set the volume to 30%

document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("startButton");
  const overlay = document.getElementById("overlay");
  const audio = document.getElementById("konga-audio");

  startButton.addEventListener("click", function () {
    overlay.classList.add("hidden");
    document.body.classList.add("animated-bg");
    audio.play();
    generateRandomDittos();
    setInterval(addCornerImage, 10000);
    clickme();
  });
});

function generateRandomDittos() {
  const numDittos = 5; // Número de ditos aleatorios
  const dittoContainer = document.getElementById("dance");

  for (let i = 0; i < numDittos; i++) {
    const randomSize = Math.floor(Math.random() * 30) + 5; // Tamaño aleatorio
    const randomSpeed = Math.floor(Math.random() * 15) + 7;
    const top = Math.floor(Math.random() * 70);
    const randomDitto = createRandomDitto(randomSize, randomSpeed, top, i);

    dittoContainer.appendChild(randomDitto);
  }
}

function createRandomDitto(size, speed, top, i) {
  let randomDitto = document.createElement("img");
  randomDitto.src = "img/ditto.gif";
  randomDitto.alt = "Random Ditto";
  randomDitto.style.height = size + "%";
  randomDitto.style.animationDuration = speed + "s";
  randomDitto.style.top = top + "%";
  if (i % 2 == 0) {
    randomDitto.classList.add("random-ditto-right");
  } else {
    randomDitto.classList.add("random-ditto-left");
  }

  return randomDitto;
}

function addCornerImage() {
  let cornerImageContainer = document.getElementById("cornerImageContainer");

  let imagePaths = [
    "img/pika.gif",
    "img/squirtle-bailando.gif",
    "img/pokemon-squirtle.gif",
    "img/drake.gif",
    "img/chari.gif",
    "img/ash.gif",
  ];

  let randomIndex = Math.floor(Math.random() * imagePaths.length);
  let selectedImagePath = imagePaths[randomIndex];

  // Crear la imagen
  let cornerImage = document.createElement("img");
  cornerImage.src = selectedImagePath; // Reemplaza 'ruta-de-la-imagen' con la ruta real de la imagen
  cornerImage.classList.add("corner-image");

  // Agregar la imagen al contenedor
  cornerImageContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar la imagen
  cornerImageContainer.appendChild(cornerImage);

  // Establecer un temporizador para eliminar la imagen después de 5 segundos
  setTimeout(function () {
    cornerImageContainer.innerHTML = ""; // Eliminar la imagen del contenedor
  }, 5000);
}

// Agregar el evento click para generar un nuevo Ditto
document.addEventListener("click", function () {
  generateNewDitto();
});

function generateNewDitto() {
  let dittoContainer = document.getElementById("dance");

  let randomSize = Math.floor(Math.random() * 30) + 5; // Tamaño aleatorio entre 50 y 300 pixels
  let randomSpeed = Math.floor(Math.random() * 8) + 5; // Velocidad aleatoria entre 5 y 20 segundos
  let top = Math.floor(Math.random() * 70); // Posición aleatoria entre 0 y 70%

  let randomDitto = createRandomDitto(randomSize, randomSpeed, top);

  dittoContainer.appendChild(randomDitto);
}

function clickme() {
  // Crear la imagen
  let cornerImage = document.createElement("img");
  cornerImage.src = "img/click.gif"; // Reemplaza 'ruta-de-la-imagen' con la ruta real de la imagen
  cornerImage.classList.add("corner-image");

  // Agregar la imagen al contenedor
  cornerImageContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar la imagen
  cornerImageContainer.appendChild(cornerImage);

  // Establecer un temporizador para eliminar la imagen después de 5 segundos
  setTimeout(function () {
    cornerImageContainer.innerHTML = ""; // Eliminar la imagen del contenedor
  }, 5000);
}
