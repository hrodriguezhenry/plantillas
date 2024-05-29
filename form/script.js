document.addEventListener('DOMContentLoaded', function () {
    const inputFecha = document.getElementById('fecha');

    // Lista de días deshabilitados (en formato 'YYYY-MM-DD')
    const diasDeshabilitados = ['2024-06-01', '2024-06-15', '2024-06-20'];

    // Función para deshabilitar días específicos
    inputFecha.addEventListener('input', function () {
        const selectedDate = inputFecha.value;

        if (diasDeshabilitados.includes(selectedDate)) {
            alert('Esta fecha no está disponible para selección.');
            inputFecha.value = '';  // Borra la selección no permitida
        }
    });
});
