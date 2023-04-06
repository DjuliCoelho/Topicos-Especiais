const mongoose = require("mongoose");
const AnotacoesModelShcema = new mongoose.Schema({
    Titulo: String,
    Notas: String,
    Prioridade: Boolean
});

module.exports = mongoose.model("Anotacoes", AnotacoesModelShcema);