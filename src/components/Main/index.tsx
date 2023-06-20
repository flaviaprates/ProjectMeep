import Header from "components/Header";
import CardResumeModal from "components/Header/CardResumeModal";
import ProductCard from "components/Main/ProductCard";
import ShoppingResumeFooter from "components/ShoppingResumeFooter";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useGetAllProducts } from "services/main";
import { useOpenCardResume } from "stores/useOpenCardResume";
import { useSelectProduct } from "stores/useSelectProduct";
import "styles/main.css";
import "./styles.css";
import { handleData } from "./utils";

const MainContent = () => {
  const navigate = useNavigate();
  const openCardResume = useOpenCardResume((state) => state.openCardResume);
  const setSelectProduct = useSelectProduct((state) => state.setSelectProduct);

  const { data } = useGetAllProducts({});

  const allProducts = useMemo(
    () => (data?.results ? handleData(data.results) : []),
    [data]
  );

  return (
    <>
      {openCardResume && <CardResumeModal />}
      <div className="layout-container">
        <div className="main-content">
          <Header />

          <div className="products-container">
            {allProducts.map((it) => (
              <div
                className="product"
                key={it.index}
                onClick={() => {
                  setSelectProduct(it);
                  navigate("/product-details");
                }}
              >
                <ProductCard
                  item={it}
                  image={it.image}
                  name={it.name}
                  price={it.price}
                />
              </div>
            ))}
          </div>
        </div>

        <ShoppingResumeFooter />
      </div>
    </>
  );
};

export default MainContent;
