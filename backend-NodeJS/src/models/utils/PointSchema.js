const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  //Type de coluna e não valor
  type: {
    type: String,
    enum: ["Point"], //Para que o valor sempre seja "point"
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

module.exports = PointSchema;
