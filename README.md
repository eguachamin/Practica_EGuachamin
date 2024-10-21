# DOM Y ASINCRONISMO
## Authors
- [@eguachamin](https://github.com/eguachamin)
// Función para abrir una ventana emergente que simula el inicio de sesión en Spotify
async function iniciarSesion() {
    const spotifyLoginUrl = 'https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es'; // URL de la página de inicio de sesión de Spotify
    window.open(spotifyLoginUrl, '_blank', 'width=500,height=700');

    // Llama a la función para cargar las canciones simuladas después de "iniciar sesión"
    await cargarCancionesSimuladas();
}
![image](https://github.com/user-attachments/assets/79d43cff-2022-4fd6-be13-3895165ea82f)
![image](https://github.com/user-attachments/assets/a306072d-d682-4cc3-817c-1c097d2d13fe)
// Simulamos algunas canciones como si vinieran de la API de Spotify
const cancionesSimuladas = [
    { id: 1, name: 'Focus', artist: 'Ariana Grande' },
    { id: 2, name: 'Tú y Yo', artist: 'Thalia' },
    { id: 3, name: 'Bad Liar', artist: 'Selena Gomez' },
    { id: 4, name: '200 Copas', artist: 'Karol G' }
];

// Función para cargar canciones simuladas
async function cargarCancionesSimuladas() {
    // Simulación de una llamada a fetch (aunque aquí no hay una URL real)
    return new Promise((resolve) => {
        setTimeout(() => {
            const listaCanciones = document.getElementById('lista-canciones');
            listaCanciones.innerHTML = ''; // Limpiamos la lista anterior

            cancionesSimuladas.forEach(cancion => {
                const cancionDiv = document.createElement('div');
                cancionDiv.classList.add('cancion');
                cancionDiv.textContent = `${cancion.name} - ${cancion.artist}`;
                cancionDiv.dataset.id = cancion.id;
![image](https://github.com/user-attachments/assets/819c7af2-a47c-4a7d-8373-3a01e17ce056)

                cancionDiv.addEventListener('click', () => seleccionarCancion(cancion));
                listaCanciones.appendChild(cancionDiv);
            });

            document.getElementById('iniciar-sesion').style.display = 'none'; // Ocultamos el botón de iniciar sesión
            document.getElementById('cargar-canciones').style.display = 'inline-block'; // Mostramos el botón para cargar canciones
            document.querySelector('.botones-reproduccion').style.display = 'block'; // Mostramos los botones de reproducción/pausa
            
            resolve(); // Resolvemos la promesa
        }, 5000); // Simulamos un breve retraso después del inicio de sesión
    });
}
![image](https://github.com/user-attachments/assets/04ebbc3b-6dfa-43b7-9d31-20bb57c038c1)

// Función para mostrar la canción seleccionada
function seleccionarCancion(cancion) {
    const cancionActual = document.getElementById('cancion-actual');
    cancionActual.textContent = `Reproduciendo: ${cancion.name} - ${cancion.artist}`;
    cancionActual.dataset.id = cancion.id;
}

// Función para simular reproducción
function reproducirCancion() {
    const cancionActual = document.getElementById('cancion-actual');
    if (cancionActual.dataset.id) {
        cancionActual.textContent += ' (Reproduciendo)';
    } else {
        alert('Selecciona una canción primero.');
    }
}

// Función para simular pausa
function pausarCancion() {
    const cancionActual = document.getElementById('cancion-actual');
    if (cancionActual.dataset.id && cancionActual.textContent.includes('(Reproduciendo)')) {
        cancionActual.textContent = cancionActual.textContent.replace(' (Reproduciendo)', ' (Pausado)');
    }
}

// Asociar eventos a los botones
document.getElementById('iniciar-sesion').addEventListener('click', iniciarSesion);
document.getElementById('cargar-canciones').addEventListener('click', cargarCancionesSimuladas);
document.getElementById('reproducir').addEventListener('click', reproducirCancion);
document.getElementById('pausar').addEventListener('click', pausarCancion);
