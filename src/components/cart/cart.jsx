import Buttons from "../button/button";
import { totolPrice } from "../units/totol-price";
import "./cart.css";

const Cart = ({ cartItem, onCheckOut }) => {
  console.log(onCheckOut);
  return (
    <>
      <div className="cart__container">
        <p>
          Umumiy summa:{" "}
          {totolPrice(cartItem).toLocaleString(`en-ES`, {
            style: "currency",
            currency: "USD",
          })}
        </p>

        <Buttons
          title={cartItem.length > 0 ? "Sotib olish" : "Buyurtma"}
          type={"checkbox"}
          onClick={onCheckOut}
          // disabled
        />
      </div>
    </>
  );
};
export default Cart;
