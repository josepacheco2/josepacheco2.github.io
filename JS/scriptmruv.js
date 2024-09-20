// Calcular Posición: x = v₀t + 0.5 * a * t²
function calcularPosicion() {
    const v0 = parseFloat(document.getElementById('velocidad-inicial-posicion').value);
    const a = parseFloat(document.getElementById('aceleracion-posicion').value);
    const t = parseFloat(document.getElementById('tiempo-posicion').value);
    
    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const x = (v0 * t) + (0.5 * a * Math.pow(t, 2));
        document.getElementById('posicion-resultado').innerText = x.toFixed(2) + ' m';
    } else {
        document.getElementById('posicion-resultado').innerText = '-- m';
    }
}

// Calcular Velocidad Final: v = v₀ + a * t
function calcularVelocidadFinal() {
    const v0 = parseFloat(document.getElementById('velocidad-inicial-velocidad-final').value);
    const a = parseFloat(document.getElementById('aceleracion-velocidad-final').value);
    const t = parseFloat(document.getElementById('tiempo-velocidad-final').value);

    if (!isNaN(v0) && !isNaN(a) && !isNaN(t)) {
        const v = v0 + (a * t);
        document.getElementById('velocidad-final-resultado').innerText = v.toFixed(2) + ' m/s';
    } else {
        document.getElementById('velocidad-final-resultado').innerText = '-- m/s';
    }
}

// Calcular Distancia: x = v₀ * t + 0.5 * a * t²
function calcularDistancia() {
    const v0 = parseFloat(document.getElementById('velocidad-inicial-distancia').value);
    const t = parseFloat(document.getElementById('tiempo-distancia').value);
    const a = parseFloat(document.getElementById('aceleracion-distancia').value);

    if (!isNaN(v0) && !isNaN(t) && !isNaN(a)) {
        const x = (v0 * t) + (0.5 * a * Math.pow(t, 2));
        document.getElementById('distancia-resultado').innerText = x.toFixed(2) + ' m';
    } else {
        document.getElementById('distancia-resultado').innerText = '-- m';
    }
}
