const express = require('express');

function authRoutes(authController) {
    const router = express.Router();

    // Envolver los métodos del controlador en funciones de middleware
    router.post('/register', (req, res) => authController.register(req, res));
    router.post('/login', (req, res) => authController.login(req, res));

    return router;
}

module.exports = authRoutes;
