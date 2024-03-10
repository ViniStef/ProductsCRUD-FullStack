import { NextFunction, Request, Response } from "express";
import { products } from "../database/database";

export class ExistingIdHandler {
  static execute(req: Request, res: Response, next: NextFunction) {
    const productExist = products.some(
      (product) => product.id === Number(req.params.productId)
    );
    if (!productExist) {
      return res.status(404).json({ message: "Product not found." });
    }

    next();
  }
}
