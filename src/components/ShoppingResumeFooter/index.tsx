import { useCartStatus } from "hooks/useCartStatus";
import { useMemo } from "react";
import { useOpenCardResume } from "stores/useOpenCardResume";
import { useShoppingCart } from "stores/useShoppingCart";
import "./styles.css";
import { handleCountTotalItem } from "./utils";

const ShoppingResumeFooter = () => {
  const openCardResume = useOpenCardResume((state) => state.openCardResume);
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);

  const { totalProductsInCart } = useCartStatus();

  const totalItems = useMemo(
    () =>
      totalProductsInCart?.items
        ? handleCountTotalItem(totalProductsInCart.items)
        : 0,
    [totalProductsInCart]
  );

  return (
    <>
      {!openCardResume && shoppingCart.length > 0 && (
        <div className="container-footer">
          <div className="container-footer">
            {totalProductsInCart && (
              <>
                <p>
                  {totalItems} {totalItems > 1 ? `itens` : `item`}
                </p>
                <p>Total: R$ {totalProductsInCart?.sum}</p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingResumeFooter;
