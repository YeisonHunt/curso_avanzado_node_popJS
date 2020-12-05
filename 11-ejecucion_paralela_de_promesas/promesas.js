

function mensajesPrivados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("mensajes");
        }, 600);
    });
}


function galeriaDeFotos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("fotos");
        }, 1000);
    });
}

function ultimasTransacciones() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("transacciones");
        }, 500);
    });
}


Promise.all( [ ultimasTransacciones(), mensajesPrivados() , galeriaDeFotos() ,   ] ).then( (valores)=>{
    console.log( valores );
})