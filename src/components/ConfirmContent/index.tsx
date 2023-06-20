import Delivery from "assets/icons/delivery.png";
import Mail from "assets/icons/mail.png";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";
import "styles/main.css";
import "./styles.css";

const ConfirmContent = () => {
  const navigate = useNavigate();

  return (
    <div className="layout-container">
      <div className="main-content">
        <Header />

        <div className="products-container">
          <div className="confirm-message">
            <h1>Pedido confirmado com sucesso!</h1>
            <div className="confirm-info">
              <img src={Delivery} width="30px" />
              <span>Seus produtos logo estarão com você!</span>
            </div>
            <div className="confirm-info">
              <img src={Mail} width="30px" />
              <span>
                Fica de olho no seu e-mail, pois é por lá nós atualizamos o
                status do seu pedido.
              </span>
            </div>
            <button onClick={() => navigate("/")}>
              Voltar para a página principal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmContent;
