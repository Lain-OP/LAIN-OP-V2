import fs from 'fs';

const obtenerDatos = () => {
    if (fs.existsSync('data.json')) {
        return JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    } else {
        return { chats: {} };
    }
};
const guardarDatos = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
};

const limpiarPersonajesReservados = () => {
    let data = obtenerDatos();
    Object.keys(data.chats).forEach(chatId => {
        data.chats[chatId].personajesReservados = [];
    });
    guardarDatos(data);
    console.log('Se han eliminado todos los personajes reservados.');
};

setInterval(limpiarPersonajesReservados, 1800000); //30 minutos :v

limpiarPersonajesReservados();