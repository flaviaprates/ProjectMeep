import ShoppingCard from "assets/icons/shopping-cart.png";
import { useOpenCardResume } from "stores/useOpenCardResume";

const Header = () => {
  const openCardResume = useOpenCardResume((state) => state.openCardResume);
  const setOpenCardResume = useOpenCardResume(
    (state) => state.setOpenCardResume
  );

  return (
    <header>
      <h2>PokeMeep</h2>
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
