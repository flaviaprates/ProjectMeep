import { useCartStatus } from "hooks/useCartStatus";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const CardResumeModal = () => {
  const navigate = useNavigate();
  const { totalProductsInCart } = useCartStatus();

  return (
    <div className="modal-container">
      <div className="modal-content">
        {!totalProductsInCart && <p>Carrinho vazio</p>}
        {totalProductsInCart?.items.map((it) => (
          <div className="cart-product-resume" key={it.index}>
            <div>
              <p>
                {it.numberItens}x {it.name}
              </p>
              {it.obs && <p>Obs: {it.obs}</p>}
            </div>
            <p>R$ {it.totalPrice.toFixed(2).replace(".", ",")}</p>
          </div>
        ))}
        {totalProductsInCart?.sum && <p>Total: R$ {totalProductsInCart.sum}</p>}

        <button
          onClick={() => navigate("/checkout")}
          disabled={!totalProductsInCart}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};

export default CardResumeModal;
