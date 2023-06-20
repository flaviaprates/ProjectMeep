import { useMemo } from "react";
import { useShoppingCart } from "stores/useShoppingCart";
import { handleShoppingCart } from "utils/index";
import "./styles.css";

const CardResumeModal = () => {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);

  const totalProductsInCart = useMemo(
    () => (shoppingCart.length > 0 ? handleShoppingCart(shoppingCart) : null),
    [shoppingCart]
  );

  return (
    <div className="modal-container">
      <div className="modal-content">
        {totalProductsInCart?.items.map((it) => (
          <div key={it.index}>{it.name}</div>
        ))}
        {totalProductsInCart?.sum ?? 0}
      </div>
    </div>
  );
};

export default CardResumeModal;
