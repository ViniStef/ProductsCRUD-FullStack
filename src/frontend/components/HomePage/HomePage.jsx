import { Footer } from "../Footer/Footer";
import { ProductsContainer } from "../ProductsContainer/ProductsContainer";
import style from "./style.module.scss";

export const HomePage = () => {
  return (
    <div className={style.main__container}>
      <main>
        <ProductsContainer />
      </main>

      <Footer />
    </div>
  );
};
