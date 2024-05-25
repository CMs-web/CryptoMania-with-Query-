
import { useSelector } from "react-redux";
import CheckButton from "../ui/CheckOut";
import CartPage_Cart from "./CartPage_Cart";


const CartPage = () => {
  const { cartitems, cartQuantity } = useSelector((state) => state.cart);
  const totalCartQty = cartQuantity.reduce((acc, cur) => cur + acc, 0)



  return (
    <section className="CartPage_cartContainer">
      <div className="cartPage_carts">
        {cartitems.map((cart) => (
          <CartPage_Cart key={cart?.id} cart={cart}  />
        ))}
      </div>
      <aside className="cartAside">
        <div className="cartPage_CheckOut">
          {cartitems.map((cart) => (
            <h5 className="limegreen" key={cart.id}>
              {cart.name} &nbsp;: &nbsp;{" "}
              {(cart.market_data?.current_price?.usd).toFixed(2)}
            </h5>
          ))}
        <h2>
          Total : ${" "}
          {cartitems
            .reduce((acc, cur) => (cur?.market_data?.current_price?.usd)*totalCartQty + acc, 0)
            .toFixed(2)}
        </h2>
        </div>
        <CheckButton>Check out</CheckButton>
      </aside>
    </section>
  );
};

export default CartPage;
