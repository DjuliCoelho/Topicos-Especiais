const express = require("express");
const app = express();

require("./config/dbconfig");

app.use(express.json());

app.get("/", (req, res) =>{
    return res.json({
        nome: "Djuli",
        idade: 23,
        sexo:"fem",
        ela: "É linda"
    });
});
app.listen(8081);