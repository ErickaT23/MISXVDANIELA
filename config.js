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

    guestDirectory: {
        "1": { nombre: "Familia De León Marroquín", pases: 4 },
        "2": { nombre: "Eralda Mérida", pases: 1 },
        "3": { nombre: "Osbeli Rivera y Sra.", pases: 2 },
        "4": { nombre: "Familia Rivera López", pases: 3 },
        "5": { nombre: "Familia Castillo González", pases: 3 },
        "6": { nombre: "Miguel Rabanales y Sra.", pases: 2 },
        "7": { nombre: "Familia Rabanales Barrondo", pases: 3 },
        "8": { nombre: "Familia Castillo Urbina", pases: 3 },
        "9": { nombre: "Familia Macario Castillo", pases: 3 },
        "10": { nombre: "Julio Jerez y Sra.", pases: 2 },
        "11": { nombre: "Mercedes Jerez e Hija", pases: 2 },
        "12": { nombre: "Luis Montenegro", pases: 1 },
        "13": { nombre: "Mercedes Montenegro e Hijo", pases: 2 },
        "14": { nombre: "Gustavo Montenegro e Hijos", pases: 3 },
        "15": { nombre: "Gudiel Rivera y Sra.", pases: 2 },
        "16": { nombre: "Familia Cifuentes Rivera", pases: 5 },
        "17": { nombre: "Familia Bolaños Rivera", pases: 3 },
        "18": { nombre: "Familia Calderón Marroquín", pases: 4 },
        "19": { nombre: "Familia Marroquín Mayorga", pases: 4 },
        "20": { nombre: "Familia Cabrera Marroquín", pases: 4 },
        "21": { nombre: "Margarita Cisneros", pases: 1 },
        "22": { nombre: "Elvin Mérida e Hija", pases: 2 },
        "23": { nombre: "Miguelina Rodríguez", pases: 1 },
        "24": { nombre: "Familia González Barrera", pases: 3 },
        "25": { nombre: "Patricia Cardona", pases: 1 },
        "26": { nombre: "Familia Marroquín Monzón", pases: 4 },
        "27": { nombre: "Familia Flores Petersen", pases: 4 },
        "28": { nombre: "Berner Flores", pases: 1 },
        "29": { nombre: "Erick Flores y Olga Flores", pases: 2 },
        "30": { nombre: "Familia Higueros Aguirre", pases: 3 },
        "31": { nombre: "Mauricio Castro y Sra.", pases: 2 },
        "32": { nombre: "María Angelica Martínez", pases: 1 },
        "33": { nombre: "Nikté Monterroso", pases: 2 },
        "34": { nombre: "Jorge Franco y Sra.", pases: 2 },
        "35": { nombre: "Ismar Maldonado y Sra.", pases: 2 },
        "36": { nombre: "Lusvin Morales y Sra.", pases: 2 },
        "37": { nombre: "Familia Ramírez Jerez", pases: 4 },
        "38": { nombre: "Familia Esquivel Jerez", pases: 4 },
        "39": { nombre: "Marlen Jerez e Hijo", pases: 2 },
        "40": { nombre: "Ángel Rabanales y Sra.", pases: 2 },
        "41": { nombre: "Familia Castillo Álvarez", pases: 3 },
        "42": { nombre: "Susi Álvarez e Hijo", pases: 2 },
        "43": { nombre: "Herber Vides y Sra.", pases: 2 },
        "44": { nombre: "Estela Evans", pases: 1 },
        "45": { nombre: "Bella Oquendo", pases: 2 },
        "46": { nombre: "Susi Arias", pases: 2 }
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
             ubicacionUrl: "https://maps.app.goo.gl/2kh61wu9aWDcP1US7"
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
