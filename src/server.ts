import express, { json, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const server = express();

server.use(json());

const cursos: string[] = [
  "FullStack",
  "BackEnd",
  "Desenvolvimento de Games",
  "FrontEnd",
];

// Retorna um dos Curso
server.get("/cursos/:index", async (req: Request, res: Response) => {
  const { index } = req.params as any;

  return res.json(cursos[index]);
});

// Retorna todos os cursos
server.get("/cursos", async (req: Request, res: Response) => {
  const cursos = await prisma.cursos.findMany();
  return res.json(cursos);
});

// Criar um novo curso
server.post("/cursos", async (req: Request, res: Response) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// Atualizar um dos cursos
server.put("/cursos/:index", async (req: Request, res: Response) => {
  const { index } = req.params as any;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Deletar um dos cursos
server.delete("/cursos/:index", async (req: Request, res: Response) => {
  const { index } = req.params as any;

  cursos.splice(index, 1);

  return res.json({ message: "O curso foi deletado com sucesso" });
});

async function main() {
  server.listen(3333);
  console.log("Server is running on port 3333");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
