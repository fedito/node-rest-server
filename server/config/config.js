//==================================
//         PUERTO
//==================================

process.env.PORT = process.env.PORT || 3000;

//==================================
//         ENTORNO
//==================================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================================
//        ??????
//==================================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://user:1234@cluster0.wav9p.mongodb.net/cafe?retryWrites=true&w=majority'
};

process.env.urlDB = urlDB;