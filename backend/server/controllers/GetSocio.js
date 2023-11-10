const axios = require('axios');
const {Socio, Prestamos} = require('../db');

const GetSocio = async () => {
  try {
    const dbSocio = await Socio.findAll({
      include: [
        {
          model: Prestamos,
          attributes: ["name"],
          through: {
              attributes: [],
          }
        }
        ],
});
return dbSocio;

} catch (error) {
res.status(404).send('opps! an error occurred');
}
};
  
  module.exports={
    GetSocio
 }
  