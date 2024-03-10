import style from "./style.module.scss"

export const RenderProduct = () => {
  return (
    <li className={style.added__item}>
      <div className={style.added__content}>
        <div className={style.content__header}>
          <h2>Cheese</h2>
          <p>R$7,50</p>
        </div>
        <div className={style.content__description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            facere illo aut id ipsa sequi cumque quisquam quod laudantium tempore!
          </p>
          <button>Edit</button>
        </div>
        <div className={style.content__price}>
          

        </div>
        <button>Remove</button>
      </div>
    </li>
  );
};
