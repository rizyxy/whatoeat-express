import { Request, Response } from "express";
import prisma from "../utils/client";

export async function getIngredients(req: Request, res: Response) {
    try {
        const ingredients = await prisma.ingredient.findMany();

        return res.status(200).json({
            data: ingredients
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
}

export async function createIngredient(req: Request, res: Response) {
    try {
        if (!req.body.name) {
            return res.status(400).json({
                error: 'Name cannot be empty'
            });
        }

        const ingredient = await prisma.ingredient.create({
            data: {
                name: req.body.name
            }
        });

        return res.status(201).json({
            message: 'Ingredient created succesfuly',
            data: ingredient
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    }
}

export async function updateIngredient(req: Request, res: Response) {
    try {
        if (!req.body.name) {
            return res.status(400).json({
                error: 'Name cannot be empty'
            });
        }

        if (!req.params.id) {
            return res.status(400).json({
                error: 'ID cannot be empty'
            });
        }
        
        const updatedIngredient = await prisma.ingredient.update({
            where: {
                id: parseInt(req.params.id)
            },
            data: {
                'name': req.body.name
            }
        });

        return res.status(201).json({
            message: 'Ingredient updated succesfuly',
            data: updatedIngredient
        });
    } catch (error) {
        return res.status(500).json({
            error: error
        });
    } 
}

export async function deleteIngredient(req: Request, res: Response) {
        try {
        if (!req.params.id) {
            return res.status(400).json({
                'error': 'Ingredient ID cannot be empty'
            });
        }

        await prisma.ingredient.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });

        return res.status(200).json({
            message: "Ingredient deleted succesfuly"
        })
    } catch (error) {
        return res.status(500).json({
            error: error
        });        
    }
}

