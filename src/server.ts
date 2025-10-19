import express from 'express';
import { PrismaClient } from '../generated/prisma';

const app = express();
app.use(express.json());

const port = 3000

const prisma = new PrismaClient();

app.get('/ingredients', async (req, res) => {
    try {
        const cursor = req.query?.cursor;

        let ingredients;

        if (cursor == null) {
            ingredients = await prisma.ingredient.findMany({
                take: 3,
                orderBy: {
                    id: 'asc'
                }
            });
        }
        else {
            ingredients = await prisma.ingredient.findMany({
                take: 3,
                skip: 1,
                cursor: {
                    id: Number(cursor)
                },
                orderBy: {
                    id: 'asc',
                }
            });
        }

        return res.json({
            data: ingredients,
            cursor: ingredients[2]?.id
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});