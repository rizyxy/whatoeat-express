import express from "express"
import { PrismaClient } from "../generated/prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

const port = 3000;

app.get('/', (_, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});