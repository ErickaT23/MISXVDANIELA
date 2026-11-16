const config = {
    event: {
        defaultEventId: "misxv-daniela-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "Daniela | Mis XV 2026",
        descripcion: "Mis Quince Años de Daniela - 12 de diciembre, 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Daniela",
        fecha: "12-12-2026",
        fechaVisible: "12.12.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia Catedral",
            hora: "5:00 PM",
            direccion: "Quetzaltenango",
            ubicacionUrl: "https://maps.app.goo.gl/UR8YG5dqu9fzo5NeA"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Jardín Vilaflor",
            hora: "6:00 PM",
            direccion: "Kilómetro 32.5, carretera hacia San Lucas, Antigua Guatemala",
            ubicacionUrl: "https://maps.app.goo.gl/avZaewNmhM6xo6Nn9"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#MisXVDaniela",
        instagramUrl: "https://instagram.com/rocio.fernando.boda",
        facebookUrl: "https://facebook.com/rociofernandoboda",
        marcaTexto: "Diseño",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
