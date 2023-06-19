import Header from "components/Header";
import CardResumeModal from "components/Header/CardResumeModal";
import ProductCard from "components/Main/ProductCard";
import ShoppingResumeFooter from "components/ShoppingResumeFooter";
import { useMemo } from "react";
import { useGetAllProducts } from "services/main";
import { useOpenCardResume } from "stores/useOpenCardResume";
import "styles/main.css";
import "./styles.css";
import { handleData } from "./utils";

const MainContent = () => {
  const openCardResume = useOpenCardResume((state) => state.openCardResume);

  const { data } = useGetAllProducts({});

  const allProducts = useMemo(
    () => (data?.results ? handleData(data.results) : []),
    [data]
  );

  console.log(allProducts);

  return (
    <>
      {openCardResume && <CardResumeModal />}
      <div className="layout-container">
        <div className="main-content">
          <Header />

          <div className="products-container">
            {allProducts.map((it) => (
              <div className="product" key={it.index}>
                <ProductCard image={it.url} name={it.name} price={it.price} />
              </div>
            ))}
          </div>
        </div>

        {!openCardResume && <ShoppingResumeFooter />}
      </div>
    </>
  );
};

export default MainContent;
