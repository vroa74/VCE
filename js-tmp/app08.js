// Promesas con Async/Await en JavaScript

const personas = [
    { nombre: "Ana", edad: 25, ciudad: "CDMX" },
    { nombre: "Luis", edad: 30, ciudad: "Guadalajara" },
    { nombre: "María", edad: 22, ciudad: "Monterrey" }
];

function getData() {
    // return personas;
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (false) {
                resolve(personas)
            } else {
                reject('No se pudo obtener la información');
            }
        }, 3000);
    });

    // setTimeout(() => {
    //     return personas;
    // }, 3000);
}

let response = getData();
response.then(data => {
    console.log('los datos son:  ', data);
}).catch(error => {
    console.error('Error: ', error);
});
console.log('el programa continua...');