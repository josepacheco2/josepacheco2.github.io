// Función para calcular distancia
function calcularDistancia() {
    let velocidad = parseFloat(document.getElementById('velocidad').value);
    let tiempo = parseFloat(document.getElementById('tiempo').value);
    if (isNaN(velocidad) || isNaN(tiempo)) {
        alert('Por favor ingrese valores válidos.');
        return;
    }
    let distancia = velocidad * tiempo;
    document.getElementById('distancia').innerText = `: ${distancia.toFixed(2)} m`;
}

// Función para calcular velocidad
function calcularVelocidad() {
    let distancia = parseFloat(document.getElementById('distancia-velocidad').value);
    let tiempo = parseFloat(document.getElementById('tiempo-velocidad').value);
    if (isNaN(distancia) || isNaN(tiempo)) {
        alert('Por favor ingrese valores válidos.');
        return;
    }
    let velocidad = distancia / tiempo;
    document.getElementById('velocidad-resultado').innerText = `Velocidad: ${velocidad.toFixed(2)} m/s`;
}

// Función para calcular tiempo
function calcularTiempo() {
    let distancia = parseFloat(document.getElementById('distancia-tiempo').value);
    let velocidad = parseFloat(document.getElementById('velocidad-tiempo').value);
    if (isNaN(distancia) || isNaN(velocidad)) {
        alert('Por favor ingrese valores válidos.');
        return;
    }
    let tiempo = distancia / velocidad;
    document.getElementById('tiempo-resultado').innerText = `Tiempo: ${tiempo.toFixed(2)} s`;
}



