const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    //Busca os Devs
    //Filtrar por tecnologias
    //Para realizar esses request, deve-se utilizar query params, pois é um metodo get
    //Para ver todo o request do usuario console.log(request.query) (lembrando que o frontend deve mandar essas informações no query (url))
    const { latitude, longitude, techs } = req.query;
    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray //o $in é um operador lógico do mongo (o mongo tem vários operadores(ver mongo operators))
      }, // então, o $in busca o valor exato da string especificada. Então ele buscará pelo find, um valor exato no banco, ao que o user digitou
      location: {
        $near: {
          //o $near é outro operador do mongo. Busca objetos próximos a uma localização
          $geometry: {
            type: "Point", //De acordo com a documentação e o PointSchema
            coordinates: [longitude, latitude] //a longitude deve vir primeiro (documentação)
          },
          $maxDistance: 10000 //Localiza todos os Devs no raio de (10Km)
        }
      }
    });
    return res.json({ devs });
  }
};
