import style from "./style.module.scss";

export const AddProduct = () => {
  return (
    <div className={style.add__container}>
      <div className={style.add__content}>
        <h2>Add Product</h2>
        <p>Name</p>
        <input type="text" placeholder="Name" />
        <p>Description</p>
        <input type="text" placeholder="Description" />
        <p>Price</p>
        <input type="text" placeholder="R$" />
        <button>Add</button>
      </div>
    </div>
  );
};
