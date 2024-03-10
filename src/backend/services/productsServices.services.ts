import { generateId, products } from "../database/database";
import {
  IProduct,
  TCreateProductBody,
  TUpdateProductBody,
} from "../interfaces/products.interface";

export class ProductsServices {
  productList: IProduct[] = products;

  create(data: TCreateProductBody) {
    const newProduct = { ...data, id: generateId()};

    this.productList.push(newProduct);

    return newProduct;
  }

  getProducts() {
    console.log(this.productList)
    return this.productList;
  }

  update(data: TUpdateProductBody, id: number) {
    const currentProduct = this.productList.find(
      (product) => product.id === id
    );

    if (currentProduct) {
      const updatedProduct = { ...currentProduct, ...data };
      const index = this.productList.findIndex((product) => product.id === id);
      this.productList.splice(index, 1, updatedProduct);
      
      return updatedProduct
    } else {
      return "Couldn't find the product.";
    }

  }

  delete(id: number) {
    const currentProduct = this.productList.find(
      (product) => product.id === id
    );

    if (currentProduct) {
      const index = this.productList.findIndex((product) => product.id === id);
      this.productList.splice(index, 1);

      return "Product deleted.";
    }

    return "Product not found.";
  }
}
