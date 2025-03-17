let handler = async (m, { conn }) => {
    // Mensaje de cumpleaños
    const mensaje = `💖✨ *¡Feliz cumpleaños, amor de mi vida! 🎉🥳* ✨💖

Hoy es un día muy especial porque celebramos el nacimiento de la persona más maravillosa que existe: *¡TÚ!*. Cada día a tu lado es un regalo, pero hoy quiero recordarte lo increíble que eres y lo mucho que significas para mí. 💕💫

Desde el momento en que entraste en mi vida, todo cambió para mejor. Tu sonrisa ilumina mis días, tu amor llena mi corazón y tu presencia hace que todo sea más bonito. No hay palabras suficientes para describir lo afortunado/a que me siento por tenerte a mi lado. ❤️

Hoy deseo que todos tus sueños se hagan realidad, que la felicidad te abrace siempre y que nuestro amor siga creciendo con cada día que pase. 🌹✨

Disfruta tu día al máximo, mi amor, porque mereces toda la felicidad del mundo. ¡Te amo! 💖🎂🥂`;

    // URLs de la imagen y el audio
    const imageUrl = "https://files.catbox.moe/l5p6x2.jpg";
    const audioUrl = "https://files.catbox.moe/eaq6rd.mp3";

    try {
        // Enviar mensaje de texto
        await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m });

        // Enviar imagen con un mensaje corto
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: "Hoy es tu día especial y quiero recordarte cuánto te amo y lo importante que eres para mí. 💖✨ Que este cumpleaños sea tan hermoso como tú. ¡Felicidades, mi amor! 🎉🎂"
        }, { quoted: m });

        // Enviar audio
        await conn.sendMessage(m.chat, { 
            audio: { url: audioUrl }, 
            mimetype: 'audio/mpeg',
            ptt: true  
        }, { quoted: m });

    } catch (error) {
        console.error("Error en el plugin de cumpleaños:", error);
        await conn.reply(m.chat, `*☓ Ocurrió un error inesperado:*\n${error.message || error}`, m);
    }
};

// Configuración del comando
handler.help = ['cumpleamor'];
handler.tags = ['fun'];
handler.command = ['cumpleamor', 'felizcumple'];

export default handler;
