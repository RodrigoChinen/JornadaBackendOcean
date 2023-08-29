const express = require("express");
const app = express();

//Habilitamos o processamento de JSON 
app.use(express.json());

//Endpoint principal
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Endpoint /oi
app.get("/oi", function (req, res) {
    res.send("Olá Mundo!");
  });

  //Endpoints de Herois
const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];
//                     0               1                  2

// Read All -> [GET] /herois
app.get("/herois", function (req, res) {
  res.send(lista);
  });

  // Creat -> [POST] /herois
app.post("/herois", function(req, res) {
 //console.log(req.body, typeof req.body);
 
 // Exxtrai o nome do Body da Request (Corpo da Requisição)
  const item = req.body.nome;

  // Inserir o item na Lista
  lista.push(item);

  // Enviamos uma resposta de sucesso
  res.send("Item criado com sucesso!");
 });

 // Read By Id -> /herois/:id
 app.get("/herios/:id", function (req, res) {
 res.send("Ler pelo ID");
});

app.listen(3000);