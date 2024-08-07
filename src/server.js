import express, { json } from "express";

const server = express();

server.use(json());

const cursos = ["FullStack", "BackEnd", "Desenvolvimento de Games", "FrontEnd"];

// Retorna um dos Curso
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

// Retorna todos os cursos
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

// Criar um novo curso
server.post("/cursos", (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// Atualizar um dos cursos
server.put("/cursos/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Deletar um dos cursos
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);

  return res.json({ message: "O curso foi deletado com sucesso" });
});

server.listen(3333);
