//initialise database with minimum data
const readline = require('readline');

const Anuncio = require('./models/Anuncio');

async function main() {
    const continuar = await preguntaSiNo('¿Estás seguro de que quieres borrar la base de datos? [n]')
    if (!continuar) {
        process.exit();
    }

    const connection = require('./lib/connectMongoose');

    await initAnuncios();

    connection.close();
}

main().catch( err => console.log('Hubo un error', err));


async function initAnuncios() {
    const result = await Anuncio.deleteMany();
    console.log(`Eliminados ${result.deletedCount} anuncios.`);

    const inserted = await Anuncio.insertMany([
        {
            "name": "Bicicleta montaña",
            "sale": true,
            "price": 230.15,
            "photo": "/images/bicicleta-montaña.jpg",
            "tags": [ "lifestyle", "motor"]
        },
        {
            "name": "Bicicleta paseo",
            "sale": false,
            "price": 150.00,
            "photo": "/images/bicicleta-paseo.jpg",
            "tags": [ "lifestyle", "motor"]
        },
        {
            "name": "iPhone 3GS",
            "sale": false,
            "price": 50.00,
            "photo": "/images/iPhone.jpg",
            "tags": [ "lifestyle", "mobile"]
        },
        {
            "name": "iPad",
            "sale": true,
            "price": 210.00,
            "photo": "/images/ipad.jpg",
            "tags": [ "work", "mobile"]
        },
        {
            "name": "Nikon 7200",
            "sale": true,
            "price": 190.00,
            "photo": "/images/nikon.png",
            "tags": [ "lifestyle"]
        },
        {
            "name": "Canon EOS 80 D",
            "sale": false,
            "price": 320.00,
            "photo": "/images/canon.jpg",
            "tags": [ "work"]
        }
    ]);
    console.log(`Creados ${inserted.length} anuncios.`);
}

function preguntaSiNo(texto) {
    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(texto, respuesta => {
            interface.close();
            if(respuesta.toLocaleLowerCase() === 'si') {
                resolve(true);
                return;
            }
            resolve(false);
        });
    })
}