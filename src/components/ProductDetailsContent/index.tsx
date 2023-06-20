import Previous from "assets/icons/previous.png";
import Header from "components/Header";
import CardResumeModal from "components/Header/CardResumeModal";
import ProductCard from "components/Main/ProductCard";
import ShoppingResumeFooter from "components/ShoppingResumeFooter";
import { useNavigate } from "react-router-dom";
import { useOpenCardResume } from "stores/useOpenCardResume";
import { useSelectProduct } from "stores/useSelectProduct";
import "styles/main.css";
import "./styles.css";

const ProductDetailsContent = () => {
  const navigate = useNavigate();
  const openCardResume = useOpenCardResume((state) => state.openCardResume);
  const selectProduct = useSelectProduct((state) => state.selectProduct);

  return (
    <>
      {openCardResume && <CardResumeModal />}
      <div className="layout-container">
        <div className="main-content">
          <Header />

          <div className="products-container">
            <div className="back-to-main" onClick={() => navigate("/")}>
              <img src={Previous} width="40px" />
            </div>
            {selectProduct && (
              <ProductCard
                item={selectProduct}
                description={selectProduct.description}
              />
            )}
          </div>
        </div>

        <ShoppingResumeFooter />
      </div>
    </>
  );
};

export default ProductDetailsContent;
