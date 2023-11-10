const express = require("express");
const axios = require('axios');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { GetPrestamos } = require("../controllers/GetPrestamos")

const router = express.Router();
//const { Pokemon, Type} = require('../db');

router.get("/", async (req, res) => {
 
     });

module.exports = router;