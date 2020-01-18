module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(",") //Irá separar a string removendo a vírgula
  .map(tech => tech.trim()); //O map irá percorrer o código e o trim irá remover os espaçamentos antes e depois das String
};
