# 🛠️ E5-M4 Ejercicio

## Explorador de Datos de APIs (XHR y Fetch) 🧑‍🚀

### Objetivo:

Conectar una página web a una API externa para obtener datos en tiempo real y mostrarlos al usuario. Aplicarás y compararás los dos métodos principales para realizar solicitudes HTTP en JavaScript: el objeto `XMLHttpRequest` (XHR) y la moderna `Fetch API`.

### Actividad:

Crearás una pequeña aplicación que consume datos de la API pública y gratuita **JSONPlaceholder**, que simula una base de datos de usuarios. Implementarás la misma funcionalidad dos veces para poder comparar las tecnologías.

### Estructura Inicial

Este HTML te proporciona los botones y los contenedores necesarios para mostrar los resultados.

**HTML (`index.html`)**

```HTML
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consumo de APIs</title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: auto; padding: 20px; }
        .container { border: 1px solid #ccc; padding: 20px; margin-top: 20px; min-height: 100px; }
        button { padding: 10px; margin-right: 10px; cursor: pointer; }
        ul { list-style: none; padding: 0; }
        li { background-color: #f4f4f4; margin-bottom: 10px; padding: 15px; border-radius: 5px; }
        h4, p { margin: 0; }
    </style>
</head>
<body>
    <h1>Explorador de Usuarios</h1>
    <button id="cargar-xhr">Cargar Usuarios (XHR)</button>
    <button id="cargar-fetch">Cargar Usuarios (Fetch)</button>

    <div id="resultado" class="container">
        </div>

    <script src="app.js"></script>

</body>
</html>
```

### Instrucciones de JavaScript (`app.js`):

#### Parte 1: Realizando Requests con `XMLHttpRequest` (El método clásico)

1. **Selecciona los Elementos**: Obtén el botón `cargar-xhr` y el `div` de resultado.

2. **Añade un Event Listener**: Escucha el evento `click` en el botón.

3. **Lógica de la Solicitud XHR**: Dentro del listener del evento:

- Crea una nueva instancia de `XMLHttpRequest`: `const xhr = new XMLHttpRequest();`.

- Configura la solicitud con el método `open()`: `xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);`.

- Define qué hacer cuando la data se reciba exitosamente con el evento `onload`. Dentro de esta función:

  - Verifica que el estado de la respuesta sea 200 (`this.status === 200`).
  - Convierte la respuesta de texto (JSON) a un objeto JavaScript con `JSON.parse(this.responseText)`.
  - Llama a una función (que crearás) para renderizar los usuarios en el HTML.

- Define qué hacer en caso de error con el evento `onError`.

- Envía la solicitud con `xhr.send()`.

#### Parte 2: Realizando Requests con Fetch API (El método moderno)

1. **Selecciona los Elementos**: Obtén el botón `cargar-fetch`.

2. **Añade un Event Listener**: Escucha el evento `click` en este botón.

3. **Lógica de la Solicitud Fetch**: Dentro del listener del evento:

- Llama a `fetch('https://jsonplaceholder.typicode.com/users')`.

- Encadena un primer `.then()` para manejar la respuesta. Verifica si la respuesta es correcta (`response.ok`) y luego retorna la respuesta convertida a JSON: `response.json()`.

- Encadena un segundo `.then()` que recibirá la data ya parseada. Pasa esta data a la misma función que usaste en la Parte 1 para renderizar los usuarios.

- Encadena un `.catch()` al final para capturar cualquier error de red e imprimirlo en la consola.

#### Función para Renderizar (Común para ambas partes)

- Crea una función, por ejemplo `renderizarUsuarios(usuarios)`, que reciba el array de usuarios.

- Esta función debe limpiar el contenido previo del `div` de resultado.

- Luego, debe iterar sobre el array y, por cada usuario, crear una estructura HTML (ej: un `<li>` con el nombre y el email) y añadirla al `div`.

#### Parte 3 (Opcional - Bonus): Consumiendo una API con API Key

Para un desafío extra, vamos a obtener un GIF de la API de `Giphy`.

1. **Obtén una API Key**: Ve a Giphy for Developers y crea una cuenta para obtener una clave de API gratuita.

2. **Modifica el HTML**: Añade un campo de texto (`<input>`) y un botón para buscar GIFs.

3. **Usa Fetch para Buscar**: Cuando el usuario haga `click` en el botón de búsqueda:

- Construye la URL de la API de Giphy, incluyendo tu _API Key_ y el término de búsqueda del `input`. El endpoint es `https://api.giphy.com/v1/gifs/search`.

- Realiza la llamada con `fetch`.

- Procesa la respuesta JSON. La data de los GIFs se encuentra en `data.data`.

- Toma la URL del primer GIF (`data.data[0].images.original.url`) y úsala para crear una etiqueta `<img>` y mostrarla en la página.

### Conceptos a Aplicar:

- **API y AJAX**: Entender el concepto de solicitar datos de forma asíncrona.

- **`XMLHttpRequest`**: Creación, configuración (`open`, `onload`, `onerror`) y envío (`send`) de solicitudes.

- **`Fetch API`**: Uso de `fetch()`, `Promise`, y los métodos `.then()`, `.catch()` y `.json()`.

- **JSON**: `JSON.parse()` para convertir texto a objeto.

- **API de Terceros**: Conexión a un servicio externo.

- **API Keys**: Autenticación básica en una solicitud.

- **DOM Manipulation**: Crear y añadir elementos al HTML para mostrar los datos.

### Entrega:

El trabajo deberá ser entregado a través de un **[repositorio público](https://github.com/Cuackzoide/E5_M4-Explorador_apis) en GitHub** que contenga los archivos (`index.html` y `app.js`).
