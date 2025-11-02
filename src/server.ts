import express from "express"
import ingredientRouter from "./routes/ingredient.route";

const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (_, res) => {
    res.sendStatus(200);
});

app.use('/ingredients', ingredientRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});