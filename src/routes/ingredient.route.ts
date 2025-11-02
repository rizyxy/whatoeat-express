import { Router } from "express";
import { getIngredients, createIngredient, updateIngredient, deleteIngredient } from "../controllers/ingredient.controller";

const ingredientRouter = Router();

ingredientRouter.get('/', getIngredients);
ingredientRouter.post('/create', createIngredient);
ingredientRouter.put('/:id/update', updateIngredient);
ingredientRouter.delete('/:id/delete', deleteIngredient);

export default ingredientRouter;
