const mongoose = require("mongoose");
const DbConfig = "mongodb://0.0.0:27017/anotacoes";
//const dbconfig = "mongodb+srv://djulicoelho:<Boitata2730>@cluster0.vu8ydg1.mongodb.net/anotacoes?retryWrites=true&w=majority";
const conexao = mongoose.connect(DbConfig,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;