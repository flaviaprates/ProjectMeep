import "./styles.css";
import { ProductCardProps } from "./types";

const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={image} alt="test" width="200px" />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
