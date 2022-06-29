const express = require('express');
const app = express();
const port = 80;

const fValidar = require('./lib/cpf.js')

app.get("/cpf/:cpf", (req, res) => {

    let cpf = req.params.cpf;
 
    let verificador = fValidar(cpf);

    res.send(verificador);

});
 
app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`);
})