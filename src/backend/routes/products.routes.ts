import express, { Router, json } from "express";
import { ProductsControllers } from "../controllers/productsControllers.controllers";
import { ExistingIdHandler } from "../middlewares/existingIdHandler.middleware";

export const appProducts = Router();

const productControllers = new ProductsControllers();

appProducts.get("/", productControllers.getProducts)

appProducts.post("/", productControllers.create)

appProducts.patch("/:productId", ExistingIdHandler.execute, productControllers.update)

appProducts.delete("/:productId", ExistingIdHandler.execute, productControllers.delete)