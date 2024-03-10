import { Request, Response } from "express";
import { ProductsServices } from "../services/productsServices.services";

export class ProductsControllers{

    create(req: Request, res: Response) {
        const productService = new ProductsServices();

        const newProduct = productService.create(req.body)

        return res.status(201).json(newProduct)

    }

    getProducts(req: Request, res: Response) {
        const productService = new ProductsServices();

        const products = productService.getProducts()

        return res.status(202).json({products})
    }

    update(req: Request, res: Response) {
        const productService = new ProductsServices();

        const response = productService.update(req.body, Number(req.params.productId))

        return res.status(200).json(response)
    }

    delete(req: Request, res: Response) {
        const productService = new ProductsServices();
        console.log(typeof Number(req.params.productId))
        const response = productService.delete(Number(req.params.productId))

        return res.status(204).json(response)
    }
}