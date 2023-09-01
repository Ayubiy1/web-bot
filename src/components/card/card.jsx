import { useState } from "react";
import Buttons from "../button/button";
import "./card.css";

export const Card = (props) => {
  const { item, onAddItem, onREmoveItem } = props;

  const [count, setCount] = useState(0);

  const handeleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handeleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <div className="card">
        <span className={count > 0 ? "card__bage" : "card__bage__none"}>
          {count}
        </span>

        <div className="img__conteiner">
          <img
            src={item.Image}
            alt={item.title}
            width={"100%"}
            height={"230px"}
          />
        </div>

        <div className="card__body">
          <h2 className="card__title">{item.title}</h2>
          <div className="card__price">
            {item.price.toLocaleString(`en-ES`, {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>

        <div className="hr"></div>

        <div className="btn__container">
          <Buttons
            title={"+"}
            onClick={() => {
              onAddItem(item);
              handeleIncrement();
            }}
            type={"add"}
          />
          {count > 0 && (
            <Buttons
              title={"-"}
              onClick={() => {
                onREmoveItem(item);
                handeleDecrement();
              }}
              type={"remove"}
            />
          )}
          {/* <Buttons title={"-"} type={"checkbox"} /> */}
        </div>
      </div>
    </>
  );
};
