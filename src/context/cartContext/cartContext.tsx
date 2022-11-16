import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Product } from "../../database/@types";
import {
  addToCartAction,
  calculateTotalProductsInCartAction,
  removeFromCartAction,
  subtractFromCartAction,
} from "./actions";
import { cartReducer } from "./reducer";

export type CartProduct = Product & { qty: number };
export interface CartContextType {
  cartProducts: CartProduct[];
  totalValue: number;
  totalProducts: number;
  calculateTotalProductsInCart: () => void;
  subtractFromCart: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  addToCart: (cartProduct: CartProduct) => void;
}
interface ICartContextProvider {
  children: ReactNode;
}
export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cartProducts: [],
      totalValue: 0,
      totalProducts: 0,
    },
    () => {
      console.log("initialize function called");
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      } else {
        console.log("initial state");
        return {
          cartProducts: [],
          totalValue: 0,
          totalProducts: 0,
        };
      }
    }
  );
  console.log("calling context", cartState);
  const { cartProducts, totalProducts, totalValue } = cartState;

  function calculateTotalProductsInCart() {
    dispatch(calculateTotalProductsInCartAction());
  }
  function subtractFromCart(id: string, qty: number) {
    dispatch(subtractFromCartAction(id, qty));
  }
  function removeFromCart(id: string) {
    dispatch(removeFromCartAction(id));
  }
  function addToCart(cartProduct: CartProduct) {
    dispatch(addToCartAction(cartProduct));
  }
  useEffect(() => {
    console.log("should update local storage", cartState);
    const stateJSON = JSON.stringify(cartState);

    localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        totalValue,
        totalProducts,
        removeFromCart,
        addToCart,
        calculateTotalProductsInCart,
        subtractFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
