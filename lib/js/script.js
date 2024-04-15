function chequearVacios() {
    var nombre = document.getElementById('nombre').value;
    var nacion = document.getElementById('nacion').value;
    var radiosi = (document.getElementById('si').checked);
    var radiono = (document.getElementById('no').checked);
    var select = document.getElementById('select').value;
    var correo = document.getElementById('correo').value;



     if (nombre === '') {
        alert('Por favor, complete nombre.');
        return false;
    }
    if (nacion === '') {
        alert('Por favor, complete nacionalidad.');
        return false;
    }
    if (radiosi === false && radiono === false) {
        alert('Por favor, complete si ya ha navegado.');
        return false;
    }
    if (select === '') {
        alert('Por favor, seleccione la excursión.');
        return false;
    }
    if (correo === '') {
        alert('Por favor, complete su correo.');
        return false;
    }

    return true;
}