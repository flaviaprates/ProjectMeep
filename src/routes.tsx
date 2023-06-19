import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/checkout";
import Confirm from "./pages/confirm";
import Main from "./pages/main";
import ProductDetails from "./pages/poduct-details";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/product-details" element={<ProductDetails />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  );
};

export default MainRoutes;
