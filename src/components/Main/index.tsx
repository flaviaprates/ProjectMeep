import Header from "components/Header";
import CardResumeModal from "components/Header/CardResumeModal";
import ProductCard from "components/Main/ProductCard";
import ShoppingResumeFooter from "components/ShoppingResumeFooter";
import { useEffect, useMemo } from "react";
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
  const setOpenCardResume = useOpenCardResume(
    (state) => state.setOpenCardResume
  );
  const setSelectProduct = useSelectProduct((state) => state.setSelectProduct);

  const { data } = useGetAllProducts({});

  const allProducts = useMemo(
    () => (data?.results ? handleData(data.results) : []),
    [data]
  );

  useEffect(() => {
    setOpenCardResume(false);
  }, [setOpenCardResume]);

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
                <ProductCard item={it} />
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
