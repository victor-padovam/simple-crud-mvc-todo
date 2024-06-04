const { app } = require('./src/routes.js');

// Esta é a função que o Vercel chamará para lidar com as solicitações recebidas
module.exports = (req, res) => {
    app(req, res);
};
