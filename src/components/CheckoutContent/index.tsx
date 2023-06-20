import Header from "components/Header";
import { useCartStatus } from "hooks/useCartStatus";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "stores/useShoppingCart";
import "styles/main.css";
import CheckoutProductCard from "./CheckoutProductCard";
import "./styles.css";

const CheckoutContent = () => {
  const navigate = useNavigate();
  const { totalProductsInCart } = useCartStatus();
  const setShoppingCart = useShoppingCart((state) => state.setShoppingCart);

  const allItemsInCart = useMemo(
    () => totalProductsInCart?.items ?? [],
    [totalProductsInCart?.items]
  );

  const handleConfirm = () => {
    navigate("/confirm");
    setShoppingCart([]);
  };

  return (
    <div className="layout-container">
      <div className="main-content">
        <Header />

        <div className="checkout-container">
          {allItemsInCart.length === 0 && (
            <div className="checkout-container checkout-empty">
              <h2>Carrinho vazio</h2>
              <button onClick={() => navigate("/")}>Adicionar itens</button>
            </div>
          )}
          {allItemsInCart.length > 0 &&
            allItemsInCart.map((product) => (
              <div key={product.index}>
                <CheckoutProductCard item={product} />
              </div>
            ))}
          {allItemsInCart.length > 0 && (
            <div className="checkout-button">
              <h3>Total: R$ {totalProductsInCart?.sum}</h3>
              <button onClick={handleConfirm}>Finalizar compra</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
