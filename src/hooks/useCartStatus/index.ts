import { useShoppingCart } from "stores/useShoppingCart";

export const useCartStatus = () => {
  const shoppingCart = useShoppingCart((state) => state.shoppingCart);
  return {};
};
