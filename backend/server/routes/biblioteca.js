const { Router } = require('express');
const axios = require('axios');
const { Pokemon, Type} = require('../db');
const router = Router();
const { getApiInfo } = require("../controllers/GetBiblioteca")

router.get('/', async (req,res, next) =>{
    
})

module.exports = router;