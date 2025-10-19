import express from 'express';
import { PrismaClient } from '../generated/prisma';

const app = express();
app.use(express.json());

const port = 3000

const prisma = new PrismaClient();

app.get('/ingredients', async (req, res) => {
    try {
        const ingredients = await prisma.ingredient.findMany({
            orderBy: {
                id: 'asc'
            }
            });

        res.json({
            data: ingredients
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});