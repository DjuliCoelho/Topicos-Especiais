const { resolveTypeReferenceDirective } = require("typescript");
const Anotacoes = require("../Model/AnotacoesModel");
module.exports = {
    async read(req, res){
        const anotacoes = await Anotacoes.find();
        return res.json(Anotacoes.List);
    },

    async create(req, res){
        const {Titulo, Notas,Prioridade} = req.body;
        console.log(req.body);
    }
}