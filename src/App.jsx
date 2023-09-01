import { useEffect, useState } from "react";
import "./App.css";
import { getData } from "./constants/db";
import { Card } from "./components/card/card";
import Cart from "./components/cart/cart";

const courses = getData();

const telegram = window.Telegram.WebApp;

function App() {
  const [cartItem, setcartItem] = useState([]);
  // console.log(cartItem);

  useEffect(() => {
    telegram.ready();
  });

  const onAddItem = (item) => {
    const existItem = cartItem.find((c) => c.id === item.id);

    if (existItem) {
      const newData = cartItem.map((c) =>
        c.id === item.id
          ? { ...existItem, quantity: existItem.quantity + 1 }
          : c
      );

      setcartItem(newData);
    } else {
      const newData = [...cartItem, { ...item, quantity: 1 }];

      setcartItem(newData);
    }
  };

  const onREmoveItem = (item) => {
    const existItem = cartItem.find((c) => c.id === item.id);

    if (existItem.quantity === 1) {
      const newData = cartItem.filter((c) => c.id !== item.id);
      setcartItem(newData);
    } else {
      const newData = cartItem.map((c) =>
        c.id == item.id ? { ...existItem, quantity: existItem.quantity - 1 } : c
      );

      setcartItem(newData);
    }
  };

  const onCheckOut = () => {
    telegram.MainButton.text = "Sotib olish";
    telegram.MainButton.show();
  };

  return (
    <>
      <h2 className="title">Online Kurslar</h2>
      <Cart cartItem={cartItem} onCheckOut={onCheckOut} />
      <div className="cards__container">
        {courses.map((item) => (
          <Card
            key={item.id}
            item={item}
            onREmoveItem={onREmoveItem}
            onAddItem={onAddItem}
          />
        ))}
      </div>
    </>
  );
}

export default App;
