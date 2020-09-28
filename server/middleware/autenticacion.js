const jwt = require("jsonwebtoken");

//=========================
// VERIFICACION DEL TOKEN
//=========================

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        };

        req.usuario = decoded.usuario;

        next();

    });

};

//=========================
// VERIFICACION ADMIN_ROLE
//=========================

let verificaADMIN_ROLE = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role != 'ADMIN_ROLE') {
        return res.status(400).json({
            ok: false,
            err: {
                message: 'El usuario no es admin'
            }
        });
    };

    next();
};

let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        };

        req.usuario = decoded.usuario;

        next();

    });

};

module.exports = {
    verificaToken,
    verificaADMIN_ROLE,
    verificaTokenImg
};