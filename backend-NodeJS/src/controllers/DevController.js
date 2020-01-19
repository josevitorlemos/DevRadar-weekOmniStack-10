const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const devs = await Dev.find(); //Para filtrar, coloca-se por ex find({ name: "nome"})

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = response.data; //"name = login" Caso não encontre o name no gitHub irá substituir pelo userLogin.

      const techsArray = parseStringAsArray(techs);

      const location = {
        //Deve estar estruturado como no DevSchema
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        //O valor da variável é o mesmo que o nome, pode-se usar uma short sintax (pois nela será entendido que o nome e o valor é o mesmo)
        //Buscou os valores do techs em outra variável que foi importada
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return res.json( dev );
  },

  async update(req, res) {
    const devs = await Dev.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    }); //Para filtrar, coloca-se por ex find({ name: "nome"})

    return res.json(devs);
  },

  async destroy(req, res) {
    await Dev.findByIdAndDelete(req.params.id); //Para filtrar, coloca-se por ex find({ name: "nome"})

    return res.send();
  },

};
