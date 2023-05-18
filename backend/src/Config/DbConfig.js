const mongoose = require("mongoose");
const DbConfig = "mongodb://0.0.0.0:27017/BancoVendas";

const conexao = mongoose.connect(DbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;