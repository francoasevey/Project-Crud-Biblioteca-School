const { Router } = require('express');
const BibliotecaRoutes = require('./biblioteca');
const SocioRoutes = require('./socio');
const MaterialRoutes = require('./material');
const PrestamoRoutes = require('./prestamo');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/biblioteca', BibliotecaRoutes);
router.use('/socio', SocioRoutes);
router.use('/material', MaterialRoutes);
router.use('/prestamo', PrestamoRoutes);

module.exports = router;
