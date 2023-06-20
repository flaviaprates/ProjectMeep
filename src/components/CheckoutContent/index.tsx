import Header from "components/Header";
import { useCartStatus } from "hooks/useCartStatus";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "styles/main.css";
import CheckoutProductCard from "./CheckoutProductCard";
import "./styles.css";

const CheckoutContent = () => {
  const navigate = useNavigate();
  const { totalProductsInCart } = useCartStatus();

  const allItemsInCart = useMemo(
    () => totalProductsInCart?.items ?? [],
    [totalProductsInCart?.items]
  );

  return (
    <div className="layout-container">
      <div className="main-content">
        <Header />

        <div className="checkout-container">
          {!allItemsInCart && (
            <div className="checkout-container checkout-empty">
              <h2>Carrinho vazio</h2>
              <button onClick={() => navigate("/")}>Adicionar itens</button>
            </div>
          )}
          {allItemsInCart.map((product) => (
            <div key={product.index}>
              <CheckoutProductCard item={product} />
            </div>
          ))}
          {allItemsInCart && (
            <div className="checkout-button">
              <h3>Total: R$ {totalProductsInCart?.sum}</h3>
              <button>Finalizar compra</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
