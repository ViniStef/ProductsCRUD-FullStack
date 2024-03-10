import { AddProduct } from "./AddProduct/AddProduct";
import { RenderProduct } from "./RenderProduct/RenderProduct";
import style from "./style.module.scss"

export const ProductsContainer = () => {
  return (
    <section className={style.products__section}>
      <div>
        <h1>My List of Products!</h1>
      </div>

      
        <AddProduct />
      

      <div>
        <ul>
          <RenderProduct />
        </ul>
      </div>
    </section>
  );
};
