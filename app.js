const botonXHR = document.getElementById("cargar-xhr");
const botonFetch = document.getElementById("cargar-fetch");
const resultado = document.getElementById("resultado");

function renderizarUsuarios(usuarios) {
  resultado.innerHTML = "";
  const respuesta = usuarios;
  const lista = document.createElement("ul");
  respuesta.forEach((element) => {
    lista.innerHTML += `<li>${element.name}</li>`;
  });
  resultado.appendChild(lista);
}

// Parte 1 : XHR
botonXHR.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      renderizarUsuarios(data);
    } else {
      console.error(`Error HTTP: ${this.status}`);
    }
  };
  xhr.onerror = () => {
    console.error("Error de red o conexión.");
  };
  xhr.send();
});

// Parte 2 : Fetch

botonFetch.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      renderizarUsuarios(data);
    })
    .catch((error) => {
      console.error("Error de red o conexión:", error);
    });
});

// Bonus Giphy API
function renderGiphy(data) {
  imgContainer.innerHTML = "";
  const lista = document.createElement("ul");
  data.forEach((el) => {
    lista.innerHTML += `
    <li>
    <img src="${el.images.fixed_height_small.url}" alt="${el.title}">
    </li>`;
    imgContainer.appendChild(lista);
  });
}
async function getGifs(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en la petición");
    const { data } = await response.json();
    console.log(data);
    renderGiphy(data);
  } catch (error) {
    console.error(error);
  }
}
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const imgContainer = document.querySelector("#giphy");
const searchRange = document.getElementById("search-range");
const rangeValue = document.getElementById("range-value");
const API_KEY = "cvoIJpGxhS1HOeRr5qZXAAsGiP9gaRyn";
const ENDPOINT = "https://api.giphy.com/v1/gifs/search";

searchInput.addEventListener("focus", () => {
  searchInput.value = "";
});

searchRange.addEventListener("input", () => {
  rangeValue.textContent = searchRange.value;
});

searchButton.addEventListener("click", () => {
  if (!searchInput.value) {
    imgContainer.innerHTML = `<p>Debes ingresar una busqueda!</p>`;
    searchInput.focus();
  } else {
    const URL = `${ENDPOINT}?api_key=${API_KEY}&q=${searchInput.value}&limit=${searchRange.value}`;
    getGifs(URL);
  }
});
