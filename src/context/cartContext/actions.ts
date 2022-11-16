import { CartProduct } from "./cartContext";

export enum ActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  SUBTRACT_FROM_CART = "SUBTRACT_FROM_CART",
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  CALCULATE_TOTAL_PRODUCTS_IN_CART = "CALCULATE_TOTAL_PRODUCTS_IN_CART",
  CALCULATE_TOTAL_VALUE_IN_CART = "CALCULATE_TOTAL_PRODUCTS_IN_CART",
}

export function addToCartAction(cartProduct: CartProduct) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      cartProduct,
    },
  };
}
export function subtractFromCartAction(cartProductId: string, qty: number) {
  return {
    type: ActionTypes.SUBTRACT_FROM_CART,
    payload: {
      cartProductId,
      qty,
    },
  };
}
export function removeFromCartAction(cartProductId: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      cartProductId,
    },
  };
}
export function calculateTotalValueInCartAction() {
  return {
    type: ActionTypes.CALCULATE_TOTAL_VALUE_IN_CART,
  };
}
export function calculateTotalProductsInCartAction() {
  return {
    type: ActionTypes.CALCULATE_TOTAL_PRODUCTS_IN_CART,
  };
}
