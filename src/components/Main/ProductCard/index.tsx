import AddToCart from "assets/icons/add-shopping-cart.png";
import PriceIcon from "assets/icons/tag.png";
import { useState } from "react";
import { useShoppingCart } from "stores/useShoppingCart";
import "./styles.css";
import { ProductCardProps } from "./types";

const ProductCard = ({ item, description }: ProductCardProps) => {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);
  const setShoppingCart = useShoppingCart((state) => state.setShoppingCart);

  const [obs, setObs] = useState<string>("");
  const [numberOfProducts, setNumberOfProducts] = useState<number>(1);

  const handleAddToCart = () => {
    const existItem = shoppingCart.find(
      (it) => it.index === item.index && it.obs === obs
    );

    if (existItem) {
      const indexOfItem = shoppingCart.indexOf(existItem);
      shoppingCart.splice(indexOfItem, 1);
    }

    setShoppingCart([
      ...shoppingCart,
      {
        ...item,
        obs: obs,
        numberItens: numberOfProducts,
        totalPrice: item.unitPrice * numberOfProducts,
      },
    ]);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={item.image} alt="Produto" />
      </div>
      <div className="product-data">
        <h3>{item.name}</h3>
        <div className="product-price">
          <img src={PriceIcon} width="20px" />
          <p>R$ {item.unitPrice.toFixed(2).replace(".", ",")}</p>
        </div>

        {description && (
          <>
            <span>{description}</span>
            <div>
              <label htmlFor="obs">Observação</label>
              <input
                type="text"
                name="obs"
                className="mb-20"
                value={obs}
                onChange={(e) => setObs(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                name="amount"
                className="mb-20"
                min={1}
                value={numberOfProducts}
                onChange={(e) => setNumberOfProducts(Number(e.target.value))}
              />
              <div onClick={handleAddToCart}>
                <img src={AddToCart} width="40px" className="add-cart" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
