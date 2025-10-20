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
            if (true) {
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

async function fetchData() {
    try {
        let responce = await getData(); // await espara a que la promesa se resuelva
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}

fetchData();
console.log('el programa continua...');