import { useMemo } from "react";
import { useShoppingCart } from "stores/useShoppingCart";
import { handleShoppingCart } from "utils/index";

export const useCartStatus = () => {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);

  const totalProductsInCart = useMemo(
    () => (shoppingCart.length > 0 ? handleShoppingCart(shoppingCart) : null),
    [shoppingCart]
  );
  return { totalProductsInCart };
};
