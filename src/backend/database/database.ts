import { IProduct } from "../interfaces/products.interface";

let id = 0;

export let products: IProduct[] = [];

export const generateId = () => {
    id++;
    return id;
}