const mongoose = require("mongoose");
const dbconfig = "mongodb+srv://djulicoelho:<Boitata2730>@cluster0.vu8ydg1.mongodb.net/anotacoes?retryWrites=true&w=majority";
const conexao = mongoose.connect(dbconfig,{
    useNewUrlPParser: true,
    useUnifiedTopology: true
});

module.exports = conexao;
