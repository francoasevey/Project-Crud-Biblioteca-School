const express = require("express");
const axios = require('axios');
const { Socio, Prestamos} = require('../db');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { GetSocio } = require("../controllers/GetSocio")
const router = express.Router();
//const { Pokemon, Type} = require('../db');
router.get('/', async (req,res, next) =>{
     try {
         const name = req.query.name//busqueda por query "/bulbasaur"
         const socios = await GetSocio();//cambiar por getDbInfo(); cuando cargue la db
         
         let full = await Socio.findAll({
             include: {
             model: Type,
              },
              });
              if (!full.length) {
                 // bulkCreate busca los campos en el objeto y los pasa a la tabla
                 // los datos del objeto para los que no hay campos en la tabla, no los guarda
                 await Socio.bulkCreate(socios);
                  } 
     if (name){
         let socioName = await socios.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
         socioName.length ? 
         res.status(200).send(socioName):
         res.status(404).send('socio not found');//en caso de que no se encuentre por query
     }
     else if(socios) {
         res.status(200).send(socios)
     }
     } catch (error) {
        res.status(404).send('failed to get socios');
     }
 })


router.post('/',async (req,res, next) =>{
          try {
          let {
              name,
              apellido,
              email,
              dni,
              carrera,
              telefono,
              cuota,
              numeroderecibo,
              numerodesocio,
              image,
              prestamos,
              created
          } = req.body;console.log(req.body)
          if (!name || !apellido || !email || !dni || !carrera || !telefono || !cuota || !numeroderecibo || !numerodesocio || !image) {
              res.status(404).send('complete all the data');
            } else {
      
          let socioCreated = await Socio.create({
              name,
              apellido,
              email,
              dni,
              carrera,
              telefono,
              cuota,
              numeroderecibo,
              numerodesocio,
              image,
              prestamos,
              created
          })
      
          let socioPrestamo = await Prestamos.findAll({ where: { name: prestamos } })
          socioCreated.addPrestamos(socioPrestamo)
      
          res.send('created Socio!')
      }
     } catch (error) {
          res.status(404).send('Failed to create Socio!')
      }
});
module.exports = router;