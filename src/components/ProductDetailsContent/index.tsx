import Header from "components/Header";
import CardResumeModal from "components/Header/CardResumeModal";
import ProductCard from "components/Main/ProductCard";
import ShoppingResumeFooter from "components/ShoppingResumeFooter";
import { useOpenCardResume } from "stores/useOpenCardResume";
import { useSelectProduct } from "stores/useSelectProduct";
import "styles/main.css";

const ProductDetailsContent = () => {
  const openCardResume = useOpenCardResume((state) => state.openCardResume);
  const selectProduct = useSelectProduct((state) => state.selectProduct);

  return (
    <>
      {openCardResume && <CardResumeModal />}
      <div className="layout-container">
        <div className="main-content">
          <Header />

          <div className="products-container">
            {selectProduct && (
              <ProductCard
                item={selectProduct}
                image={selectProduct.image}
                name={selectProduct.name}
                price={selectProduct.price}
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
