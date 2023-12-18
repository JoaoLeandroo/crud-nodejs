const express = require("express");

const server = express();

server.use(express.json());

const cursos = ["Java Script", "Node JS"];

server.get("/curso", (req, res) => {
  return res.json(cursos);
});

server.post("/curso", (req, res) => {
  const { nome } = req.body;
  cursos.push(nome);

  return res.json(cursos);
});

server.put("/curso/:index", (req, res) => {
    const { index } = req.params
    const { nome }= req.body

    cursos[index] = nome

    return res.json(cursos)
})

server.delete('/curso/:index', (req, res) => {
    const { index } = req.params

    cursos.splice(index, 1)

    return res.json(cursos)

})

server.listen(3000);
