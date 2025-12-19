const botonXHR = document.getElementById("cargar-xhr");
const botonFetch = document.getElementById("cargar-fetch");
const resultado = document.getElementById("resultado");

function renderizarUsuarios(usuarios) {
  resultado.innerHTML = "";
  const respuesta = JSON.parse(usuarios);
  const lista = document.createElement("ul");
  respuesta.forEach((element) => {
    lista.innerHTML += `<li>${element.name}</li>`;
  });
  resultado.appendChild(lista);
}

// Parte 1 : XHR
botonXHR.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    if (this.status === 200) {
      renderizarUsuarios(this.responseText);
      resultado.appendChild(lista);
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
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      renderizarUsuarios(data);
      resultado.appendChild(lista);
    })
    .catch((error) => {
      console.error("Error de red o conexión:", error);
    });
});
