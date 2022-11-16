import produce from "immer";
import { Product } from "../../database/@types";
import { ActionTypes } from "./actions";
type CartProduct = Product & { qty: number };
interface CartState {
  cartProducts: CartProduct[];
  totalValue: number;
  totalProducts: number;
}

export function cartReducer(state: CartState, action: any): CartState {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      if (
        action.payload.cartProduct.qty === 0 ||
        !action.payload.cartProduct.qty
      )
        return state;
      console.log(action);

      const foundCartIndex = state.cartProducts.findIndex((cartProduct) => {
        return cartProduct.id === action.payload.cartProduct.id;
      });
      console.log(foundCartIndex);
      if (foundCartIndex >= 0) {
        return produce(state, (draft) => {
          draft.cartProducts[foundCartIndex].qty +=
            action.payload.cartProduct.qty;
          draft.totalProducts += action.payload.cartProduct.qty;
          draft.totalValue +=
            action.payload.cartProduct.price * action.payload.cartProduct.qty;
        });
      } else {
        return produce(state, (draft) => {
          draft.totalProducts += action.payload.cartProduct.qty;
          draft.totalValue +=
            action.payload.cartProduct.price * action.payload.cartProduct.qty;
          draft.cartProducts.push(action.payload.cartProduct);
        });
      }
    }

    case ActionTypes.SUBTRACT_FROM_CART: {
      console.log(action);
      const foundCartIndex = state.cartProducts.findIndex(
        (cartProduct) => cartProduct.id === action.payload.cartProductId
      );

      if (foundCartIndex >= 0) {
        return produce(state, (draft) => {
          if (
            draft.cartProducts[foundCartIndex].qty - action.payload.qty <=
            0
          ) {
            draft.totalProducts -= draft.cartProducts[foundCartIndex].qty;
            draft.totalValue -=
              draft.cartProducts[foundCartIndex].qty *
              draft.cartProducts[foundCartIndex].price;
            draft.cartProducts = draft.cartProducts.filter(
              (cartProduct) => cartProduct.id !== action.payload.cartProductId
            );
          } else {
            draft.cartProducts[foundCartIndex].qty -= action.payload.qty;
            draft.totalProducts -= action.payload.qty;
            draft.totalValue -=
              draft.cartProducts[foundCartIndex].price * action.payload.qty;
          }
        });
      } else {
        return state;
      }
    }
    case ActionTypes.REMOVE_FROM_CART: {
      console.log(action);
      const foundCartIndex = state.cartProducts.findIndex(
        (cartProduct) => cartProduct.id === action.payload.cartProductId
      );
      if (foundCartIndex >= 0) {
        return produce(state, (draft) => {
          draft.totalProducts -= draft.cartProducts[foundCartIndex].qty;
          draft.totalValue -=
            draft.cartProducts[foundCartIndex].qty *
            draft.cartProducts[foundCartIndex].price;
          draft.cartProducts = draft.cartProducts.filter(
            (cartProduct) => cartProduct.id !== action.payload.cartProductId
          );
        });
      } else {
        return state;
      }
    }

    default: {
      console.log("DEFAULT", action);
      return state;
    }
  }
}
