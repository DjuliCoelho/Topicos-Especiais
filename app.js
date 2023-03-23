const express = require("express");
const servidor = express();

servidor.get("/", function(req, res){
    res.send("Seja bem viado aqui na minha aplicação!");

});

servidor.get("/login",function(req,res){
    res.send("Esta é a página de login da aplicação");

});
 
servidor.listen(8085, function(){
    console.log("Servidor rodando,chuchu");

});