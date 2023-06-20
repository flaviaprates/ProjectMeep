import { useMemo } from "react";
import { useOpenCardResume } from "stores/useOpenCardResume";
import { useShoppingCart } from "stores/useShoppingCart";
import { handleShoppingCart } from "utils/index";
import "./styles.css";

const ShoppingResumeFooter = () => {
  const openCardResume = useOpenCardResume((state) => state.openCardResume);
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);

  const totalProductsInCart = useMemo(
    () => (shoppingCart.length > 0 ? handleShoppingCart(shoppingCart) : null),
    [shoppingCart]
  );

  return (
    <>
      {!openCardResume && shoppingCart.length > 0 && (
        <div className="container-footer">
          <div className="container-footer">
            {totalProductsInCart && (
              <>
                <p>
                  {totalProductsInCart?.items.length}{" "}
                  {totalProductsInCart?.items.length > 1 ? `itens` : `item`}
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
