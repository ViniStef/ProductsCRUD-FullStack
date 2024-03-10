export interface IProduct {
    id: number;
    name: string;
    price: string;
    description?: string;
}

export type TUpdateProductBody = Partial<IProduct>;

export type TCreateProductBody = Omit<IProduct, "id">