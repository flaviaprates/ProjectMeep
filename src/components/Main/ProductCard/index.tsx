import TestImage from "assets/product-card-test/coffee.jpeg";
import "./styles.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={TestImage} alt="test" width="200px" />
      <h3>Nome</h3>
      <p>Preço</p>
    </div>
  );
};

export default ProductCard;
