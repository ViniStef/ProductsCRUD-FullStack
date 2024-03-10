import express, { json } from "express";
import { appProducts } from "./routes/products.routes";

export const app = express();

app.use(json());

app.use("/products", appProducts);

const port = 3000

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})