import AddToCart from "assets/icons/add-shopping-cart.png";
import RemoveFromCart from "assets/icons/trash.png";
import { useEffect, useState } from "react";
import { useShoppingCart } from "stores/useShoppingCart";
import "./styles.css";
import { CheckoutProductCardProps } from "./types";

const CheckoutProductCard = ({ item }: CheckoutProductCardProps) => {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);
  const setShoppingCart = useShoppingCart((state) => state.setShoppingCart);

  const [numberOfProducts, setNumberOfProducts] = useState<number>(
    item.numberItens
  );

  const handleAddToCart = () => {
    const existItem = shoppingCart.find(
      (it) => it.index === item.index && it.obs === item.obs
    );

    if (existItem) {
      const indexOfItem = shoppingCart.indexOf(existItem);
      shoppingCart.splice(indexOfItem, 1);
    }

    setShoppingCart([
      ...shoppingCart,
      {
        ...item,
        numberItens: numberOfProducts,
        totalPrice: item.unitPrice * numberOfProducts,
      },
    ]);
  };

  const handleRemoveFromCart = () => {
    const existItem = shoppingCart.find(
      (it) => it.index === item.index && it.obs === item.obs
    );

    if (existItem) {
      const indexOfItem = shoppingCart.indexOf(existItem);
      shoppingCart.splice(indexOfItem, 1);
      setShoppingCart([...shoppingCart]);
    }
  };

  useEffect(() => {
    setNumberOfProducts(item.numberItens);
  }, [item, shoppingCart, setShoppingCart]);

  return (
    <div className="checkout-card">
      <div className="checkout-image">
        <img src={item.image} alt="Produto" />
      </div>
      <div className="checkout-product-data">
        <div className="checkout-name-obs">
          <div className="checkout-name">
            <span>{item.numberItens}x</span>
            <h3>{item.name}</h3>
          </div>
          {item.obs && <span>Obs: {item.obs}</span>}
        </div>
        <div className="checkout-product-price">
          <div className="checkout-number-of-items">
            <div onClick={handleRemoveFromCart}>
              <img src={RemoveFromCart} width="30px" className="button-cart" />
            </div>
            <input
              type="number"
              name="amount"
              className="mb-20"
              min={1}
              value={numberOfProducts}
              onChange={(e) => setNumberOfProducts(Number(e.target.value))}
            />
            <div onClick={handleAddToCart}>
              <img src={AddToCart} width="30px" className="button-cart" />
            </div>
          </div>
          <span>Total: R$ {item.totalPrice.toFixed(2).replace(".", ",")}</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProductCard;
