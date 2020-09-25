//==================================
//         PUERTO
//==================================

process.env.PORT = process.env.PORT || 3000;

//==================================
//         ENTORNO
//==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================================
//        vencimiento token
//==================================

process.env.VENCIMIENTO_TOKEN = '48h';


//==================================
//       SEED
//==================================

process.env.SEED = process.env.SEED || 'secret-seed';

//==================================
//        Url
//==================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI
};


//==================================
//       google client
//==================================

process.env.CLIENT_ID = process.env.CLIENT_ID || '498732948445-rhial9fo44eo4rnmaf2fj5tmt5r9hsc6.apps.googleusercontent.com'
process.env.urlDB = urlDB;