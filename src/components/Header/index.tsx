import ShoppingCard from "assets/icons/shopping-cart.png";
import { useNavigate } from "react-router-dom";
import { useOpenCardResume } from "stores/useOpenCardResume";
import "./styles.css";

const Header = () => {
  const navigate = useNavigate();
  const openCardResume = useOpenCardResume((state) => state.openCardResume);
  const setOpenCardResume = useOpenCardResume(
    (state) => state.setOpenCardResume
  );

  return (
    <header>
      <div onClick={() => navigate("/")}>
        <h1>PokeMeep</h1>
      </div>
      <div
        className="shopping-card"
        onClick={() => setOpenCardResume(!openCardResume)}
      >
        <img src={ShoppingCard} width="50px" />
      </div>
    </header>
  );
};

export default Header;
