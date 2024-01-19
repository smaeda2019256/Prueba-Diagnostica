function enviarDatos(){
    const nombre = document.getElementById('nombre').value;

    enviarDatosAlServidos(nombre)
        .then(mensajeAgradecimiento)
        .catch(mensajeError);
}


function enviarDatosAlServidos(nombre){
    return new Promise((resolve,reject) => {
        
        setTimeout(() =>{
            const exito = (nombre.toLowerCase() !== 'error');

            if(exito){
                resolve('Bienvenido al Sistema');
            } else{
                reject('Acceso Denegado');
            }
        }, 2000);
    });
}

function mensajeAgradecimiento(mensaje){
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.textContent = mensaje;
    mensajeElement.classList.remove('oculto');
}

function mensajeError(error){
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.textContent = error;
    mensajeElement.classList.remove('oculto');
}
